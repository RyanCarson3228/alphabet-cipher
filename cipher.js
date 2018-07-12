const encrypt = (key, input) => {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const extendedKey = extendKey(key, input);
	const encrypted = [];

	for (let i = 0; i < input.length; i++) {
		encrypted.push(encryptLetter(alphabet, input.substr(i,1), extendedKey.substr(i,1)));
	}
	return encrypted.join("");
};


const extendKey = (key, input) => {
	let extendedKey = key;
	for (let i = 0; i < Math.floor(input.length / key.length) -1; i++) {
		extendedKey += key;
	}
	extendedKey += key.slice(0, input.length % key.length);
	return extendedKey;
};

const shiftAlphabet = (alphabet, index) => {
	return alphabet.slice(index) + alphabet.slice(0, index);
};

const encryptLetter = (alphabet, inputLetter, keyLetter) => {
	const shiftedAlphabet = shiftAlphabet(alphabet, alphabet.search(keyLetter));
	return shiftedAlphabet.substr(alphabet.search(inputLetter), 1);
};

console.log(encrypt("snitch", "thepackagehasbeendelivered"));
console.log(encrypt("bond", "theredfoxtrotsquietlyatmidnight"));
console.log(encrypt("train", "murderontheorientexpress"));
console.log(encrypt("garden", "themolessnuckintothegardenlastnight"));

console.log(encrypt("cloak", "klatrgafedvtssdwywcyty"));