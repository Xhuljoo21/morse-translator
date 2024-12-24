// Morse code mapping
export const morseCodeMap: { [key: string]: string } = {
  'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',   'E': '.',
  'F': '..-.',  'G': '--.',   'H': '....', 'I': '..',    'J': '.---',
  'K': '-.-',   'L': '.-..',  'M': '--',   'N': '-.',    'O': '---',
  'P': '.--.',  'Q': '--.-',  'R': '.-.',  'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',  'Y': '-.--',
  'Z': '--..',  '1': '.----', '2': '..---','3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...','8': '---..', '9': '----.',
  '0': '-----', ' ': '/',     '.': '.-.-.-',',': '--..--','?': '..--..',
  '!': '-.-.--'
};

// Convert text to Morse code
export const textToMorse = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map(char => morseCodeMap[char] || char)
    .join(' ')
    .trim();
};

// Convert Morse code to text
export const morseToText = (morse: string): string => {
  const reverseMorseMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([key, value]) => [value, key])
  );
  
  return morse
    .split(' ')
    .map(code => reverseMorseMap[code] || code)
    .join('')
    .trim();
};