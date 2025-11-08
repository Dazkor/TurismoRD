import React from 'react';

function Header({ onToggleDark }) {
  return (
    <header>
      <h1>🌴 Reto 1 – “TurismoRD: Descubre tu provincia”</h1>
      <p>
        El Ministerio de Turismo invita a redescubrir República Dominicana. Selecciona
        una provincia para ver su cultura, gastronomía y atractivos.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
        <div>
          <h2>Provincias seleccionadas</h2>
          <p>Explora dos provincias y descubre sus encantos.</p>
        </div>

        <div style={{ alignSelf: 'center' }}>
          <button
            onClick={onToggleDark}
            style={{
              padding: '8px 12px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              background: 'var(--card)',
              boxShadow: '0 6px 16px rgba(0,0,0,0.06)'
            }}
          >
            Cambiar modo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
