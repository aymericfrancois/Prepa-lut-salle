// =============================================
// SVG DES EXERCICES JAMBES (conservés de la version originale)
// =============================================
const EXERCISE_SVG = {
    leg_press: {
        html: `<svg width="220" height="120" viewBox="0 0 220 120">
            <path d="M 20 20 L 40 90 L 80 90" class="machine" fill="none" />
            <circle cx="45" cy="65" r="10" fill="#fff" opacity="0.5" />
            <line x1="50" y1="80" x2="100" y2="70" class="bone" opacity="0.6" stroke-dasharray="4" />
            <g class="anim-press">
                <line x1="100" y1="30" x2="100" y2="110" class="machine" stroke-width="12" />
                <line x1="100" y1="50" x2="100" y2="90" class="muscle-active" />
                <path d="M 120 70 L 150 70 M 140 60 L 150 70 L 140 80" stroke="var(--primary)" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>`,
        label: 'FREINAGE 3S'
    },
    leg_extension: {
        html: `<svg width="200" height="120" viewBox="0 0 200 120">
            <line x1="60" y1="120" x2="60" y2="70" class="machine" />
            <line x1="40" y1="70" x2="100" y2="70" class="machine" />
            <line x1="60" y1="60" x2="150" y2="70" class="muscle-active" />
            <line x1="60" y1="60" x2="150" y2="70" class="bone" />
            <circle cx="60" cy="60" r="6" class="joint" />
            <g class="anim-ext">
                <line x1="150" y1="70" x2="130" y2="120" class="bone" />
                <rect x="115" y="110" width="15" height="20" class="machine-pad" />
                <circle cx="150" cy="70" r="6" class="joint" />
            </g>
        </svg>`,
        label: 'DESCENTE 3S'
    },
    bulgarian_squat: {
        html: `<svg width="200" height="140" viewBox="0 0 200 140">
            <rect x="30" y="90" width="30" height="10" class="machine-pad" />
            <line x1="45" y1="100" x2="45" y2="140" class="machine" />
            <g class="anim-squat">
                <line x1="100" y1="20" x2="100" y2="60" class="bone" />
                <line x1="100" y1="60" x2="45" y2="80" class="bone" stroke-width="6" opacity="0.5" />
                <line x1="100" y1="60" x2="140" y2="60" class="muscle-active" />
                <line x1="100" y1="60" x2="140" y2="60" class="bone" />
                <line x1="140" y1="60" x2="140" y2="110" class="bone" />
                <circle cx="100" cy="60" r="6" class="joint" />
                <circle cx="140" cy="60" r="6" class="joint" />
                <circle cx="140" cy="110" r="5" class="joint" />
            </g>
            <line x1="10" y1="130" x2="190" y2="130" stroke="#333" stroke-width="2" />
        </svg>`,
        label: 'DESCENTE 3S'
    },
    fentes_marchees: {
        html: `<svg width="200" height="140" viewBox="0 0 200 140">
            <g class="anim-lunge">
                <line x1="100" y1="20" x2="100" y2="60" class="bone" />
                <line x1="100" y1="60" x2="60" y2="100" class="bone" opacity="0.5" />
                <line x1="60" y1="100" x2="40" y2="100" class="bone" opacity="0.5" />
                <line x1="100" y1="60" x2="150" y2="60" class="muscle-active" />
                <line x1="100" y1="60" x2="150" y2="60" class="bone" />
                <line x1="150" y1="60" x2="150" y2="110" class="bone" />
                <circle cx="100" cy="60" r="6" class="joint" />
                <circle cx="150" cy="60" r="6" class="joint" />
                <circle cx="60" cy="100" r="5" class="joint" opacity="0.5" />
            </g>
            <line x1="10" y1="130" x2="190" y2="130" stroke="#333" stroke-width="2" />
            <circle cx="60" cy="125" r="4" fill="var(--primary)" />
        </svg>`,
        label: "JUSQU'AU SOL"
    },
    step_up: {
        html: `<svg width="200" height="140" viewBox="0 0 200 140">
            <rect x="110" y="80" width="60" height="60" class="machine-pad" />
            <g class="anim-step">
                <line x1="130" y1="10" x2="130" y2="50" class="bone" />
                <line x1="130" y1="50" x2="140" y2="75" class="muscle-active" />
                <line x1="130" y1="50" x2="140" y2="75" class="bone" />
                <line x1="140" y1="75" x2="140" y2="80" class="bone" />
                <line x1="130" y1="50" x2="90" y2="90" class="bone" opacity="0.5" />
                <line x1="90" y1="90" x2="90" y2="130" class="bone" opacity="0.5" />
                <circle cx="130" cy="50" r="6" class="joint" />
                <circle cx="140" cy="75" r="5" class="joint" />
            </g>
        </svg>`,
        label: 'RETENIR 3S'
    },
    leg_curl: {
        html: `<svg width="200" height="120" viewBox="0 0 200 120">
            <line x1="40" y1="80" x2="160" y2="80" class="machine" />
            <line x1="50" y1="70" x2="100" y2="70" class="bone" />
            <line x1="100" y1="70" x2="160" y2="70" class="muscle-active" />
            <line x1="100" y1="70" x2="160" y2="70" class="bone" />
            <g class="anim-curl">
                <line x1="160" y1="70" x2="190" y2="70" class="bone" />
                <rect x="175" y="60" width="10" height="20" class="machine-pad" />
                <circle cx="160" cy="70" r="6" class="joint" />
            </g>
        </svg>`,
        label: 'RETOUR 3S'
    },
    mollets: {
        html: `<svg width="300" height="140" viewBox="0 0 300 140">
            <rect x="100" y="90" width="100" height="50" class="machine-pad" />
            <g class="anim-calf">
                <line x1="150" y1="10" x2="150" y2="60" class="bone" />
                <line x1="150" y1="60" x2="130" y2="100" class="muscle-active" />
                <line x1="150" y1="60" x2="130" y2="100" class="bone" />
                <line x1="130" y1="100" x2="160" y2="90" class="bone" stroke-width="6" />
                <circle cx="150" cy="60" r="6" class="joint" />
                <circle cx="130" cy="100" r="5" class="joint" />
            </g>
        </svg>`,
        label: 'PAUSE 1S EN HAUT'
    }
};

