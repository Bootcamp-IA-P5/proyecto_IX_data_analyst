import { useState } from 'react';
import Sidebar from './components/Sidebar';

function App() {
  const [view, setView] = useState('overview');

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar setView={setView} />

      <main className="flex-grow p-8">
        {/* Vista para 'overview' */}
        {view === 'overview' && (
          <div>
            <h1 className="text-4xl font-bold">Overview</h1>
            <p className="mt-4 text-gray-400">High-level summary of global data.</p>
          </div>
        )}

        {/* Vista para 'price' */}
        {view === 'price' && (
          <div>
            <h1 className="text-4xl font-bold">Price Analysis</h1>
            <p className="mt-4 text-gray-400">Detailed price metrics and trends.</p>
          </div>
        )}
        
        {/* --- TUS NUEVAS VISTAS VAN AQUÍ --- */}

        {/* Vista para 'availability' */}
        {view === 'availability' && (
          <div>
            <h1 className="text-4xl font-bold">Availability Analysis</h1>
            <p className="mt-4 text-gray-400">Analysis of booking patterns and availability rates.</p>
          </div>
        )}

        {/* Vista para 'host_insights' */}
        {view === 'host_insights' && (
          <div>
            <h1 className="text-4xl font-bold">Host Insights</h1>
            <p className="mt-4 text-gray-400">Insights about hosts, their properties, and performance.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;