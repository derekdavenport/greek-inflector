const normalized = {
	'ή': 'ή',
	'κσ': 'ξ',
	'κς': 'ξ',
	'πσ': 'ψ',
	'πς': 'ψ',
};

const decomposed = {
	'Ά': ['Α', '΄'],
	'Έ': ['Ε', '΄'],
	'Ή': ['Η', '΄'],
	'Ί': ['Ι', '΄'],
	'Ό': ['Ο', '΄'],
	'Ύ': ['Υ', '΄'],
	'Ώ': ['Ω', '΄'],
	'ά': ['α', '΄'],
	'έ': ['ε', '΄'],
	'ή': ['η', '΄'],
	'ί': ['ι', '΄'],
	'ό': ['ο', '΄'],
	'ύ': ['υ', '΄'],
	'ώ': ['ω', '΄'],
	'ᾶ': ['α', '῀'],
	'ῆ': ['η', '῀'],
	'ῖ': ['ι', '῀'],
	'ῦ': ['υ', '῀'],
	'ῶ': ['ω', '῀'],
	'ᾷ': ['ᾳ', '῀'],
	'ῇ': ['ῃ', '῀'],
	'ῷ': ['ῳ', '῀'],
} as { [composed: string]: string[] };

const composed = Object.entries(decomposed).reduce(
	(composed, [composition, [naked, diacritic]]) => ({
		...composed,
		[naked]: {
			...composed[naked],
			[diacritic]: composition,
		},
	}),
	{} as { [naked: string]: { [diacritic: string]: string } }
);

// TODO: split on syllables
const vowelArray = [...Object.keys(composed), ...Object.keys(decomposed)];
const vowels = vowelArray.join('');
const lastVowelRegExp = new RegExp(`[${vowels}]+[^${vowels}]*$`);

type Declensions = {
	'1': Endings;
	'2': Endings;
	'3': Endings;
};

type Declension = keyof Declensions;

type Endings = {
	[ending: string]: Numbers;
};

type Numbers = {
	singular: Cases;
	plural: Cases;
};

type Num = keyof Numbers;

type Cases = {
	nominative: string;
	genitive: string;
	dative: string;
	accusative: string;
	vocative: string;
};

type Case = keyof Cases;

