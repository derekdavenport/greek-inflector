const normalized = {
	// 
	'κσ': 'ξ',
	'κς': 'ξ',
	'γσ': 'ξ',
	'γς': 'ξ',
	'χσ': 'ξ',
	'χς': 'ξ',
	'πσ': 'ψ',
	'πς': 'ψ',
	'βσ': 'ψ',
	'βς': 'ψ',
	'φσ': 'ψ',
	'φς': 'ψ',
	'τσ': 'σ',
	'τς': 'ς',
	'δσ': 'σ',
	'δς': 'ς',
	'θσ': 'σ',
	'θς': 'ς',

	// convert tonos to oxia
	'Ά': 'Ά',
	'Έ': 'Έ',
	'Ή': 'Ή',
	'Ί': 'Ί',
	'Ό': 'Ό',
	'Ύ': 'Ύ',
	'Ώ': 'Ώ',
	'ά': 'ά',
	'έ': 'έ',
	'ή': 'ή',
	'ί': 'ί',
	'ό': 'ό',
	'ύ': 'ύ',
	'ώ': 'ώ',
};

const contractions = {
	'ᾱι': 'ᾳ',
	'ηι': 'ῃ',
	'ωι': 'ῳ',
	'αα': 'ᾱ',
	'εα': 'η',
	'οα': 'ω',
	'αε': 'ᾱ',
	'εε': 'ει',
	'οε': 'ου',
	'αο': 'ω',
	'εο': 'ου',
	'οο': 'ου',
};

