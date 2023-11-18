// import logo from './logo.svg';
import './App.css';
import { NyMynd } from './NyMynd';

// AIzaSyDyNjdBJi6833CZ7oO77k8nAH8_LvURAPM
// 

// function teksti() {
// 	const figcap = document.querySelector('figcaption');
// 	if (!figcap) {
// 		return
// 	}
// 	figcap.textContent = this.value
// }

// "https://fonts.googleapis.com/css?family=Tangerine"

function breytatekstalit() {
	const litur = document.querySelector('.litur')
	const teksti = document.querySelector('.tekstinn')
	teksti.style.color = litur.value
}
async function loadFontFace(fontFace) {
	const loadedFont = await fontFace.load();
	document.fonts.add(loadedFont);
}
async function getfonturl(ff1) {
	const fontURL = `https://fonts.googleapis.com/css2?family=${String(ff1)}&display=swap`
	const node = await Request(fontURL);
	console.log(node)
	return node
}

function nyttfont() {
	const ffamily = document.querySelector('.ffa')
	if (!ffamily) {
		return
	}
	const ff1 = ffamily.value.replace(' ', '+')


	console.log(ffamily.value)
	const fontURL = getfonturl(ff1)
	console.log(fontURL)
	const nyfont = new FontFace(ffamily?.value, `url(${fontURL})`, { weight: 400 })
	console.log(nyfont)
	try {
		loadFontFace(nyfont)
		// document.fonts.add(nyfont);
	} catch {
		console.error('loadaði ekki fonti')
		return
	}
	document.fonts.add(nyfont);
	document.body.classList.add('fonts-loaded');

}
// https://fonts.googleapis.com/css2?family=Playfair+Display
function App() {
	return (
		<div className="App">
			<main>
				<menu id='nr1'>
					<button onClick={NyMynd}>
						Ég vill nýja mynd
					</button>
					<label>Velja lit:</label>
					<input type="color" onChange={breytatekstalit} className='litur'></input>
				</menu>
				<menu id='nr2'>
					<label>google-font-family:</label>
					<input type='text' className='ffa' defaultValue={'Playfair Display'}></input>
					<button onClick={nyttfont}>Breyta</button>
				</menu>
				<figure id='nr3'>
					<img src='' className='litamynd' alt=''></img>
				</figure>
				<textarea className='tekstinn' defaultValue={'teksti hérna'}></textarea>
			</main>
		</div>
	);
}

export default App;