const nounDeclensions: Declensions = {
	'1': {
		'εα': {
			singular: {
				nominative: 'εα',
				genitive: 'εας',
				dative: 'εᾳ',
				accusative: 'εαν',
				vocative: 'εα',
			},
			plural: {
				nominative: 'εαι',
				genitive: 'εῶν',
				dative: 'εαις',
				accusative: 'εας',
				vocative: 'εαι',
			},
		},
		'ια': {
			singular: {
				nominative: 'ια',
				genitive: 'ιας',
				dative: 'ιᾳ',
				accusative: 'ιαν',
				vocative: 'ια',
			},
			plural: {
				nominative: 'ιαι',
				genitive: 'ιῶν',
				dative: 'ιαις',
				accusative: 'ιας',
				vocative: 'ιαι',
			},
		},
		'ία': {
			singular: {
				nominative: 'ία',
				genitive: 'ίας',
				dative: 'ίᾳ',
				accusative: 'ίαν',
				vocative: 'ία',
			},
			plural: {
				nominative: 'ῖαι',
				genitive: 'ιῶν',
				dative: 'ίαις',
				accusative: 'ίας',
				vocative: 'ῖαι',
			},
		},
		'ρα': {
			singular: {
				nominative: 'ρα',
				genitive: 'ρας',
				dative: 'ρᾳ',
				accusative: 'ραν',
				vocative: 'ρα',
			},
			plural: {
				nominative: 'ραι',
				genitive: 'ρῶν',
				dative: 'ραις',
				accusative: 'ρας',
				vocative: 'ραι',
			},
		},
		'εά': {
			singular: {
				nominative: 'εά',
				genitive: 'εᾶς',
				dative: 'εᾷ',
				accusative: 'εάν',
				vocative: 'εά',
			},
			plural: {
				nominative: 'εαί',
				genitive: 'εῶν',
				dative: 'εαῖς',
				accusative: 'εάς',
				vocative: 'εαί',
			},
		},
		'ιά': {
			singular: {
				nominative: 'ιά',
				genitive: 'ιᾶς',
				dative: 'ιᾷ',
				accusative: 'ιάν',
				vocative: 'ιά',
			},
			plural: {
				nominative: 'ιαί',
				genitive: 'ιῶν',
				dative: 'ιαῖς',
				accusative: 'ιάς',
				vocative: 'ιαί',
			},
		},
		'ρά': {
			singular: {
				nominative: 'ρά',
				genitive: 'ρᾶς',
				dative: 'ρᾷ',
				accusative: 'ράν',
				vocative: 'ρά',
			},
			plural: {
				nominative: 'ραί',
				genitive: 'ρῶν',
				dative: 'ραῖς',
				accusative: 'ράς',
				vocative: 'ραί',
			},
		},
		'α': {
			singular: {
				nominative: 'α',
				genitive: 'ης',
				dative: 'ῃ',
				accusative: 'αν',
				vocative: 'α',
			},
			plural: {
				nominative: 'αι',
				genitive: 'ῶν',
				dative: 'αις',
				accusative: 'ας',
				vocative: 'αι',
			},
		},
		'ά': {
			singular: {
				nominative: 'ά',
				genitive: 'ῆς',
				dative: 'ῇ',
				accusative: 'άν',
				vocative: 'ά',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
			},
		},
		'η': {
			singular: {
				nominative: 'η',
				genitive: 'ης',
				dative: 'ῃ',
				accusative: 'ην',
				vocative: 'η',
			},
			plural: {
				nominative: 'αι',
				genitive: 'ων',
				dative: 'αις',
				accusative: 'ας',
				vocative: 'αι',
			},
		},
		'ή': {
			singular: {
				nominative: 'ή',
				genitive: 'ῆς',
				dative: 'ῇ',
				accusative: 'ήν',
				vocative: 'ή',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
			},
		},
		'ῆ': {
			singular: {
				nominative: 'ῆ',
				genitive: 'ῆς',
				dative: 'ῇ',
				accusative: 'ῆν',
				vocative: 'ῆ',
			},
			plural: {
				nominative: 'αῖ',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'ᾶς',
				vocative: 'αῖ',
			},
		},
		'ης': {
			singular: {
				nominative: 'ης',
				genitive: 'ου',
				dative: 'ῃ',
				accusative: 'ην',
				vocative: 'α',
			},
			plural: {
				nominative: 'αι',
				genitive: 'ων',
				dative: 'αις',
				accusative: 'ας',
				vocative: 'αι',
			},
		},
		'ής': {
			singular: {
				nominative: 'ής',
				genitive: 'οῦ',
				dative: 'ῇ',
				accusative: 'ήν',
				vocative: 'α',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
			},
		},
	},
	'2': {
		'ος': {
			singular: {
				nominative: 'ος',
				genitive: 'ου',
				dative: 'ͅω',
				accusative: 'ον',
				vocative: 'ε',
			},
			plural: {
				nominative: 'οι',
				genitive: 'ων',
				dative: 'οις',
				accusative: 'ους',
				vocative: 'οι',
			},
		},
		'ός': {
			singular: {
				nominative: 'ός',
				genitive: 'οῦ',
				dative: 'ῷ',
				accusative: 'όν',
				vocative: 'ε',
			},
			plural: {
				nominative: 'οί',
				genitive: 'ῶν',
				dative: 'οῖς',
				accusative: 'ούς',
				vocative: 'οί',
			},
		},
		'ον': {
			singular: {
				nominative: 'ον',
				genitive: 'ου',
				dative: 'ͅω',
				accusative: 'ον',
				vocative: 'ον',
			},
			plural: {
				nominative: 'α',
				genitive: 'ων',
				dative: 'οις',
				accusative: 'α',
				vocative: 'α',
			},
		},
		'όν': {
			singular: {
				nominative: 'όν',
				genitive: 'οῦ',
				dative: 'ῷ',
				accusative: 'όν',
				vocative: 'όν',
			},
			plural: {
				nominative: 'ά',
				genitive: 'ῶν',
				dative: 'οῖς',
				accusative: 'ά',
				vocative: 'ά',
			},
		},
	},
	'3': {
		'ος': {
			singular: {
				nominative: 'ς',
				genitive: 'ος',
				dative: 'ι',
				accusative: 'α',
				vocative: '',
			},
			plural: {
				nominative: 'ες',
				genitive: 'ων',
				dative: 'σι', // sin
				accusative: 'ας',
				vocative: 'ες',
			},
		},
		'δος': {
			singular: {
				nominative: 'ς',
				genitive: 'δος',
				dative: 'δι',
				accusative: 'δα',
				vocative: 'ς',
			},
			plural: {
				nominative: 'δες',
				genitive: 'δων',
				dative: 'σι', // sin
				accusative: 'δας',
				vocative: 'δες',
			},
		},
		'δός': {
			singular: {
				nominative: 'ς',
				genitive: 'δός',
				dative: 'δί',
				accusative: 'δα',
				vocative: '',
			},
			plural: {
				nominative: 'δες',
				genitive: 'δῶν',
				dative: 'σί', // sin
				accusative: 'δας',
				vocative: 'δες',
			},
		},
		'ντος': {
			singular: {
				nominative: 'ν',
				genitive: 'ντος',
				dative: 'ντι',
				accusative: 'ντα',
				vocative: 'ν',
			},
			plural: {
				nominative: 'ντες',
				genitive: 'ντων',
				dative: 'σι', // sin
				accusative: 'ντας',
				vocative: 'ντες',
			},
		},
		'νος': {
			singular: {
				nominative: 'ν',
				genitive: 'νος',
				dative: 'νι',
				accusative: 'να',
				vocative: 'ν',
			},
			plural: {
				nominative: 'νες',
				genitive: 'νων',
				dative: 'σι', // sin
				accusative: 'νας',
				vocative: 'νες',
			},
		},
		'ας': {
			singular: {
				nominative: 'α',
				genitive: 'ας',
				dative: 'ᾳ',
				accusative: 'αν',
				vocative: 'α',
			},
			plural: {
				nominative: 'αι',
				genitive: 'ῶν',
				dative: 'αις',
				accusative: 'ας',
				vocative: 'αι',
			},
		},
		'ᾶς': {
			singular: {
				nominative: 'ά',
				genitive: 'ᾶς',
				dative: 'ᾷ',
				accusative: 'άν',
				vocative: 'ά',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
			},
		},
	},
};

