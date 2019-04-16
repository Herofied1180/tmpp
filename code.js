module.exports.encode = (str) => {
	var splitStr = str.split('');

	splitStr.forEach((char, i) => {
		splitStr[i] = String.fromCharCode(char.charCodeAt(0) + i);
	});

	return splitStr.join('');
}

module.exports.decode = (str) => {
	var splitStr = str.split('');

	splitStr.forEach((char, i) => {
		splitStr[i] = String.fromCharCode(char.charCodeAt(0) - i);
	});

	return splitStr.join('');
}