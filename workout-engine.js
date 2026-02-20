// =============================================
// HELPERS
// =============================================
function makeKey(sessionKey, exId, field) {
    return `wt__${sessionKey}__${exId}__${field}`;
}

function buildSessionKey(groups) {
    return [...groups].sort().join('_');
}

function getSetCount(sessionKey, exId, defaultCount) {
    const saved = localStorage.getItem(makeKey(sessionKey, exId, 'setcount'));
    return saved ? parseInt(saved, 10) : defaultCount;
}

function groupLabel(groupId) {
    const g = GROUPS.find(x => x.id === groupId);
    return g ? g.label : groupId;
}

// =============================================
// ROUTING
// =============================================
function showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById('screen-' + name).style.display = 'block';
}

function init() {
    const saved = localStorage.getItem('wt__active_session');
    if (saved) {
        try {
            const session = JSON.parse(saved);
            AppState.sessionKey    = session.key;
            AppState.currentGroups = session.groups;
            const defaultList = session.presetId === 'full_top'
                ? buildFullTopList()
                : getDefaultExercisesForGroups(session.groups);
            AppState.currentSession = loadExerciseList(session.key, defaultList);
            setWorkoutHeader(session.groups, session.presetId);
            showScreen('workout');
            renderWorkout();
        } catch(e) {
            localStorage.removeItem('wt__active_session');
            showScreen('selection');
            renderSelectionScreen();
        }
    } else {
        showScreen('selection');
        renderSelectionScreen();
    }

    // Boutons workout header
    document.getElementById('reset-btn').addEventListener('click', resetSets);
    document.getElementById('leave-btn').addEventListener('click', leaveSession);
    document.getElementById('add-exercise-btn').addEventListener('click', showAddExerciseModal);
    document.getElementById('finish-btn').addEventListener('click', startPlankScreen);

    // Délégation événements sur la grille
    const grid = document.getElementById('workout-grid');
    grid.addEventListener('click', e => {
        const actionEl = e.target.closest('[data-action]');
        if (actionEl) {
            const action = actionEl.dataset.action;
            const exId   = actionEl.dataset.exId;
            if (action === 'remove')     removeExercise(exId);
            if (action === 'sets-minus') adjustSetCount(exId, -1);
            if (action === 'sets-plus')  adjustSetCount(exId, +1);
            if (action === 'swap')       showSwapModal(exId);
            return;
        }
        const box = e.target.closest('.set-box');
        if (box) handleSetBoxClick(box);
    });
    grid.addEventListener('input', e => {
        if (e.target.classList.contains('weight-in')) {
            localStorage.setItem(e.target.id, e.target.value);
        }
    });

    // Plank buttons
    document.getElementById('plank-toggle-btn').addEventListener('click', togglePlank);
    document.getElementById('plank-reset-btn').addEventListener('click', resetPlankToStart);
    document.getElementById('return-home-btn').addEventListener('click', returnHome);

    // Fermer modal en cliquant hors
    document.getElementById('modal-overlay').addEventListener('click', e => {
        if (e.target === document.getElementById('modal-overlay')) closeModal();
    });
}

function setWorkoutHeader(groups, presetId) {
    const title = presetId === 'full_top'
        ? 'FULL TOP'
        : groups.map(groupLabel).join(' / ').toUpperCase();
    document.getElementById('workout-title').textContent = title;
    document.getElementById('workout-subtitle').textContent =
        `${AppState.currentSession.length} exercice${AppState.currentSession.length > 1 ? 's' : ''} · Focus excentrique`;
}

