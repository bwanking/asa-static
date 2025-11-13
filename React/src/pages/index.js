// src/pages/Index.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome to My App</h1>
      <p>This is the main index page.</p>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
}
