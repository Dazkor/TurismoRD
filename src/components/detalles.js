import React from 'react';

function detalles({ prov, onClose }) {
  if (!prov) {
    return (
      <div>
        <h2>Seleccione una provincia</h2>
        <p>Haz clic en "Ver detalles" en alguna tarjeta para ver más información.</p>
      </div>
    );
  }

  return (
    <section style={{ marginTop: 16 }}>
      <h2>{prov.name} — Detalles</h2>

      <p>
        <strong>Capital:</strong> {prov.capital}
      </p>

      <p>
        <strong>Gastronomía típica:</strong> {prov.gastronomy}
      </p>

      <h2 style={{ marginTop: 12 }}>Lugares destacados</h2>
      <ul className="details" style={{ marginTop: 8 }}>
        {prov.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      <div style={{ marginTop: 12 }}>
        <h2>Mapa</h2>
        <div
          style={{
            width: '100%',
            height: 320,
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: 'var(--shadow)',
            marginTop: 8
          }}
        >
          <iframe
            title={`${prov.name} mapa`}
            src={prov.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={onClose}
          style={{
            padding: '8px 12px',
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.08)',
            background: 'transparent',
            cursor: 'pointer'
          }}
        >
          Cerrar detalles
        </button>
      </div>
    </section>
  );
}

export default detalles;