// =============================================
// ÉCRAN SÉLECTION
// =============================================
function renderSelectionScreen() {
    const content = document.getElementById('selection-content');
    const statusText = AppState.selectedGroups.length === 0
        ? 'Aucun groupe sélectionné'
        : AppState.selectedGroups.map(groupLabel).join(' + ');
    const isActive = AppState.selectedGroups.length > 0;

    content.innerHTML = `
        <div class="selection-grid">
            <div>
                <p class="section-label">Groupes musculaires</p>
                <div class="groups-grid">
                    ${GROUPS.map(g => `
                        <button class="group-btn ${AppState.selectedGroups.includes(g.id) ? 'selected' : ''}"
                                data-group="${g.id}">${g.label}</button>
                    `).join('')}
                </div>
                <p class="selection-status ${isActive ? 'active' : ''}">${statusText}</p>
            </div>
            <div>
                <p class="section-label">Combos rapides</p>
                <div class="presets-list">
                    ${PRESETS.map(p => `
                        <button class="preset-btn" data-preset="${p.id}">
                            <span class="preset-name">${p.label}</span>
                            <span class="preset-desc">${p.desc}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
        <button class="start-btn" id="start-btn" ${isActive ? '' : 'disabled'}>DÉMARRER LA SÉANCE</button>
    `;

    // Events sélection
    content.querySelectorAll('.group-btn').forEach(btn => {
        btn.addEventListener('click', () => toggleGroup(btn.dataset.group));
    });
    content.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
    });
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            if (AppState.selectedGroups.length > 0)
                startSession(AppState.selectedGroups, null);
        });
    }
}

function toggleGroup(groupId) {
    const idx = AppState.selectedGroups.indexOf(groupId);
    if (idx !== -1) {
        AppState.selectedGroups.splice(idx, 1);
    } else {
        if (AppState.selectedGroups.length >= 2) {
            AppState.selectedGroups.shift();
        }
        AppState.selectedGroups.push(groupId);
    }
    renderSelectionScreen();
}

function applyPreset(presetId) {
    const preset = PRESETS.find(p => p.id === presetId);
    if (!preset) return;
    startSession(preset.groups, presetId);
}

function getDefaultExercisesForGroups(groups) {
    if (groups.length === 1) {
        return DEFAULT_SESSIONS[groups[0]] || [];
    }
    return groups.flatMap(g => (DEFAULT_SESSIONS[g] || []).slice(0, 3));
}

function buildFullTopList() {
    return ['pecs','triceps','biceps','dos','epaules','trapezes']
        .map(g => DEFAULT_SESSIONS[g][0]);
}

function loadExerciseList(sessionKey, defaultList) {
    const saved = localStorage.getItem(`wt__${sessionKey}__exercises`);
    if (saved) {
        try { return JSON.parse(saved); } catch(e) {}
    }
    return defaultList;
}

function saveExerciseList(sessionKey, list) {
    localStorage.setItem(`wt__${sessionKey}__exercises`, JSON.stringify(list));
}

function startSession(groups, presetId) {
    const key = buildSessionKey(groups);
    const defaultList = presetId === 'full_top'
        ? buildFullTopList()
        : getDefaultExercisesForGroups(groups);

    AppState.sessionKey     = key;
    AppState.currentGroups  = groups;
    AppState.currentSession = loadExerciseList(key, defaultList);

    localStorage.setItem('wt__active_session', JSON.stringify({ key, groups, presetId }));

    setWorkoutHeader(groups, presetId);
    showScreen('workout');
    renderWorkout();
}

// =============================================
// ÉCRAN WORKOUT
// =============================================
function renderWorkout() {
    const grid = document.getElementById('workout-grid');
    grid.innerHTML = '';
    AppState.currentSession.forEach((exId, index) => {
        const ex = EXERCISES[exId];
        if (!ex) return;
        grid.appendChild(buildCard(ex, index));
    });
    // MAJ subtitle
    const subtitle = document.getElementById('workout-subtitle');
    if (subtitle) {
        const n = AppState.currentSession.length;
        subtitle.textContent = `${n} exercice${n > 1 ? 's' : ''} · Focus excentrique`;
    }
}

function buildCard(ex, index) {
    const { sessionKey } = AppState;
    const setCount = getSetCount(sessionKey, ex.id, ex.defaultSets);
    const weightKey = makeKey(sessionKey, ex.id, 'weight');
    const weight = localStorage.getItem(weightKey) || '';

    const svgData = EXERCISE_SVG[ex.id];
    const animBoxHtml = svgData
        ? `<div class="anim-box">${svgData.html}<div class="anim-label">${svgData.label}</div></div>`
        : '';

    const hasAlts = ex.alternatives && ex.alternatives.length > 0;

    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.exId = ex.id;

    card.innerHTML = `
        <div class="card-header">
            <span class="card-number">${String(index + 1).padStart(2, '0')}</span>
            <span class="card-tag">${ex.tag}</span>
            <button class="btn-remove" data-action="remove" data-ex-id="${ex.id}">Retirer</button>
        </div>
        ${animBoxHtml}
        <div class="card-body">
            <h2 class="card-title bebas">${ex.name}</h2>
            <div class="card-muscles">${ex.muscles}</div>
            <div class="pills">
                <span class="pill sets-pill">${setCount}x${ex.reps}</span>
                <span class="pill rest">Repos: ${ex.rest}</span>
            </div>
            <div class="tracker-area">
                <div class="weight-input-group">
                    <label>${ex.weightLabel}</label>
                    <input type="number" class="weight-in" id="${weightKey}" placeholder="0" value="${weight}">
                </div>
                <div class="sets-group">
                    <label>Séries</label>
                    <div class="set-count-adjuster">
                        <button class="btn-adj" data-action="sets-minus" data-ex-id="${ex.id}">−</button>
                        <span class="set-count-display">${setCount}</span>
                        <button class="btn-adj" data-action="sets-plus" data-ex-id="${ex.id}">+</button>
                    </div>
                    <div class="set-boxes" id="setboxes-${ex.id}">
                        ${buildSetBoxes(ex.id, setCount)}
                    </div>
                </div>
            </div>
            ${hasAlts ? `<button class="btn-swap" data-action="swap" data-ex-id="${ex.id}">⇄ Changer d'exercice</button>` : ''}
            <div class="card-advice">${ex.advice}</div>
        </div>
    `;

    checkCardCompletion(card);
    return card;
}

function buildSetBoxes(exId, count) {
    const { sessionKey } = AppState;
    return Array.from({ length: count }, (_, i) => {
        const key = makeKey(sessionKey, exId, `set_${i + 1}`);
        const checked = localStorage.getItem(key) === 'true' ? 'checked' : '';
        return `<div class="set-box ${checked}" data-key="${key}">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>`;
    }).join('');
}

function handleSetBoxClick(box) {
    box.classList.toggle('checked');
    localStorage.setItem(box.dataset.key, box.classList.contains('checked'));
    checkCardCompletion(box.closest('.card'));
}

function checkCardCompletion(card) {
    if (!card) return;
    const boxes = card.querySelectorAll('.set-box');
    const allChecked = boxes.length > 0 && Array.from(boxes).every(b => b.classList.contains('checked'));
    card.classList.toggle('done', allChecked);
}

function adjustSetCount(exId, delta) {
    const { sessionKey } = AppState;
    const ex = EXERCISES[exId];
    if (!ex) return;
    const current = getSetCount(sessionKey, exId, ex.defaultSets);
    const next = Math.min(6, Math.max(1, current + delta));
    if (next === current) return;

    localStorage.setItem(makeKey(sessionKey, exId, 'setcount'), String(next));
    // Supprimer la clé de la série supprimée
    if (delta < 0) localStorage.removeItem(makeKey(sessionKey, exId, `set_${current}`));

    // Mise à jour ciblée du DOM (pas de re-render complet)
    const card = document.querySelector(`.card[data-ex-id="${exId}"]`);
    if (!card) return;
    card.querySelector('.set-count-display').textContent = next;
    card.querySelector('.sets-pill').textContent = `${next}x${ex.reps}`;
    card.querySelector(`#setboxes-${exId}`).innerHTML = buildSetBoxes(exId, next);
    checkCardCompletion(card);
}

