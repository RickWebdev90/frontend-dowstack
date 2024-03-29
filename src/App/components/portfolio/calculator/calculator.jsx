import React, { useRef, useState, useEffect } from "react";
import "./calculator.css";

export default function Calculator() {
  const startkapitalRef = useRef();
  const sparrateRef = useRef();
  const zinsRef = useRef();
  const spardauerRef = useRef();
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message !== null) {
      const { calcYears, calcResult } = message;
      sessionStorage.setItem("calcYears", calcYears);
      sessionStorage.setItem("calcResult", calcResult);
    }
  }, [result]);

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
    console.log("STARTKAPITAL", startkapital);
    setResult(
      startkapital.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
      })
    );
    const calcYears = spardauerRef.current.value;
    const calcResult = JSON.stringify(startkapital);

    const calcObject = {
      calcYears: calcYears,
      calcResult: result,
    };
    setMessage(calcObject);
    sessionStorage.setItem("calcResult", result);

    console.log("CALCULATOR calcResult:", calcResult);
    console.log("CALCULATOR result:", result);
  };

  return (
    <div>
      <div className="calculator-container">
        <div className="calculator-title">
          <h1>Dein Vermögensrechner (Millionärsrechner)</h1>
        </div>
        <form
          className="calculatorformular"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="calculator-inputs">
            <label>Monatliche Sparrate(€):</label>
            <input
              type="number"
              name="sparrate"
              ref={sparrateRef}
              placeholder="z. B. 150"
            />
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
            {result != null ? (
              <p>
                Super wenn du so diszipliniert sparst, wirst du ein kleines
                Vermögen haben!🤑
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