const decomposed: {
	[composed: string]: string[]
} = {
	'Ά': ['Α', '´'],
	'Έ': ['Ε', '´'],
	'Ή': ['Η', '´'],
	'Ί': ['Ι', '´'],
	'Ό': ['Ο', '´'],
	'Ύ': ['Υ', '´'],
	'Ώ': ['Ω', '´'],
	'ά': ['α', '´'],
	'έ': ['ε', '´'],
	'ή': ['η', '´'],
	'ί': ['ι', '´'],
	'ό': ['ο', '´'],
	'ύ': ['υ', '´'],
	'ώ': ['ω', '´'],
	'ᾶ': ['α', '῀'],
	'ῆ': ['η', '῀'],
	'ῖ': ['ι', '῀'],
	'ῦ': ['υ', '῀'],
	'ῶ': ['ω', '῀'],
	'ᾷ': ['ᾳ', '῀'],
	'ῇ': ['ῃ', '῀'],
	'ῷ': ['ῳ', '῀'],
	'ἀ': ['α', '᾿'],
	'ἁ': ['α', '῾'],
	'ἂ': ['α', '᾿', '`'],
	'ἃ': ['α', '῾', '`'],
	'ἄ': ['α', '᾿', '´'],
	'ἅ': ['α', '῾', '´'],
	'ἆ': ['α', '᾿', '῀'],
	'ἇ': ['α', '῾', '῀'],
	'Ἀ': ['Α', '᾿'],
	'Ἁ': ['Α', '῾'],
	'Ἂ': ['Α', '᾿', '`'],
	'Ἃ': ['Α', '῾', '`'],
	'Ἄ': ['Α', '᾿', '´'],
	'Ἅ': ['Α', '῾', '´'],
	'Ἆ': ['Α', '᾿', '῀'],
	'Ἇ': ['Α', '῾', '῀'],
	'ἐ': ['ε', '᾿'],
	'ἑ': ['ε', '῾'],
	'ἒ': ['ε', '᾿', '`'],
	'ἓ': ['ε', '῾', '`'],
	'ἔ': ['ε', '᾿', '´'],
	'ἕ': ['ε', '῾', '´'],
	'Ἐ': ['Ε', '᾿'],
	'Ἑ': ['Ε', '῾'],
	'Ἒ': ['Ε', '᾿', '`'],
	'Ἓ': ['Ε', '῾', '`'],
	'Ἔ': ['Ε', '᾿', '´'],
	'Ἕ': ['Ε', '῾', '´'],
	'ἠ': ['η', '᾿', '῀'],
	'ἡ': ['η', '῾', '῀'],
	'ἢ': ['η', '᾿', '`'],
	'ἣ': ['η', '῾', '`'],
	'ἤ': ['η', '᾿', '´'],
	'ἥ': ['η', '῾', '´'],
	'ἦ': ['η', '᾿', '῀'],
	'ἧ': ['η', '῾', '῀'],
	'Ἠ': ['Η', '᾿'],
	'Ἡ': ['Η', '῾'],
	'Ἢ': ['Η', '᾿', '`'],
	'Ἣ': ['Η', '῾', '`'],
	'Ἤ': ['Η', '᾿', '´'],
	'Ἥ': ['Η', '῾', '´'],
	'Ἦ': ['Η', '᾿', '῀'],
	'Ἧ': ['Η', '῾', '῀'],
	'ἰ': ['ι', '᾿'],
	'ἱ': ['ι', '῾'],
	'ἲ': ['ι', '᾿', '`'],
	'ἳ': ['ι', '῾', '`'],
	'ἴ': ['ι', '᾿', '´'],
	'ἵ': ['ι', '῾', '´'],
	'ἶ': ['ι', '᾿', '῀'],
	'ἷ': ['ι', '῾', '῀'],
	'Ἰ': ['Ι', '᾿'],
	'Ἱ': ['Ι', '῾'],
	'Ἲ': ['Ι', '᾿', '`'],
	'Ἳ': ['Ι', '῾', '`'],
	'Ἴ': ['Ι', '᾿', '´'],
	'Ἵ': ['Ι', '῾', '´'],
	'Ἶ': ['Ι', '᾿', '῀'],
	'Ἷ': ['Ι', '῾', '῀'],
	'ὀ': ['ο', '᾿'],
	'ὁ': ['ο', '῾'],
	'ὂ': ['ο', '᾿', '`'],
	'ὃ': ['ο', '῾', '`'],
	'ὄ': ['ο', '᾿', '´'],
	'ὅ': ['ο', '῾', '´'],
	'Ὀ': ['Ο', '᾿'],
	'Ὁ': ['Ο', '῾'],
	'Ὂ': ['Ο', '᾿', '`'],
	'Ὃ': ['Ο', '῾', '`'],
	'Ὄ': ['Ο', '᾿', '´'],
	'Ὅ': ['Ο', '῾', '´'],
	'ὐ': ['υ', '᾿'],
	'ὑ': ['υ', '῾'],
	'ὒ': ['υ', '᾿', '`'],
	'ὓ': ['υ', '῾', '`'],
	'ὔ': ['υ', '᾿', '´'],
	'ὕ': ['υ', '῾', '´'],
	'ὖ': ['υ', '᾿', '῀'],
	'ὗ': ['υ', '῾', '῀'],
	'Ὑ': ['Υ', '῾'],
	'Ὓ': ['Υ', '῾', '`'],
	'Ὕ': ['Υ', '῾', '´'],
	'Ὗ': ['Υ', '῾', '῀'],
	'ὠ': ['ω', '᾿'],
	'ὡ': ['ω', '῾'],
	'ὢ': ['ω', '᾿', '`'],
	'ὣ': ['ω', '῾', '`'],
	'ὤ': ['ω', '᾿', '´'],
	'ὥ': ['ω', '῾', '´'],
	'ὦ': ['ω', '᾿', '῀'],
	'ὧ': ['ω', '῾', '῀'],
	'Ὠ': ['Ω', '᾿'],
	'Ὡ': ['Ω', '῾'],
	'Ὢ': ['Ω', '᾿', '`'],
	'Ὣ': ['Ω', '῾', '`'],
	'Ὤ': ['Ω', '᾿', '´'],
	'Ὥ': ['Ω', '῾', '´'],
	'Ὦ': ['Ω', '᾿', '῀'],
	'Ὧ': ['Ω', '῾', '῀'],
	//	'ᾳ': [],
	'ᾴ': [],
	'ᾲ': [],
	//	'ᾷ': [],
	'ᾀ': ['ᾳ', '᾿'],
	'ᾄ': ['ᾳ', '᾿', '´'],
	'ᾂ': ['ᾳ', '᾿', '`'],
	'ᾆ': ['ᾳ', '᾿', '῀'],
	'ᾁ': ['ᾳ', '῾'],
	'ᾅ': ['ᾳ', '῾', '´'],
	'ᾃ': ['ᾳ', '῾', '`'],
	'ᾇ': ['ᾳ', '῾', '῀'],
//	'ῃ': [],
	'ῄ': ['ῃ', '´'],
	'ῂ': ['ῃ', '`'],
//	'ῇ': [],
	'ᾐ': ['ῃ', '᾿'],
	'ᾔ': ['ῃ', '᾿', '´'],
	'ᾒ': ['ῃ', '᾿', '`'],
	'ᾖ': ['ῃ', '᾿', '῀'],
	'ᾑ': ['ῃ', '῾'],
	'ᾕ': ['ῃ', '῾', '´'],
	'ᾓ': ['ῃ', '῾', '`'],
	'ᾗ': ['ῃ', '῾', '῀'],
//	'ῳ': [],
	'ῴ': ['ῳ', '´'],
	'ῲ': ['ῳ', '`'],
//	'ῷ': [],
	'ᾠ': ['ῳ', '᾿'],
	'ᾤ': ['ῳ', '᾿', '´'],
	'ᾢ': ['ῳ', '᾿', '`'],
	'ᾦ': ['ῳ', '᾿', '῀'],
	'ᾡ': ['ῳ', '῾'],
	'ᾥ': ['ῳ', '῾', '´'],
	'ᾣ': ['ῳ', '῾', '`'],
	'ᾧ': ['ῳ', '῾', '῀'],
	'ᾈ': ['ᾼ', '᾿'],
	'ᾌ': ['ᾼ', '᾿', '´'],
	'ᾊ': ['ᾼ', '᾿', '`'],
	'ᾎ': ['ᾼ', '᾿', '῀'],
	'ᾉ': ['ᾼ', '῾'],
	'ᾍ': ['ᾼ', '῾', '´'],
	'ᾋ': ['ᾼ', '῾', '`'],
	'ᾏ': ['ᾼ', '῾', '῀'],
	'ᾘ': ['ῌ', '᾿'],
	'ᾜ': ['ῌ', '᾿', '´'],
	'ᾚ': ['ῌ', '᾿', '`'],
	'ᾞ': ['ῌ', '᾿', '῀'],
	'ᾙ': ['ῌ', '῾'],
	'ᾝ': ['ῌ', '῾', '´'],
	'ᾛ': ['ῌ', '῾', '`'],
	'ᾟ': ['ῌ', '῾', '῀'],
	'ᾨ': ['ῼ', '᾿'],
	'ᾬ': ['ῼ', '᾿', '´'],
	'ᾪ': ['ῼ', '᾿', '`'],
	'ᾮ': ['ῼ', '᾿', '῀'],
	'ᾩ': ['ῼ', '῾'],
	'ᾭ': ['ῼ', '῾', '´'],
	'ᾫ': ['ῼ', '῾', '`'],
	'ᾯ': ['ῼ', '῾', '῀'],
};

