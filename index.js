function addDots(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	const rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2'); // changed comma to dot here
	}
	return x1 + x2;
}

export default (price) => {
	if (!price) {
		price = 0
	};
	return `Rp ${addDots(Math.round(price)).toString()}`
}