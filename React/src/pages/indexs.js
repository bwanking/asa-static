import React, { useState } from 'react';
import './Index.css'; // We'll move styles here
import { Link } from 'react-router-dom';
import asaLogo from '../assets/asa-logo.png'; // Adjust path if needed

function Index() {
  const [lang, setLang] = useState('en');

  const translations = {
    en: {
      header: "Free Ourselves from Mental Slavery",
      mission: "Free Ourselves from Mental Slavery",
      join: "Join the Movement",
      signIn: "Sign In"
    },
    sw: {
      header: "Tujikomboe kutoka kwa utumwa wa kiakili",
      mission: "Tujikomboe kutoka kwa utumwa wa kiakili",
      join: "Jiunge na Harakati",
      signIn: "Ingia"
    },
    fr: {
      header: "Libérons-nous de l'esclavage mental",
      mission: "Libérons-nous de l'esclavage mental",
      join: "Rejoindre le Mouvement",
      signIn: "Se Connecter"
    }
  };

  const t = translations[lang];

  return (
    <div className="index-body">
      <header>
        <div className="logo">
          <img src={asaLogo} alt="ASA Logo" />
        </div>
        <div className="header-right">
          <div className="header-text">{t.header}</div>
          <select
            className="language-select"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="sw">Swahili</option>
            <option value="fr">French</option>
          </select>
        </div>
      </header>

      <div className="main">
        <h1>ASA — African Social Media App</h1>
        <p>{t.mission}</p>
        <div className="cta">
          <Link to="/signup" className="cta-btn">{t.join}</Link>
          <Link to="/login" className="cta-btn">{t.signIn}</Link>
        </div>
      </div>

      <footer>
        © 2025 ASA Africa. All rights reserved.
        <p>Tel +256755317357</p>
      </footer>
    </div>
  );
}

export default Index;

