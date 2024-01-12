import React, { useRef, useState } from 'react';
import '../Calculator/calculator.css';

export default function Calculator() {
  const startkapitalRef = useRef();
  const sparrateRef = useRef();
  const zinsRef = useRef();
  const spardauerRef = useRef();
  const [result, setResult] = useState(null);

  const calculateResult = () => {
    const daten = {
      sparrate: parseFloat(sparrateRef.current.value),
      startkapital: parseFloat(startkapitalRef.current.value),
      zins: parseFloat(zinsRef.current.value) / 100,
      spardauer: parseInt(spardauerRef.current.value) * 12,
    };

    let startkapital = daten.startkapital;
    const sparrate = daten.sparrate;
    const zins = daten.zins;
    const spardauer = daten.spardauer;

    for (let i = 1; i <= spardauer; i++) {
      startkapital += sparrate;
      startkapital += startkapital * (zins / 12);
    }

    setResult(startkapital.toLocaleString('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 }));


  };

  return (
    <div>
      <div className="calculator-container">
        <div className="calculator-title">
          <h1>Vermögensrechner (Millionärsrechner)</h1>
        </div>
        <form className="calculatorformular" onSubmit={(e) => e.preventDefault()}>
          <div className="calculator-inputs">
            <label>Monatliche Sparrate(€):</label>
            <input type="number" name="sparrate" ref={sparrateRef} placeholder="z. B. 150" />
            <label>Jährlicher Zins(%):</label>
            <input type="number" name="zins" ref={zinsRef} />
            <label>Spardauer (Jahre):</label>
            <input type="number" name="spardauer" ref={spardauerRef} />
            <label>Startkapital(€):</label>
            <input type="number" name="startkapital" ref={startkapitalRef} />
          </div>
          <div className="calculator-button">
            <button onClick={calculateResult}>Berechnen</button>
          </div>
          <div className="calculator-ergebnis">
            <h2>Ergebnis: </h2>
            <h2>{result}</h2>
            {result != null ? <p>Super wenn du so weiter sparst, wird ein kleines Vermögen haben</p> : <p></p>}
          </div>
        </form>
      </div>
    </div>
  );
}
