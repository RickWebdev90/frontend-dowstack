import React from "react";
import "./landingpage.css";
import tresor from "../app/assets/Landingpage/Funktionen/Tresor.png"
import dollar from "../app/assets/Landingpage/Funktionen/Dollar.png"
import sparziele from "../app/assets/Landingpage/Funktionen/Sparziele.png"

export default function Sektion2() {
  return (
    <div className="funktionen">
      <div className="funktionen-titel">
        <h2>Funktionen</h2>
      </div>
      <div className="funktionen-text">
        <h3>Die ultimative Finanz-App die alle Aspekte für eine vernünftige und solide Kontrolle und Planung abdeckt.</h3>
      </div>
      <div className="funktionen-cardcontainer">
        <div className="funktionen-card1">
          <div className="funktionen-card1-img">
            <img src={dollar} alt="" />
          </div>
          <div className="funktionen-card1-titel">
            <h3>Intelligente Erfassung von Ein- u. Ausgaben</h3>
          </div>
          <div className="funktionen-card1-text">
            <p>Volle Kostenkontrolle von variablen und fixen Ausgaben Monat für Monat.</p>
          </div>
        </div>
        <div className="funktionen-card2">
          <div className="funktionen-card2-img">
            <img src={sparziele} alt="" />
          </div>
          <div className="funktionen-card2-titel">
            <h3>Sparziele</h3>
          </div>
          <div className="funktionen-card2-text">
            <p>Definiere deine Sparziele und sehe immer den aktuellen Fortschritt um dein nächstes Objekt der Begierde zu realisieren.</p>
          </div>
        </div>
        <div className="funktionen-card3">
          <div className="funktionen-card3-img">
            <img src={tresor} alt="" />
          </div>
          <div className="funktionen-card3-titel">
            <h3>Millionärsrechner</h3>
          </div>
          <div className="funktionen-card3-text">
            <p>
              How to become a Millionaire? Mit unserem Rechner findest du es
              heraus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