const composed = Object.entries(decomposed).reduce(
	(composed, [composition, [naked, ...diacritics]]) => ({
		...composed,
		[naked]: {
			...composed[naked],
			[diacritics.sort().join('')]: composition,
		},
	}),
	{} as { [naked: string]: { [diacritic: string]: string } }
);

function decompose(word: string): [string, string[][]] {
	const wordDiacritics: string[][] = [];
	let nakedWord = '';
	for (let i = 0; i < word.length; i++) {
		const decomposition = decomposed[word[i]];
		if (decomposition) {
			const [nakedLetter, ...diacritics] = decomposition;
			if (nakedLetter) {
				nakedWord += nakedLetter;
				wordDiacritics[i] = diacritics;
			}
			else {
				nakedWord += word[i];
			}
		}
		else {
			nakedWord += word[i];
		}
	}
	return [nakedWord, wordDiacritics];
}

function compose(nakedWord: string, wordDiacritics: string[][]): string {
	let word = '';
	for (let i = 0; i < nakedWord.length; i++) {
		const char = nakedWord[i];
		const diacritics = wordDiacritics[i];
		if (diacritics) {
			const composition = composed[char][diacritics.sort().join('')];
			if (!composition) {
				throw new Error('no composition for ' + char + 'with ' + diacritics.sort().join())
			}
			word += composition;
		}
		else {
			word += char;
		}
	}
	return word;
}

function decompose2(word: string): [string, string[][]] {

	const wordMarks: string[][] = [];

	let nakedWord = '';
	const vowels = 'αΑεΕηΗιΙοΟυΥωΩᾳᾼῃῌῳῼ';
	for (var i = 0; i < word.length; i++) {
		const charCode = word.charCodeAt(i);
		// a marked vowel
		if (charCode >= 'ἀ'.charCodeAt(0) && charCode <= 'ῼ'.charCodeAt(0)) {
			wordMarks[i] = [];
			// has breathing mark
			if (
				charCode <= 'Ὧ'.charCodeAt(0) ||
				charCode >= 'ᾀ'.charCodeAt(0) && charCode <= 'ᾯ'.charCodeAt(0)
			) {
				const vowelIndex = (charCode >> 3) - 992;
				const vowel = vowels[vowelIndex];
				nakedWord += vowel;
				wordMarks[i].push(charCode & 1 ? '῾' : '᾿');

				// has oxia
				if (charCode & 0x4) {
					wordMarks[i].push('´');
				}
				// has perispomeni
				else if (charCode & 0x6) {
					wordMarks[i].push('῀');
				}
			}
			// no breathing mark with oxia
			else {
				// lowercase with oxia
				if (charCode <= 'ώ'.charCodeAt(0)) {
					const vowels = 'αεηιουω';
					const vowelIndex = (charCode >> 1) & 0x7;
					const vowel = vowels[vowelIndex];
					nakedWord += vowel;
					wordMarks[i].push('´');
				}

				else if (charCode <= 'ᾷ'.charCodeAt(0)) {
					'αΑηΗιΙυΥωΩ'
				}
			}
		}
		// not a marked vowel
		else {
			nakedWord += word[i];
		}
	}
	return [nakedWord, wordMarks];
}