// =============================================
// BASE DE DONNÉES DES EXERCICES
// =============================================
const EXERCISES = {
    // --- JAMBES ---
    leg_press:       { id:'leg_press',       name:'Leg Press',                  group:'jambes',   muscles:'Quadriceps, Fessiers',          defaultSets:4, reps:'10',        rest:'60-75s', tag:'Priorité',        weightLabel:'Charge (kg)',   advice:'Plateau freiné à la descente. Focus vaste externe pour encaisser les chocs en descente.',         alternatives:['hack_squat'],                   altNote:null },
    hack_squat:      { id:'hack_squat',      name:'Hack Squat Machine',         group:'jambes',   muscles:'Quadriceps, Fessiers',          defaultSets:4, reps:'10',        rest:'60-75s', tag:'Alternative',     weightLabel:'Charge (kg)',   advice:'Pieds hauts pour cibler les ischios, pieds bas pour les quads.',                                   alternatives:['leg_press'],                    altNote:'Si le leg press est pris. Même pattern de poussée, machine guidée.' },
    leg_extension:   { id:'leg_extension',   name:'Leg Extension',              group:'jambes',   muscles:'Quadriceps Isolement',          defaultSets:3, reps:'12',        rest:'60s',    tag:'Zone Douloureuse', weightLabel:'Charge (kg)',   advice:'Renforce exactement la zone de tendinite en descente trail. Ne lâche pas le poids !',             alternatives:['sissy_squat'],                  altNote:null },
    sissy_squat:     { id:'sissy_squat',     name:'Sissy Squat',                group:'jambes',   muscles:'Quadriceps Isolement',          defaultSets:3, reps:'10',        rest:'60s',    tag:'Alternative',     weightLabel:'Poids corps',  advice:'Amplitude complète, buste droit. Excellent pour les quads.',                                      alternatives:['leg_extension'],                altNote:'Si la machine leg extension est prise. Au poids du corps.' },
    bulgarian_squat: { id:'bulgarian_squat', name:'Bulgarian Squat',            group:'jambes',   muscles:'Quads, Fessiers',               defaultSets:3, reps:'10/jambe', rest:'60s',    tag:'Stabilité',       weightLabel:'Haltères (kg)', advice:'Buste droit. Genou avant fixe. Laisse la gravité te tirer lentement vers le bas.',               alternatives:['fente_arriere'],                altNote:null },
    fente_arriere:   { id:'fente_arriere',   name:'Fente Arrière Haltères',     group:'jambes',   muscles:'Quads, Fessiers',               defaultSets:3, reps:'10/jambe', rest:'60s',    tag:'Alternative',     weightLabel:'Haltères (kg)', advice:"Plus stable que la fente marchée. Idéal si manque d'espace.",                                    alternatives:['bulgarian_squat'],              altNote:"Plus stable que le Bulgarian Squat, pas besoin de banc." },
    fentes_marchees: { id:'fentes_marchees', name:'Fentes Marchées',            group:'jambes',   muscles:'Quads, Ischios',                defaultSets:3, reps:'12/jambe', rest:'60s',    tag:'Amplitude',       weightLabel:'Haltères (kg)', advice:"Pas normaux. Le genou arrière s'arrête à 3cm du sol.",                                            alternatives:['fente_arriere'],                altNote:null },
    step_up:         { id:'step_up',         name:'Step-Up Haltères',           group:'jambes',   muscles:'Quads, Fessiers',               defaultSets:3, reps:'12/jambe', rest:'60s',    tag:'Spécifique LUT',  weightLabel:'Haltères (kg)', advice:'Spécifique escaliers Fourvière. La jambe sur la box retient tout le poids à la descente.',       alternatives:['box_squat'],                    altNote:null },
    box_squat:       { id:'box_squat',       name:'Box Squat',                  group:'jambes',   muscles:'Quads, Fessiers',               defaultSets:3, reps:'10',        rest:'75s',    tag:'Alternative',     weightLabel:'Haltères (kg)', advice:'Assieds-toi complètement sur la box avant de remonter.',                                          alternatives:['step_up'],                      altNote:'Si pas de box haute. Mouvement similaire.' },
    leg_curl:        { id:'leg_curl',        name:'Leg Curl allongé',           group:'jambes',   muscles:'Ischio-jambiers',               defaultSets:3, reps:'12',        rest:'60s',    tag:'Antagonistes',    weightLabel:'Charge (kg)',   advice:'Indispensable pour équilibrer la tension sur le genou (prévention syndrome essuie-glace).',      alternatives:['nordic_curl'],                  altNote:null },
    nordic_curl:     { id:'nordic_curl',     name:'Nordic Curl',                group:'jambes',   muscles:'Ischio-jambiers',               defaultSets:3, reps:'6',         rest:'90s',    tag:'Excentrique',     weightLabel:'Poids corps',  advice:'Freine la descente le plus lentement possible. Ultra-efficace.',                                  alternatives:['leg_curl'],                     altNote:'Si la machine leg curl est prise. Plus difficile mais très efficace.' },
    mollets:         { id:'mollets',         name:'Élévations Mollets',         group:'jambes',   muscles:'Gastrocnémiens, Soléaires',     defaultSets:4, reps:'15',        rest:'45-60s', tag:'Propulsion',      weightLabel:'Lest (kg)',     advice:'Descends le talon dans le vide. Remonte explosivement et marque une pause stricte de 1s en haut.', alternatives:['calf_press'],                   altNote:null },
    calf_press:      { id:'calf_press',      name:'Calf Press (Leg Press)',     group:'jambes',   muscles:'Gastrocnémiens, Soléaires',     defaultSets:4, reps:'15',        rest:'45-60s', tag:'Alternative',     weightLabel:'Charge (kg)',   advice:'Sur le plateau du leg press. Amplitude maximale, pause en haut.',                                 alternatives:['mollets'],                      altNote:"Si pas d'appareil à mollets. Sur le plateau du leg press." },

    // --- PECS ---
    bench_barre:     { id:'bench_barre',     name:'Développé Couché Barre',     group:'pecs',     muscles:'Pectoraux, Deltoïde ant.',      defaultSets:4, reps:'8',         rest:'90s',    tag:'Compound',        weightLabel:'Charge (kg)',   advice:"Coudes à 75°. Descends la barre jusqu'à effleurer la poitrine.",                                 alternatives:['bench_halteres'],               altNote:null },
    bench_halteres:  { id:'bench_halteres',  name:'Développé Couché Haltères', group:'pecs',     muscles:'Pectoraux',                     defaultSets:4, reps:'10',        rest:'75s',    tag:'Compound',        weightLabel:'Haltères (kg)', advice:"Plus grande amplitude qu'à la barre. Pronation en bas, neutre en haut.",                          alternatives:['bench_barre'],                  altNote:'Si le banc barre est pris. Meilleure amplitude, plus libre.' },
    pec_deck:        { id:'pec_deck',        name:'Pec Deck Machine',           group:'pecs',     muscles:'Pectoraux (isolement)',         defaultSets:3, reps:'12',        rest:'60s',    tag:'Isolement',       weightLabel:'Charge (kg)',   advice:'Squeeze fort en position fermée. Reviens lentement, ne lâche pas.',                               alternatives:['ecartes_halteres'],             altNote:null },
    ecartes_halteres:{ id:'ecartes_halteres',name:'Écartés Haltères',           group:'pecs',     muscles:'Pectoraux (isolement)',         defaultSets:3, reps:'12',        rest:'60s',    tag:'Isolement',       weightLabel:'Haltères (kg)', advice:'Légère flexion du coude. Descends lentement, remonte en arc.',                                    alternatives:['pec_deck', 'cable_croise'],     altNote:'Si le pec deck est pris. Plus d\'amplitude de mouvement.' },
    dips_pecs:       { id:'dips_pecs',       name:'Dips (buste penché)',        group:'pecs',     muscles:'Pectoraux bas, Triceps',        defaultSets:3, reps:'10',        rest:'75s',    tag:'Compound',        weightLabel:'Lest (kg)',     advice:'Buste incliné vers l\'avant pour cibler les pecs. Descends à 90°.',                               alternatives:['bench_halteres'],               altNote:'Buste penché en avant = pecs. Vertical = triceps.' },
    pompes_lestees:  { id:'pompes_lestees',  name:'Pompes Lestées',             group:'pecs',     muscles:'Pectoraux, Triceps',            defaultSets:3, reps:'15',        rest:'60s',    tag:'Fonctionnel',     weightLabel:'Lest (kg)',     advice:'Corps bien droit. Coudes à 45-60° du corps. Sac à dos si besoin.',                                alternatives:['dips_pecs'],                    altNote:"Si pas d'accès aux barres de dips." },
    cable_croise:    { id:'cable_croise',    name:'Câbles Croisés',             group:'pecs',     muscles:'Pectoraux (finition)',          defaultSets:3, reps:'15',        rest:'60s',    tag:'Finition',        weightLabel:'Charge (kg)',   advice:'Mains se rejoignent devant le sternum. Étirement maximum en position haute.',                    alternatives:['ecartes_halteres'],             altNote:'Si pas de machine à câbles. Remplacer par écartés haltères.' },

    // --- TRICEPS ---
    pushdown_cable:  { id:'pushdown_cable',  name:'Pushdown Câble',             group:'triceps',  muscles:'Triceps',                       defaultSets:3, reps:'12',        rest:'60s',    tag:'Isolement',       weightLabel:'Charge (kg)',   advice:'Coudes collés au corps. Extension complète. Pause 1s en bas.',                                    alternatives:['pushdown_corde'],               altNote:null },
    pushdown_corde:  { id:'pushdown_corde',  name:'Pushdown Corde',             group:'triceps',  muscles:'Triceps (chef latéral)',        defaultSets:3, reps:'15',        rest:'60s',    tag:'Isolement',       weightLabel:'Charge (kg)',   advice:'Écarte les mains en bas pour maximiser la contraction. Coudes fixes.',                            alternatives:['pushdown_cable'],               altNote:'Active mieux le chef latéral. Si barre droite prise.' },
    extension_nuque: { id:'extension_nuque', name:'Extension Nuque Haltère',    group:'triceps',  muscles:'Chef long triceps',             defaultSets:3, reps:'12',        rest:'60s',    tag:'Chef long',       weightLabel:'Haltères (kg)', advice:'Coudes proches de la tête. Descends lentement derrière la nuque.',                                alternatives:['barre_front'],                  altNote:null },
    dips_triceps:    { id:'dips_triceps',    name:'Dips (vertical)',            group:'triceps',  muscles:'Triceps, Pectoraux',            defaultSets:3, reps:'10',        rest:'75s',    tag:'Compound',        weightLabel:'Lest (kg)',     advice:'Buste vertical pour cibler les triceps. Extension complète en haut.',                             alternatives:['barre_front'],                  altNote:'Buste vertical = triceps. Plus polyvalent que les dips pecs.' },
    barre_front:     { id:'barre_front',     name:'Barre au Front',             group:'triceps',  muscles:'Triceps',                       defaultSets:3, reps:'10',        rest:'60s',    tag:'Isolement',       weightLabel:'Charge (kg)',   advice:"Coudes pointent au plafond, ne s'écartent pas. Contrôle la descente.",                           alternatives:['extension_nuque'],              altNote:"À la barre EZ idéalement. Si pas d'haltère pour extension nuque." },
    kickback:        { id:'kickback',        name:'Kickback Haltère',           group:'triceps',  muscles:'Triceps (finition)',            defaultSets:3, reps:'15',        rest:'45s',    tag:'Finition',        weightLabel:'Haltères (kg)', advice:'Bras parallèle au sol. Extension complète. Squeeze 1s en position haute.',                        alternatives:['pushdown_cable'],               altNote:'Si câble pris. Même principe d\'isolation.' },

    // --- BICEPS ---
    curl_barre:      { id:'curl_barre',      name:'Curl Barre',                 group:'biceps',   muscles:'Biceps',                        defaultSets:3, reps:'10',        rest:'60s',    tag:'Compound',        weightLabel:'Charge (kg)',   advice:"Coudes fixes contre le corps. Pas d'élan. Redescends lentement.",                                 alternatives:['curl_ez'],                      altNote:null },
    curl_ez:         { id:'curl_ez',         name:'Curl Barre EZ',              group:'biceps',   muscles:'Biceps',                        defaultSets:3, reps:'12',        rest:'60s',    tag:'Compound',        weightLabel:'Charge (kg)',   advice:'Prise semi-pronée. Plus confortable pour les poignets. Même mouvement.',                          alternatives:['curl_barre'],                   altNote:'Si douleurs aux poignets avec la barre droite.' },
    curl_alternes:   { id:'curl_alternes',   name:'Curl Haltères Alternés',     group:'biceps',   muscles:'Biceps',                        defaultSets:3, reps:'12',        rest:'60s',    tag:'Unilatéral',      weightLabel:'Haltères (kg)', advice:'Supination en montant. Un bras à la fois. Contrôle la descente.',                                 alternatives:['curl_marteau'],                 altNote:null },
    curl_marteau:    { id:'curl_marteau',    name:'Curl Marteau',               group:'biceps',   muscles:'Brachial, Brachioradial',       defaultSets:3, reps:'12',        rest:'60s',    tag:'Brachial',        weightLabel:'Haltères (kg)', advice:'Prise neutre (pouce en haut). Coudes fixes. Cible l\'épaisseur du bras.',                         alternatives:['curl_alternes'],                altNote:"Cible le brachial sous le biceps. Épaisseur du bras." },
    curl_concentre:  { id:'curl_concentre',  name:'Curl Concentré',             group:'biceps',   muscles:'Biceps (pic)',                  defaultSets:3, reps:'12/bras',  rest:'45s',    tag:'Pic',             weightLabel:'Haltères (kg)', advice:'Coude posé sur la cuisse. Squeeze maximal en haut. Excellent pour le pic.',                       alternatives:['curl_cable'],                   altNote:null },
    curl_cable:      { id:'curl_cable',      name:'Curl Câble',                 group:'biceps',   muscles:'Biceps',                        defaultSets:3, reps:'15',        rest:'45s',    tag:'Finition',        weightLabel:'Charge (kg)',   advice:'Tension constante sur tout le mouvement. Excellent en finition de séance.',                       alternatives:['curl_concentre'],               altNote:'Si pas de câble. Remplacer par curl concentré.' },

    // --- DOS ---
    tractions:           { id:'tractions',           name:'Tractions',                    group:'dos', muscles:'Grand dorsal, Biceps',       defaultSets:3, reps:'8',  rest:'90s', tag:'Compound',        weightLabel:'Lest (kg)',     advice:'Prise large, scapulas rétractées en bas. Tire les coudes vers les hanches.',    alternatives:['tirage_poulie_haute'], altNote:null },
    tirage_horizontal:   { id:'tirage_horizontal',   name:'Tirage Horizontal',            group:'dos', muscles:'Dos moyen, Biceps',          defaultSets:3, reps:'12', rest:'60s', tag:'Horizontal',      weightLabel:'Charge (kg)',   advice:'Tire les coudes en arrière, pas les mains. Squeeze les omoplates.',             alternatives:['rowing_barre'],         altNote:null },
    rowing_barre:        { id:'rowing_barre',        name:'Rowing Barre',                 group:'dos', muscles:'Grand dorsal, Biceps',       defaultSets:4, reps:'8',  rest:'90s', tag:'Compound',        weightLabel:'Charge (kg)',   advice:'Buste à 45°, dos plat. Tire vers le bas-ventre. Le grand exercice du dos.',    alternatives:['rowing_haltere'],       altNote:null },
    rowing_haltere:      { id:'rowing_haltere',      name:'Rowing Haltère 1 bras',        group:'dos', muscles:'Grand dorsal',               defaultSets:3, reps:'12/bras', rest:'60s', tag:'Unilatéral', weightLabel:'Haltères (kg)', advice:'Main libre sur le banc. Tire le coude au plafond. Amplitude maximale.',        alternatives:['rowing_barre'],         altNote:'Si pas de barre disponible. Plus isolé et contrôlé.' },
    tirage_poulie_haute: { id:'tirage_poulie_haute', name:'Tirage Poulie Haute',          group:'dos', muscles:'Grand dorsal',               defaultSets:3, reps:'12', rest:'60s', tag:'Lat',             weightLabel:'Charge (kg)',   advice:'Prise large, incline légèrement le buste. Tire vers le sternum.',              alternatives:['tractions'],            altNote:'Si les tractions sont trop difficiles. Même mouvement, guidé.' },
    face_pull:           { id:'face_pull',           name:'Face Pull Câble',              group:'dos', muscles:'Arrière épaule, Dos haut',   defaultSets:3, reps:'15', rest:'45s', tag:'Santé épaules',   weightLabel:'Charge (kg)',   advice:'Câble à hauteur des yeux. Tire vers le visage, coudes hauts.',                 alternatives:['rowing_haltere'],       altNote:'Excellent pour la santé des épaules. Si pas de câble, rowing haltère.' },

    // --- ÉPAULES ---
    developpe_militaire:     { id:'developpe_militaire',     name:'Développé Militaire',         group:'epaules', muscles:'Deltoïdes, Triceps',      defaultSets:4, reps:'8',  rest:'90s', tag:'Compound',        weightLabel:'Charge (kg)',   advice:'Core gainé. Barre descend au menton, remonte au-dessus de la tête.',       alternatives:['developpe_halteres_assis'], altNote:null },
    developpe_halteres_assis:{ id:'developpe_halteres_assis',name:'Développé Haltères Assis',    group:'epaules', muscles:'Deltoïdes',               defaultSets:3, reps:'12', rest:'75s', tag:'Compound',        weightLabel:'Haltères (kg)', advice:"Descends les haltères à hauteur des oreilles. Plus d'amplitude que la barre.", alternatives:['developpe_militaire'],      altNote:'Si pas de barre ou rack. Meilleure amplitude.' },
    elevation_laterale:      { id:'elevation_laterale',      name:'Élévation Latérale',          group:'epaules', muscles:'Deltoïde latéral',        defaultSets:3, reps:'15', rest:'45s', tag:'Isolement',       weightLabel:'Haltères (kg)', advice:"Légère flexion du coude. Monte jusqu'à l'horizontale. Contrôle la descente.", alternatives:['arnold_press'],             altNote:null },
    elevation_frontale:      { id:'elevation_frontale',      name:'Élévation Frontale',          group:'epaules', muscles:'Deltoïde antérieur',      defaultSets:3, reps:'12', rest:'45s', tag:'Isolement',       weightLabel:'Haltères (kg)', advice:"Monte jusqu'à l'horizontale, pas plus. Coudes légèrement fléchis.",          alternatives:['developpe_militaire'],      altNote:'Cible spécifiquement le deltoïde antérieur.' },
    oiseau:                  { id:'oiseau',                  name:'Oiseau Haltères',             group:'epaules', muscles:'Deltoïde postérieur',     defaultSets:3, reps:'15', rest:'45s', tag:'Arrière épaule',  weightLabel:'Haltères (kg)', advice:'Buste penché à 45°. Bras légèrement fléchis. Tire vers l\'arrière.',        alternatives:['face_pull'],                altNote:null },
    arnold_press:            { id:'arnold_press',            name:'Arnold Press',                group:'epaules', muscles:'Deltoïdes complet',       defaultSets:3, reps:'10', rest:'75s', tag:'Compound',        weightLabel:'Haltères (kg)', advice:'Commence prise en supination, termine en pronation. Rotation complète.',    alternatives:['developpe_halteres_assis'], altNote:'Cible les 3 faisceaux. Remplace le développé haltères basique.' },

    // --- TRAPÈZES ---
    shrugs_barre:   { id:'shrugs_barre',   name:'Shrugs Barre',      group:'trapezes', muscles:'Trapèzes supérieurs',    defaultSets:4, reps:'12', rest:'60s', tag:'Trapèzes',    weightLabel:'Charge (kg)',   advice:'Monte les épaules vers les oreilles. Pause 1s en haut. Pas de rotation.',                       alternatives:['shrugs_halteres'],   altNote:null },
    shrugs_halteres:{ id:'shrugs_halteres',name:'Shrugs Haltères',   group:'trapezes', muscles:'Trapèzes supérieurs',    defaultSets:4, reps:'15', rest:'60s', tag:'Trapèzes',    weightLabel:'Haltères (kg)', advice:'Meilleure amplitude latérale qu\'à la barre. Squeeze en haut.',                               alternatives:['shrugs_barre'],       altNote:'Si pas de barre. Mouvement identique, meilleure amplitude.' },
    rowing_menton:  { id:'rowing_menton',  name:'Rowing Menton',     group:'trapezes', muscles:'Trapèzes, Épaules',      defaultSets:3, reps:'12', rest:'60s', tag:'Compound',    weightLabel:'Charge (kg)',   advice:'Prise serrée. Tire les coudes vers le haut. Barre proche du corps.',                          alternatives:['shrugs_barre'],       altNote:'Cible aussi les deltoïdes. Bonne polyvalence trapèzes/épaules.' },
    farmer_walk:    { id:'farmer_walk',    name:"Farmer's Walk",     group:'trapezes', muscles:'Trapèzes, Grip, Core',   defaultSets:3, reps:'30m', rest:'90s', tag:'Fonctionnel', weightLabel:'Haltères (kg)', advice:'Charges lourdes, buste droit, pas courts. Excellent pour le grip.',                            alternatives:['shrugs_halteres'],   altNote:"Si pas d'espace. Remplacer par shrugs haltères statiques." },

    // --- ABDOS ---
    crunch_cable:   { id:'crunch_cable',   name:'Crunch Câble',       group:'abdos', muscles:'Abdominaux',          defaultSets:3, reps:'15',      rest:'45s', tag:'Compound',      weightLabel:'Charge (kg)',  advice:'Câble en hauteur avec corde. Contracte les abdos, pas le dos.',                                    alternatives:['crunch_sol'],      altNote:null },
    crunch_sol:     { id:'crunch_sol',     name:'Crunch Sol',         group:'abdos', muscles:'Abdominaux',          defaultSets:3, reps:'20',      rest:'45s', tag:'Basique',        weightLabel:'Poids corps', advice:'Mains sur les tempes. Monte les épaules, pas la tête. Expire en montant.',                        alternatives:['crunch_cable'],    altNote:'Si pas de câble. Version basique efficace.' },
    releve_jambes:  { id:'releve_jambes',  name:'Relevé de Jambes',   group:'abdos', muscles:'Abdominaux bas',      defaultSets:3, reps:'15',      rest:'45s', tag:'Bas du ventre',  weightLabel:'Poids corps', advice:'Jambes tendues ou fléchies. Contrôle la descente. Dos plat sur le banc.',                         alternatives:['crunch_cable'],    altNote:'Cible spécifiquement le bas du ventre.' },
    russian_twist:  { id:'russian_twist',  name:'Russian Twist',      group:'abdos', muscles:'Obliques',            defaultSets:3, reps:'20',      rest:'45s', tag:'Obliques',       weightLabel:'Haltères (kg)',advice:'Pieds levés pour plus de difficulté. Rotation ample, pas juste les bras.',                        alternatives:['crunch_obliques'], altNote:null },
    ab_wheel:       { id:'ab_wheel',       name:'Ab Wheel',           group:'abdos', muscles:'Gainage, Abdominaux', defaultSets:3, reps:'10',      rest:'60s', tag:'Gainage',        weightLabel:'Poids corps', advice:'Dos plat tout au long. Ne laisse pas les hanches tomber. Très exigeant.',                         alternatives:['planche_abdo'],    altNote:null },
    planche_abdo:   { id:'planche_abdo',   name:'Planche',            group:'abdos', muscles:'Gainage',             defaultSets:3, reps:'45s',     rest:'30s', tag:'Gainage',        weightLabel:'Poids corps', advice:'Corps droit des talons à la tête. Contracte ventre et fessiers.',                                alternatives:['ab_wheel'],        altNote:"Si pas d'ab wheel. Gainage statique efficace." },
    crunch_obliques:{ id:'crunch_obliques',name:'Crunch Obliques',    group:'abdos', muscles:'Obliques',            defaultSets:3, reps:'15/côté', rest:'45s', tag:'Obliques',       weightLabel:'Poids corps', advice:"Coude vers le genou opposé. Rotation du buste, pas juste du coude.",                             alternatives:['russian_twist'],   altNote:"Alternative aux Russian Twist. Plus ciblé sur l'oblique." }
};