// 3rd declensions that accent penult of genitive plural
// παῖς, παιδός; φῶς, φωτός; οὖς, ὠτός;

const accents = [
	"́",
];

function normalize(text: string): string {
	for (const [bad, good] of Object.entries(normalized)) {
		text = text.split(bad).join(good);
	}
	return text;
}

type NounOptions = { declension: Declension, gsEnding?: string, number: Num, case_: Case };
function inflectNoun(lexicalForm: string, { declension, number, case_ }: { declension: '1' | '2', number: Num, case_: Case }): string;
function inflectNoun(lexicalForm: string, { declension, gsEnding, number, case_ }: { declension: '3', gsEnding: string, number: Num, case_: Case }): string;
function inflectNoun(lexicalForm: string, { declension, gsEnding, number, case_ }: NounOptions) {
	if (number === 'singular' && case_ === 'nominative') {
		return lexicalForm;
	}
	// lexicalForm = normalize(lexicalForm);
	const endings = nounDeclensions[declension];
	const ending = declension === '3' ?
		gsEnding :
		Object.keys(endings).find(ending => lexicalForm.endsWith(ending));
	if (!ending) {
		throw Error(lexicalForm + ' has an unknown ending for declension ' + declension);
	}

	let stem: string;
	if (declension === '3') {
		// if ending starts with vowel, find last vowel
		// if ending starts with cons, stick on end
		const startsWith = ending[0];
		let stemEndingIndex: number;
		if (vowelArray.indexOf(startsWith) >= 0) {
			stemEndingIndex = lexicalForm.search(lastVowelRegExp);
			stem = lexicalForm.substring(0, stemEndingIndex);
		}
		else {
			stem = lexicalForm;
		}
	}
	else {
		stem = lexicalForm.substring(0, lexicalForm.length - ending.length)
	}
	return stem + endings[ending][number][case_];
}

console.log(inflectNoun('δόξα', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('τιμή', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('φωνή', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('χαρά', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('γλῶττα', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('γῆ', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἀνδρεία', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('κύριος', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('τέκνον', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἱερόν', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ναός', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('φθορά', { declension: '3', gsEnding: 'ᾶς', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἔχθρα', { declension: '3', gsEnding: 'ας', number: 'singular', case_: 'genitive' })); 