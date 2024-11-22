import './App.css';
import React, { useState } from 'react';

import Lakier from './Lakier.jsx';

import czerwony from './img/czerwony.jpg';
import fioletowy from './img/fioletowy.jpg';
import zloty from './img/zloty.jpg';
import wszystkie from './img/wszystkie.jpg';

import f1 from './img/f1.jpg';
import f2 from './img/f2.jpg';
import f3 from './img/f3.jpg';

import c1 from './img/c1.jpg';
import c2 from './img/c2.jpg';

import z1 from './img/z1.jpg';
import z2 from './img/z2.jpg';

let tab = [];

let fiolet = [
  {id: 1, odcien: "fioletowy", nazwa: "No Risk No Story", cena: 27.29, reklama: "Oszczędzasz 33%", plik: f1 },
  {id: 2, odcien: "fioletowy", nazwa: "Moony Whispers", cena: 38.99, reklama: "Mój wybór Kasia Kot", plik: f2 },
  {id: 3, odcien: "fioletowy", nazwa: "Midnight Love", cena: 27.99, reklama: "XMAS Trend", plik: f3 },
];

let zlot = [
  {id: 6, odcien: "złoty", nazwa: "TOP GLOW GOLD", cena: 29.99, reklama: "XMAS Trend", plik: z1 },
  {id: 7, odcien: "złoty", nazwa: "Sparkling Kiss", cena: 27.99, reklama: "XMAS Trend", plik: z2 }
];

let czerw = [
  {id: 4, odcien: "czerwony", nazwa: "Alizee", cena: 27.29, reklama: "Oszczędzasz 31%", plik: c1 },
  {id: 5, odcien: "czerwony", nazwa: "Mysterious Tale", cena: 32.99, reklama: "GET THE LOOK", plik: c2 }
];



function App() {
  const [tab, setKolor] = useState(fiolet)
  const [koszyk, setKoszyk] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>grafiki i inspiracja ze strony NEONAIL.PL</h1>
      </header>
      <h2>W koszyku: {koszyk}</h2>
      <p className='wybierzodcien'>wybierz odcień</p>
      <img className="kolor" src = {fioletowy} alt="fioletowy" onClick={()=>setKolor(fiolet)}/>
      <img className="kolor" src = {czerwony} alt="czerwony" onClick={()=>setKolor(czerw)}/>
      <img className="kolor" src = {zloty} alt="złoty" onClick={()=>setKolor(zlot)}/>
      <img className="kolor" src = {wszystkie} alt="wszystkie" onClick={()=>setKolor(fiolet.concat(czerw).concat(zlot))}/>


      {tab.map( (e) => (<Lakier key={e.id} plik={e.plik} nazwa={e.nazwa} odcien={e.odcien} cena={e.odcien} reklama={e.reklama} setKoszyk={setKoszyk} koszyk={koszyk}/>))}





      

    </div>
  );
}

export default App;
