// import logo from './logo.svg';
import './App.css';
import FontPicker from 'font-picker';
// import React, { Component } from 'react';
import { NyMynd } from './NyMynd';

function breytatekstalit() {
	const litur = document.querySelector('.litur')
	const teksti = document.querySelector('.tekstinn')
	teksti.style.color = litur.value
}

// 	document.body.classList.add('fonts-loaded');
const fontPicker = new FontPicker(
	'AIzaSyDyNjdBJi6833CZ7oO77k8nAH8_LvURAPM', // Google API key
	'Open Sans', // Default font
	{ limit: 12 }, // Additional options
);
if (!fontPicker) {
	console.warn(fontPicker)
}

function breytatekstas() {
	const stor = document.querySelector('.stor')
	const teksti = document.querySelector('.tekstinn')
	teksti.style.fontSize = `${String(stor.value)}em`
}
// }
// https://fonts.googleapis.com/css2?family=Playfair+Display
function App() {
	return (
		<div className='app'>
			<main>
				<menu className='nr1'>
					<button onClick={NyMynd}>
						Ég vill nýja mynd
					</button>
					<label>Velja lit:</label>
					<input type="color" onChange={breytatekstalit} className='litur'></input>
					<label>Stærð leturs:</label>
					<input type="range" onChange={breytatekstas} value="1" className='stor'></input>
				</menu>
				<figure className='nr2'>
					<img src='' className='litamynd' alt=''></img>
				</figure>
				<textarea className='tekstinn apply-font' defaultValue={'teksti hérna'}></textarea>
			</main>
		</div>
	);
}

export default App;
// export { fontPicker };