// TODO: split on syllables
const nakedVowelArray = [...Object.keys(composed)];
const nakedVowels = nakedVowelArray.join('');
const vowelArray = [...nakedVowelArray, ...Object.keys(decomposed)];
const vowels = vowelArray.join('');
// const lastVowelRegExp = new RegExp(`[${vowels}]+[^${vowels}]*$`);

const consonants = 'ΒΓΔΖΘΚΛΜΝΞΠΡΣΤΦΧΨβγδζθκλμνξπρςστφχψ';
const syllvowels = '(?:' + ['αι', 'ει', 'οι', 'αυ', 'ου', 'υι', 'ευ', 'ηυ', 'υι', 'ηυ', ...nakedVowelArray].join('|') + ')';
function syllablify(word: string): string[] {
	const syllableRegEx = new RegExp(`[${consonants}]*${syllvowels}+(?:[${consonants}]+$|[${consonants}](?=[${consonants}]|$))?`, 'g');
	const syllables: string[] = [];
	let match: RegExpExecArray | null = null;
	while (match = syllableRegEx.exec(word)) {
		syllables.push(match[0]);
	}
	return syllables;
}

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
		'ία': {
			singular: {
				nominative: 'ία',
				genitive: 'ίας',
				dative: 'ίᾳ',
				accusative: 'ίαν',
				vocative: 'ία',
			},
			plural: {
				nominative: 'ῖαι',
				genitive: 'ιῶν',
				dative: 'ίαις',
				accusative: 'ίας',
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
		'εά': {
			singular: {
				nominative: 'εά',
				genitive: 'εᾶς',
				dative: 'εᾷ',
				accusative: 'εάν',
				vocative: 'εά',
			},
			plural: {
				nominative: 'εαί',
				genitive: 'εῶν',
				dative: 'εαῖς',
				accusative: 'εάς',
				vocative: 'εαί',
			},
		},
		'ιά': {
			singular: {
				nominative: 'ιά',
				genitive: 'ιᾶς',
				dative: 'ιᾷ',
				accusative: 'ιάν',
				vocative: 'ιά',
			},
			plural: {
				nominative: 'ιαί',
				genitive: 'ιῶν',
				dative: 'ιαῖς',
				accusative: 'ιάς',
				vocative: 'ιαί',
			},
		},
		'ρά': {
			singular: {
				nominative: 'ρά',
				genitive: 'ρᾶς',
				dative: 'ρᾷ',
				accusative: 'ράν',
				vocative: 'ρά',
			},
			plural: {
				nominative: 'ραί',
				genitive: 'ρῶν',
				dative: 'ραῖς',
				accusative: 'ράς',
				vocative: 'ραί',
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
		'ά': {
			singular: {
				nominative: 'ά',
				genitive: 'ῆς',
				dative: 'ῇ',
				accusative: 'άν',
				vocative: 'ά',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
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
		'ή': {
			singular: {
				nominative: 'ή',
				genitive: 'ῆς',
				dative: 'ῇ',
				accusative: 'ήν',
				vocative: 'ή',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
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
		'ής': {
			singular: {
				nominative: 'ής',
				genitive: 'οῦ',
				dative: 'ῇ',
				accusative: 'ήν',
				vocative: 'α',
			},
			plural: {
				nominative: 'αί',
				genitive: 'ῶν',
				dative: 'αῖς',
				accusative: 'άς',
				vocative: 'αί',
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
		'ός': {
			singular: {
				nominative: 'ός',
				genitive: 'οῦ',
				dative: 'ῷ',
				accusative: 'όν',
				vocative: 'ε',
			},
			plural: {
				nominative: 'οί',
				genitive: 'ῶν',
				dative: 'οῖς',
				accusative: 'ούς',
				vocative: 'οί',
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
		'όν': {
			singular: {
				nominative: 'όν',
				genitive: 'οῦ',
				dative: 'ῷ',
				accusative: 'όν',
				vocative: 'όν',
			},
			plural: {
				nominative: 'ά',
				genitive: 'ῶν',
				dative: 'οῖς',
				accusative: 'ά',
				vocative: 'ά',
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
		'δός': {
			singular: {
				nominative: 'ς',
				genitive: 'δός',
				dative: 'δί',
				accusative: 'δα',
				vocative: '',
			},
			plural: {
				nominative: 'δες',
				genitive: 'δῶν',
				dative: 'σί', // sin
				accusative: 'δας',
				vocative: 'δες',
			},
		},
		'κτος': {
			singular: {
				nominative: '?',
				genitive: 'κτος',
				dative: 'κντι',
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
				dative: 'σι', // sin ὀδοῦσῐ 
				accusative: 'ντας',
				vocative: 'ντες',
			},
		},
		'tος': {
			singular: {
				nominative: '?',
				genitive: 'tος',
				dative: 'τι',
				accusative: 'τα', // χάριν
				vocative: '?',
			},
			plural: {
				nominative: 'τες',
				genitive: 'των',
				dative: 'σι', // sin
				accusative: 'τας',
				vocative: 'τες',
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
	},
};

// 3rd declensions that accent penult of genitive plural
// παῖς, παιδός; φῶς, φωτός; οὖς, ὠτός;

const accents = [
	"́",
];

function normalize(text: string): string {
	for (const [bad, good] of Object.entries(normalized)) {
		text = text.split(bad).join(good);
	}
	return text;
}
type Gender = 'm' | 'f' | 'n';
type NounOptions12 = { declension: '1' | '2', gsEnding?: undefined, number: Num, case_: Case, gender?: undefined };
type NounOptions3 = { declension: '3', gsEnding: string, number: Num, case_: Case, gender: Gender };
type NounOptions = NounOptions12 | NounOptions3;
function inflectNoun(lexicalForm: string, { declension, number, case_, gender }: NounOptions12): string;
function inflectNoun(lexicalForm: string, { declension, gsEnding, number, case_, gender }: NounOptions3): string;
function inflectNoun(lexicalForm: string, { declension, gsEnding, number, case_, gender }: NounOptions) {
	if (
		number === 'singular' && (
			case_ === 'nominative' || (
				gender === 'n' && (
					case_ === 'accusative' || case_ === 'vocative'
				)
			)
		)
	) {
		return lexicalForm;
	}
	// lexicalForm = normalize(lexicalForm);
	const endings = nounDeclensions[declension];
	let ending: string | undefined;
	let searchForm: string;
	let stem: string;
	if (declension === '3') {
		// if ending starts with vowel, find last vowel
		// if ending starts with cons, stick on end
		const [nakedLexicalForm, lexicalFormDiacritics] = decompose(lexicalForm);
		const lexicalFormTest = compose(nakedLexicalForm, lexicalFormDiacritics);
		console.log(lexicalForm === lexicalFormTest);
		const [nakedEnding] = decompose(gsEnding!);
		// παῖς παιδός, ὁ/ἡ
		if (nakedEnding.length > nakedLexicalForm.length) {
			searchForm = nakedEnding;
		}
		if (nakedEnding[0] in composed) {
			// TODO: ἄρχων -οντος, ὁ
			const stemEndingIndex = nakedLexicalForm.lastIndexOf(nakedEnding[0]);
			if (stemEndingIndex < 0) {
				throw Error('could not find ' + nakedEnding[0] + ' in ' + lexicalForm);
			}
			stem = lexicalForm.substring(0, stemEndingIndex);
		}
		else {
			stem = lexicalForm;
		}
		searchForm = stem + gsEnding;
	}
	else {
		searchForm = lexicalForm
	}
	ending = Object.keys(endings).find(ending => searchForm.endsWith(ending));
	if (!ending) {
		throw Error(lexicalForm + ' has an unknown ending for declension ' + declension);
	}
	stem = searchForm.slice(0, - ending.length);
	// TODO: move accent if before antepenult
	const t = stem + endings[ending][number][case_];
	return t;
}

console.log(inflectNoun('δόξα', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('τιμή', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('φωνή', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('χαρά', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('γλῶττα', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('γῆ', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἀνδρεία', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('κύριος', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('τέκνον', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἱερόν', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ναός', { declension: '2', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('φθορά', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('ἔχθρα', { declension: '1', number: 'singular', case_: 'genitive' }));
console.log(inflectNoun('πρόσκομμα', { declension: '3', gsEnding: 'τος', number: 'singular', case_: 'genitive', gender: 'n' }));