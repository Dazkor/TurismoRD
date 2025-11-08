import React from 'react';

function cartas({ prov, onSelect }) {
  return (
    <li>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', width: '100%' }}>
        <img
          src={prov.image}
          alt={prov.name}
          style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 8 }}
        />
        <div style={{ flex: 1 }}>
          <strong>{prov.name}</strong>
          <div style={{ color: 'var(--muted)', fontSize: 14 }}>{prov.capital}</div>
          <div style={{ marginTop: 8, fontSize: 14 }}>{prov.description}</div>

          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => onSelect(prov)}
              style={{
                marginTop: 8,
                padding: '8px 12px',
                borderRadius: 8,
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(90deg,var(--accent1),var(--accent2))',
                color: 'white',
                boxShadow: '0 6px 18px rgba(0,0,0,0.08)'
              }}
            >
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default cartas;