// =============================================
// SÉANCES PAR DÉFAUT
// =============================================
const DEFAULT_SESSIONS = {
    jambes:   ['leg_press', 'leg_extension', 'bulgarian_squat', 'fentes_marchees', 'step_up', 'leg_curl', 'mollets'],
    pecs:     ['bench_barre', 'bench_halteres', 'pec_deck', 'ecartes_halteres', 'cable_croise'],
    triceps:  ['pushdown_cable', 'pushdown_corde', 'extension_nuque', 'dips_triceps'],
    biceps:   ['curl_barre', 'curl_alternes', 'curl_marteau', 'curl_concentre'],
    dos:      ['tractions', 'tirage_horizontal', 'rowing_barre', 'rowing_haltere', 'tirage_poulie_haute'],
    epaules:  ['developpe_militaire', 'elevation_laterale', 'elevation_frontale', 'oiseau'],
    trapezes: ['shrugs_barre', 'shrugs_halteres', 'rowing_menton'],
    abdos:    ['crunch_cable', 'releve_jambes', 'russian_twist', 'ab_wheel', 'crunch_obliques']
};

// =============================================
// TIMER GAINAGE
// =============================================
const PLANK_SEQUENCE = [
    { pos:'face',  label:'De face',     duration:60 },
    { pos:'right', label:'Côté droit',  duration:30 },
    { pos:'left',  label:'Côté gauche', duration:30 },
    { pos:'face',  label:'De face',     duration:60 },
    { pos:'right', label:'Côté droit',  duration:30 },
    { pos:'left',  label:'Côté gauche', duration:30 },
    { pos:'face',  label:'De face',     duration:60 },
    { pos:'right', label:'Côté droit',  duration:30 },
    { pos:'left',  label:'Côté gauche', duration:30 }
]; // 9 phases = 6 minutes exactement

