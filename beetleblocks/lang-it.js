tempDict = {
/*
    Special characters: (see <http://0xcc.net/jsescape/>)

    Ä, ä   \u00c4, \u00e4
    Ö, ö   \u00d6, \u00f6
    Ü, ü   \u00dc, \u00fc
    ß      \u00df
*/
    // primitive blocks:

    /*
        Attention Translators:
        ----------------------
        At this time your translation of block specs will only work
        correctly, if the order of formal parameters and their types
        are unchanged. Placeholders for inputs (formal parameters) are
        indicated by a preceding % prefix and followed by a type
        abbreviation.

        For example:

            'say %s for %n secs'

        can currently not be changed into

            'say %n secs long %s'

        and still work as intended.

        Similarly

            'point towards %dst'

        cannot be changed into

            'point towards %cst'

        without breaking its functionality.
    */

	
	 // Project menu
    'New':
        'Nuovo',
	'New Project':
		'Nuovo progetto',
	'Replace the current project with a new one? ':
		'Sostituire il progetto attuale con uno nuovo?',
	'Import project or blocks':
		'Importa progetto o blocchi',
    'Save                                       Ctrl+S':
        'Salva                                     Ctrl+S ',
    'Save As...':
        'Salva con nome...',
	'Download project as...':
		'Scarica progetto come...',
	'Download My Blocks as...':
		'Scarica I Miei Blocchi come...',
	'Download 2D lines as...':
		'Scarica linee 2D come...',
	'Download 3D model as...          ▶':
		'Scarica modello 3D come...          ▶',
	'STL':
		'STL (ascii)',
	'STL (binary)':
		'STL (binario)',
	'Untitled':
        'Senza Titolo',
    'Open Project':
        'Apri Progetto',
    '(empty)':
        '(vuoto)',
    'Saved!':
        'Salvato!',
	'Language...':
		'Lingua...',
	'Zoom blocks...':
		'Ridimensiona blocchi...',
	'Zoom blocks':
		'Ridimensiona blocchi',
	'Stage size...':
		'Ridimensiona stage...',
	'Stage size':
		'Ridimensiona stage',
	'Stage width':
		'Larghezza stage',
	'Stage height':
		'Altezza stage',
	'Input sliders':
		'Manopole di controllo',
	'Execute on slider change':
		'Riavvia a ogni cambiamento manopole',
	'Visible stepping':
		'Modalità passo-passo',
	'Login':
		'Autenticati',
	'Create an account':
		'Crea un account',
	'Start tutorial':
		'Avvia tutorial',
	
	// UI
	'Export 3D model as STL':
		'Esporta Modello 3D come .STL',
	'Export 3D model as OBJ':
		'Esporta Modello 3D come .OBJ',
	'Reset Camera':
		'Reimposta Telecamera',
	'Zoom to fit':
		'Adatta visuale',
	'Set background color':
		'Imposta colore sfondo',
	'Set grid interval':
		'Imposta intervallo griglia',
	'Set grid color':
		'Imposta colore griglia',
	'Turbo mode':
		'Modalità Turbo',
	'Beetle':
		'Coccinella',
	'Axes':
		'Assi',
	'Wireframe':
		'Modello fil di ferro',
	'2D mode':
		'Modalità 2D',
	'Grid ':
		'Griglia',
	'Position ':
		'Pos. ',
	'Rotation ':
		'Rot. ',
	'Scale: ':
		'Scala: ',
	'Color: ':
		'Colore: ',
	'HSL: ':
		'Ton. Sat. Lum. : ',
	'Opacity: ':
		'Opacità: ',
	'Grid intervals':
		'Intervalli griglia:',
	'x interval':
		'Intervallo x',
	'y interval':
		'Intervallo y',
	'export as STL':
		'Esporta come .STL',
	'export as OBJ':
		'Esporta come .OBJ',

	// Movement
	'go home':
		'torna al centro',
	'move %n':
		'fai %n passi',
	'rotate %axes by %n':
		'ruota attorno a %axes di %n',
	'go to x: %n y: %n z: %n':
		'vai a x: %n y: %n z: %n',
	'set %axes to %n':
		'vai dove %axes è %n',
	'change absolute %axes by %n':
		'cambia %axes di %n',
	'set %axes rotation to %n':
		'punta lungo %axes in direzione %n',
	'point to x: %n y: %n z: %n':
		'punta verso x: %n y: %n z: %n',
	'%axes position':
		'posizione %axes',
	'%axes rotation':
		'direzione lungo %axes',
	'push position':
		'memorizza posizione',
	'pop position':
		'recupera posizione',
	'set scale to %n':
		'porta scala a %n',
	'change scale by %n':
		'cambia scala di %n',
	'scale':
		'scala',
	'origin':
		'origine',
	
	// Categories:
    'Motion':
        'Movimento',
    'Control':
        'Controllo',
    'Sensing':
        'Sensori',
    'Operators':
        'Operatori',
    'Variables':
        'Variabili',
    'Other':
        'Altro',
	
	// Control
	'reset':
		'pulisci tutto',
    'when %b':
        'quando %b',
    'when %greenflag clicked':
        'quando si clicca su %greenflag',
    'when %keyHat key pressed':
        'quando si preme il tasto %keyHat',
    'when I am %interaction':
        'quando sono %interaction',
	'warp %c':
		'esegui istantaneamente %c',
    'clicked':
        'cliccato',
    'pressed':
        'premuto',
    'dropped':
        'lasciato',
    'mouse-entered':
        'il mouse entra',
    'mouse-departed':
        'il mouse esce',
    'when I am clicked':
        'quando vengo cliccato',
    'when I receive %msgHat':
        'quando ricevo %msgHat',
    'broadcast %msg':
        'invia a tutti %msg',
    'broadcast %msg and wait':
        'invia a tutti %msg e attendi',
    'Message name':
        'Nome messaggio',
    'message':
        'messaggio',
    'any message':
        'qualunque messaggio',
    'wait %n secs':
        'attendi %n secondi',
    'wait until %b':
        'attendi fino a quando %b',
    'forever %c':
        'per sempre %c',
    'repeat %n %c':
        'ripeti %n volte %c',
    'repeat until %b %c':
        'ripeti fino a quando %b %c',
    'if %b %c':
        'se %b %c',
    'if %b %c else %c':
        'se %b %c altrimenti %c',
    'report %s':
        'risultato %s',
    'stop block':
        'ferma il blocco',
	  'stop %stopOthersChoices':
		'ferma %stopOthersChoices',
	  'stop %stopChoices':
		'ferma %stopChoices',
	'all':
        'tutti',
    'this script':
        'questo script',
    'this block':
        'questo Blocco',
    'stop script':
        'ferma lo script',
    'stop all %stop':
        'ferma tutto %stop',
    'all but this script':
        'tutto tranne questo script',
    'other scripts in sprite':
        'altri script dello sprite',
    'pause all %pause':
        'pausa tutto %pause',
    'run %cmdRing %inputs':
        'esegui %cmdRing %inputs',
    'launch %cmdRing %inputs':
        'lancia %cmdRing %inputs',
    'call %repRing %inputs':
        'chiama %repRing %inputs',
    'run %cmdRing w/continuation':
        'esegui %cmdRing con continuazione',
    'call %cmdRing w/continuation':
        'chiama %cmdRing con continuazione',
    'warp %c':
        'esegui in modalit\u00E0 turbo %c',
    'myself':
        'me stesso',
    'delete this clone':
        'elimina questo clone',

	// Shapes
	'Shapes':
		'Forme',
	'cube Dim. %n':
		'cubo di lato %n',
	'cuboid l: %n w: %n h: %n':
		'cuboide largh: %n prof: %n alt: %n',
	'sphere Dia. %n':
		'sfera di diametro %n',
	'tube l: %n outer: %n inner: %n':
		'tubo largh: %n prof: %n alt: %n',
	'text %s H: %n W: %n':
		'testo %s alt: %n largh: %n',
	'hello':
		'ciao',
	'2D text %s size: %n':
		'testo 2D %s dimensione %n',
	'start drawing %drawStyle':
		'inizia a disegnare %drawStyle',
	'stop drawing':
		'smetti di disegnare',
        'lines':
                'linee',
        'splines':
                'curve',
        'curves':
                'curve',
	'start extruding %drawStyle':
		'inizia a estrudere %drawStyle',
	'stop extruding':
		'smetti di estrudere',
	'set extrusion Dia. to %n':
		'porta diametro estrusione a %n',
	'change extrusion Dia. by %n':
		'cambia diametro estrusione di %n',
	'start negative geometry':
		'attiva geometria negativa',
	'stop negative geometry':
		'disattiva geometria negativa',

	// Colors
	'Colors':
		'Colori',
	'set hue to %huewheel':
        'porta tonalità a %huewheel',
	'set %hsla to %n':
		'porta %hsla a %n',
	'change %hsla by %n':
		'cambia %hsla di %n',
	'color %hsla':
		'%hsla del colore',
	'hue':
		'tonalità',
	'saturation':
		'saturazione',
	'lightness':
		'luminosità',
	'opacity':
		'opacità',

	// Keys
    'any key':
		'qualunque',
	'space':
        'spazio',
    'up arrow':
        'freccia su',
    'down arrow':
        'freccia gi\u00F9',
    'right arrow':
        'freccia destra',
    'left arrow':
        'freccia sinistra',
		
	// Sensors
	'request user input %s':
		'Chiedi %s all\'utente',
	'answer':
        'risposta',
    'mouse x':
        'x del mouse',
    'mouse y':
        'y del mouse',
    'mouse down?':
        'tasto del mouse premuto',
    'key %key pressed?':
        'tasto %key premuto',
	'reset timer':
		'azzera cronometro',
	'timer':
		'cronometro',
	'turbo mode?':
		'modalità turbo attiva',
	'set turbo mode to %b':
		'porta modalità turbo a %b',

	
	// Operators	
	'%n mod %n':
        'resto della divisione di %n diviso %n',
    'round %n':
        'arrotonda %n',
    '%fun of %n':
        '%fun di %n',
    'pick random %n to %n':
        'numero a caso tra %n e %n',
    '%b and %b':
        '%b e %b',
    '%b or %b':
        '%b o %b',
    'not %b':
        'non %b',
    'true':
        'vero',
    'false':
        'falso',
    'join %words':
        'unione di %words',
   'split %s by %delim':
        'spezza %s a ogni %delim',
    'hello':
        'ciao',
    'world':
        'mondo',
    'letter %idx of %s':
        'lettera in posizione %idx di %s',
    'length of %s':
        'lunghezza di %s',
    'unicode of %s':
        'codice unicode di %s',
    'unicode %n as letter':
        'lettera del codice unicode %n',
    'is %s a %typ ?':
        '%s \u00E8 di tipo %typ',
    'is %s identical to %s ?':
        '%s \u00E8 identico a %s',
    'type of %s':
        'tipo di %s',
		
	//Operations

	'abs':
		'valore assoluto',
	'ceiling':
		'arrotondamento per difetto',
	'floor':
		'arrotondamento per eccesso',
	'sqrt':
		'radice quadrata',
	'sin':
		'seno',
	'cos':
		'coseno',
	'tan':
		'tangente',
	'asin':
		'arcoseno',
	'acos':
		'arcocoseno',
	'atan':
		'arcotangente',
	
	//Delimitators

	'letter':
		'lettera',
	'whitespace':
		'spazio',
	'line':
		'riga',
	'tab':
		'tabulazione',
	
	// My blocks
	'My blocks':
		'I miei blocchi',
		
	// Data types
    'number':
        'numero',
    'text':
        'testo',
    'Boolean':
        'booleano',
    'list':
        'lista',
    'command':
        'comando',
    'reporter':
        'monitor',
    'predicate':
        'condizione',
	'sound':
		'suono',

	// Variables:
    'Make a variable':
        'Nuova variabile',
    'Variable name':
        'Nome della variabile?',
    'Delete a variable':
        'Cancella variabile',

    'set %var to %s':
        'porta %var a %s',
    'change %var by %n':
        'cambia %var di %n',
    'show variable %var':
        'mostra variabile %var',
    'hide variable %var':
        'nascondi variabile %var',
    'script variables %scriptVars':
        'variabili dello script: %scriptVars',
		
	// Lists:
    'list %exp':
        'lista %exp',
    '%s in front of %l':
        '%s davanti a %l',
    'item %idx of %l':
        'elemento %idx di %l',
    'all but first of %l':
        'tutto meno il primo elemento di %l',
    'length of %l':
        'lunghezza di %l',
    '%l contains %s':
        '%l contiene %s',
    'thing':
        'cosa',
    'add %s to %l':
        'aggiungi %s a %l',
    'delete %ida of %l':
        'cancella %ida da %l',
    'insert %s at %idx of %l':
        'inserisci %s alla posizione %idx di %l',
    'replace item %idx of %l with %s':
        'sostituisci elemento %idx di %l con %s',	
	
    // List indices
    'last':
        'ultimo',
    'any':
        'qualunque',
	
	// Missing strings
	'all':
        'tutti',
    'none':
        'nessuno',
	'OK':
        'OK',
    'Ok':
        'OK',
    'Cancel':
        'Annulla',
    'Yes':
        'Si',
    'No':
        'No',
	'find blocks...':
		'Trova un blocco...',
	'Make a block':
		'Crea un blocco',
	'JavaScript function ( %mult%s ) { %code }':
		'Funzione JavaScript ( %mult%s ) { %code }',
	'Reset Password...':
		'Reimposta password...',
	'Reset password':
		'Reimposta password',
	'User name:':
		'Nome utente:',
	'User name:':
		'Nome utente:',
	'Codification support':
		'Supporto codifica',
	'current %dates':
		'%dates attuale',
	'year':
		'anno',
	'month':
		'mese',
	'date':
		'giorno',
	'day of week':
		'giorno della settimana',
	'hour':
		'ora',
	'minute':
		'minuto',
	'second':
		'secondo',
	'time in milliseconds':
		'tempo in millisecondi'
};

// Add attributes to original SnapTranslator.dict.ca
for (var attrname in tempDict) { SnapTranslator.dict.it[attrname] = tempDict[attrname]; }