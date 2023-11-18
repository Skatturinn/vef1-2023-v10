export function NyMynd() {
	const VH = String(window.innerHeight - 80);
	const VW = String(window.innerWidth - 32);
	const tala = Math.round(Math.random() * (100));
	const mynd = `https://source.unsplash.com/random/${VW}x${VH}?sig=${String(tala)}`;
	const litamynd = document.querySelector('.litamynd');
	if (!litamynd) {
		console.error('fann ekki mynda element');
		return;
	}
	litamynd.src = `${mynd}`;
	// https://source.unsplash.com/random/200x200?sig=
}