function removeExercise(exId) {
    if (AppState.currentSession.length <= 1) {
        alert('Impossible de retirer le dernier exercice.');
        return;
    }
    AppState.currentSession = AppState.currentSession.filter(id => id !== exId);
    saveExerciseList(AppState.sessionKey, AppState.currentSession);
    renderWorkout();
}

function resetSets() {
    if (!confirm('Remettre à zéro toutes les séries ? (Les poids resteront sauvegardés)')) return;
    const { sessionKey, currentSession } = AppState;
    currentSession.forEach(exId => {
        const setCount = getSetCount(sessionKey, exId, EXERCISES[exId]?.defaultSets || 3);
        for (let i = 1; i <= setCount; i++) {
            localStorage.removeItem(makeKey(sessionKey, exId, `set_${i}`));
        }
    });
    renderWorkout();
}

function leaveSession() {
    if (!confirm('Quitter cette séance ? (Vos données sont sauvegardées)')) return;
    localStorage.removeItem('wt__active_session');
    AppState.currentSession = null;
    AppState.currentGroups  = [];
    AppState.sessionKey     = '';
    AppState.selectedGroups = [];
    showScreen('selection');
    renderSelectionScreen();
}

// =============================================
// MODAUX
// =============================================
function openModal(html) {
    document.getElementById('modal-content').innerHTML = html;
    document.getElementById('modal-overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
}

function showAddExerciseModal() {
    const available = Object.values(EXERCISES).filter(ex =>
        AppState.currentGroups.includes(ex.group) &&
        !AppState.currentSession.includes(ex.id)
    );

    const itemsHtml = available.length > 0
        ? available.map(ex => `
            <div class="modal-item">
                <div class="ex-info">
                    <div class="ex-name">${ex.name}</div>
                    <div class="ex-meta">${ex.muscles} · ${ex.defaultSets}x${ex.reps}</div>
                </div>
                <button class="btn-modal-action" data-add-ex="${ex.id}">Ajouter</button>
            </div>
        `).join('')
        : `<p class="modal-empty">Tous les exercices de cette séance sont déjà ajoutés.</p>`;

    openModal(`
        <h2 class="modal-title">Ajouter un exercice</h2>
        <p class="modal-subtitle">${AppState.currentGroups.map(groupLabel).join(' / ')}</p>
        ${itemsHtml}
        <button class="modal-close" id="modal-close-btn">FERMER</button>
    `);

    document.querySelectorAll('[data-add-ex]').forEach(btn => {
        btn.addEventListener('click', () => addExercise(btn.dataset.addEx));
    });
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function addExercise(exId) {
    if (AppState.currentSession.includes(exId)) return;
    AppState.currentSession.push(exId);
    saveExerciseList(AppState.sessionKey, AppState.currentSession);
    closeModal();
    renderWorkout();
}

function showSwapModal(exId) {
    const ex = EXERCISES[exId];
    if (!ex || !ex.alternatives || ex.alternatives.length === 0) return;

    const alts = ex.alternatives.map(id => EXERCISES[id]).filter(Boolean);

    const itemsHtml = alts.map(alt => `
        <div class="modal-item">
            <div class="ex-info">
                <div class="ex-name">${alt.name}</div>
                <div class="ex-meta">${alt.muscles} · ${alt.defaultSets}x${alt.reps}</div>
                ${alt.altNote ? `<div class="ex-note">${alt.altNote}</div>` : ''}
            </div>
            <button class="btn-modal-action" data-swap-to="${alt.id}" data-swap-from="${exId}">Utiliser</button>
        </div>
    `).join('');

    openModal(`
        <h2 class="modal-title">Changer d'exercice</h2>
        <p class="modal-subtitle">Remplacer : <strong>${ex.name}</strong></p>
        ${itemsHtml}
        <button class="modal-close" id="modal-close-btn">FERMER</button>
    `);

    document.querySelectorAll('[data-swap-to]').forEach(btn => {
        btn.addEventListener('click', () => swapExercise(btn.dataset.swapFrom, btn.dataset.swapTo));
    });
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
}

function swapExercise(fromId, toId) {
    const idx = AppState.currentSession.indexOf(fromId);
    if (idx === -1) return;
    const { sessionKey } = AppState;
    const fromEx = EXERCISES[fromId];

    // Conserver le nombre de séries, réinitialiser le poids et les coches
    const setCount = getSetCount(sessionKey, fromId, fromEx?.defaultSets || 3);
    localStorage.setItem(makeKey(sessionKey, toId, 'setcount'), String(setCount));
    localStorage.removeItem(makeKey(sessionKey, toId, 'weight'));
    for (let i = 1; i <= setCount; i++) {
        localStorage.removeItem(makeKey(sessionKey, toId, `set_${i}`));
    }

    AppState.currentSession[idx] = toId;
    saveExerciseList(sessionKey, AppState.currentSession);
    closeModal();
    renderWorkout();
}

// =============================================
// TIMER GAINAGE
// =============================================
function startPlankScreen() {
    resetPlankState();
    showScreen('plank');
    document.getElementById('plank-complete').style.display = 'none';
    document.getElementById('plank-toggle-btn').style.display = 'inline-block';
    document.getElementById('plank-reset-btn').style.display = 'inline-block';
    document.getElementById('plank-toggle-btn').textContent = 'DÉMARRER';
    renderPlankPhase();
}

function resetPlankState() {
    clearInterval(AppState.plankState.intervalId);
    AppState.plankState = {
        phase: 0, secondsLeft: PLANK_SEQUENCE[0].duration, running: false, intervalId: null
    };
}

function resetPlankToStart() {
    resetPlankState();
    document.getElementById('plank-complete').style.display = 'none';
    document.getElementById('plank-toggle-btn').style.display = 'inline-block';
    document.getElementById('plank-reset-btn').style.display = 'inline-block';
    document.getElementById('plank-toggle-btn').textContent = 'DÉMARRER';
    renderPlankPhase();
}

function togglePlank() {
    const ps = AppState.plankState;
    if (ps.running) {
        clearInterval(ps.intervalId);
        ps.running = false;
        document.getElementById('plank-toggle-btn').textContent = 'REPRENDRE';
    } else {
        ps.running = true;
        ps.intervalId = setInterval(tickPlank, 1000);
        document.getElementById('plank-toggle-btn').textContent = 'PAUSE';
    }
}

function tickPlank() {
    const ps = AppState.plankState;
    ps.secondsLeft--;

    // Bips d'avertissement à 3, 2, 1
    if (ps.secondsLeft > 0 && ps.secondsLeft <= 3) playBeep(440, 0.12);

    if (ps.secondsLeft <= 0) {
        ps.phase++;
        if (ps.phase >= PLANK_SEQUENCE.length) {
            clearInterval(ps.intervalId);
            ps.running = false;
            playBeep(880, 0.5);
            showPlankComplete();
            return;
        }
        ps.secondsLeft = PLANK_SEQUENCE[ps.phase].duration;
        playBeep(660, 0.3);
    }

    renderPlankPhase();
}

function renderPlankPhase() {
    const ps = AppState.plankState;
    const phase = PLANK_SEQUENCE[ps.phase];
    const mins = Math.floor(ps.secondsLeft / 60);
    const secs = ps.secondsLeft % 60;

    document.getElementById('plank-countdown').textContent =
        `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

    // Indicateur de position
    ['face','left','right'].forEach(pos => {
        const el = document.getElementById('plank-pos-' + pos);
        if (el) el.classList.toggle('active', phase.pos === pos);
    });

    // Indicateur de série (phases 0-2 = série 1, 3-5 = série 2, 6-8 = série 3)
    const round = Math.floor(ps.phase / 3) + 1;
    document.getElementById('plank-round').textContent = `${phase.label} · Série ${round} / 3`;
}

function showPlankComplete() {
    renderPlankPhase();
    document.getElementById('plank-complete').style.display = 'block';
    document.getElementById('plank-toggle-btn').style.display = 'none';
    document.getElementById('plank-reset-btn').style.display = 'none';
}

function playBeep(frequency, duration) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc  = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = frequency;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration + 0.05);
    } catch(e) { /* AudioContext non disponible */ }
}

function returnHome() {
    localStorage.removeItem('wt__active_session');
    AppState.currentSession = null;
    AppState.currentGroups  = [];
    AppState.sessionKey     = '';
    AppState.selectedGroups = [];
    resetPlankState();
    showScreen('selection');
    renderSelectionScreen();
}

// =============================================
// DÉMARRAGE
// =============================================
document.addEventListener('DOMContentLoaded', init);
