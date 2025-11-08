import React from 'react';
import Header from './components/header';
import ProvinceList from './components/provincias';
import ProvinceDetails from './components/detalles';
import Footer from './components/footer';

/*
  App.js - componente principal
  Estado principal:
    - selected: provincia seleccionada (objeto) o null
*/
function App() {
  const [selected, setSelected] = React.useState(null);

  // toggle modo oscuro (añade/quita clase en body)
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  return (
    <main className="wrap">
      <Header onToggleDark={toggleDarkMode} />

      <ProvinceList onSelect={(prov) => setSelected(prov)} />

      {/* Panel de detalles: se muestra cuando selected != null */}
      <div className="deliverable">
        <ProvinceDetails prov={selected} onClose={() => setSelected(null)} />
      </div>

      <Footer />
    </main>
  );
}

export default App;
