import React from 'react';
import ProvinceCard from './cartas';

// Datos de ejemplo para las 2 provincias
const provincias = [
  {
    id: 1,
    name: 'La Altagracia',
    capital: 'Higüey',
    description:
      'Famosa por sus playas de arena blanca, turismo y resorts. Cultura caribeña y festividades.',
    gastronomy: 'Sancocho, pescado frito, tostones, batidas de frutas.',
    highlights: [
      'Punta Cana (playas y resorts)',
      'Bávaro (actividades acuáticas)',
      'Basílica Catedral de Higüey'
    ],
    image:
      'https://novalproperties.com/uploads/1722412811.jpg',
    mapEmbed: 'https://www.google.com/maps?q=Punta+Cana&output=embed'
  },
  {
    id: 2,
    name: 'Samaná',
    capital: 'Santa Bárbara de Samaná',
    description:
      'Samaná destaca por cascadas, montañas y la bahía donde llegan las ballenas en temporada.',
    gastronomy: 'Pescados, mariscos, mangú, bacalao con guandules.',
    highlights: ['Parque Nacional Los Haitises', 'Cascada El Limón', 'Avistamiento de ballenas'],
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    mapEmbed: 'https://www.google.com/maps?q=Samaná&output=embed'
  }
];

function ProvinceList({ onSelect }) {
  return (
    <>
      <ul>
        {provincias.map((p) => (
          <ProvinceCard key={p.id} prov={p} onSelect={onSelect} />
        ))}
      </ul>
    </>
  );
}

export default ProvinceList;
