import './Lakier.css';

function Lakier(props) {
  return (
    <div className="Lakier">

        <div className='lewy'>
            <img src={props.plik} alt="obrazek"/>
        </div>
        <div className='prawy'>
            <p className='nazwa' id ="nazwa">{props.nazwa}</p>
            <p className='odcien'>odcień: {props.odcien}</p>
            <p className='cena'>Cena: {props.cena} zł</p>
            <p className="reklama">{props.reklama}</p>
            <button onClick={()=>dodajdokoszyka(props.nazwa)}>dodaj do koszyka</button>
        </div>
        <div className='czysc'/>

    </div>
  );


  function dodajdokoszyka(nazwa) {
    props.setKoszyk(props.koszyk+1);
    // let nazwa = document.getElementById("nazwa").value;
    alert("Dodano lakier o nazwie: " + nazwa);
  }
}

export default Lakier;
