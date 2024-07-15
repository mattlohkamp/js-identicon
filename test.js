function generateRandomString(length) {
	let result = "";

	for (let i = 0; i < length; i++) {
		//	char codes 33-126 are the common printable ascii chars
		const randomCharCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
		result += String.fromCharCode(randomCharCode);
	}

	return result;
}

function generateIdenticon(sourceString, defaultLetter = "x") {
	const firstLetter = sourceString.match(/[a-zA-Z0-9]/)?.[0] ?? defaultLetter;
	console.log(firstLetter);
}

//	generateRandomString(30)

console.log(generateIdenticon("?2?!@#$$"));