// =============================================
// GROUPES ET PRESETS
// =============================================
const GROUPS = [
    { id:'jambes',   label:'Jambes'   },
    { id:'pecs',     label:'Pecs'     },
    { id:'triceps',  label:'Triceps'  },
    { id:'biceps',   label:'Biceps'   },
    { id:'dos',      label:'Dos'      },
    { id:'epaules',  label:'Épaules'  },
    { id:'trapezes', label:'Trapèzes' },
    { id:'abdos',    label:'Abdos'    }
];

const PRESETS = [
    { id:'jambes',   label:'Jambes',            desc:'Séance complète jambes excentrique', groups:['jambes']                              },
    { id:'pecs_tri', label:'Pecs / Triceps',     desc:'Push day classique',                 groups:['pecs','triceps']                      },
    { id:'dos_bi',   label:'Dos / Biceps',       desc:'Pull day classique',                 groups:['dos','biceps']                        },
    { id:'ep_trap',  label:'Épaules / Trapèzes', desc:'Deltoïdes et trapèzes',              groups:['epaules','trapezes']                  },
    { id:'full_top', label:'Full Top',           desc:'1 exo par groupe musculaire',        groups:['pecs','triceps','biceps','dos','epaules','trapezes'] }
];

// =============================================
// ÉTAT DE L'APPLICATION
// =============================================
const AppState = {
    currentSession: null,
    currentGroups:  [],
    sessionKey:     '',
    selectedGroups: [],
    plankState: {
        phase: 0, secondsLeft: 0, running: false, intervalId: null
    }
};
