import { FaTachometerAlt, FaChartBar, FaCalendarCheck, FaUserTie } from 'react-icons/fa';

// Recibimos 'setView' como un "prop" desde App.jsx
function Sidebar({ setView }) {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white p-5">
            <h1 className="text-2xl font-bold mb-10">Global Analysis</h1>

            <nav>
                <ul>
                    <li className="mb-4">
                        {/* Usamos onClick para llamar a setView y cambiar el estado a 'overview' */}
                        <button onClick={() => setView('overview')} className="w-full flex items-center p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            <FaTachometerAlt className="mr-3" />
                            Overview
                        </button>
                    </li>

                    <li className="mb-4">
                        {/* Cambiamos el estado a 'price' */}
                        <button onClick={() => setView('price')} className="w-full flex items-center p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            <FaChartBar className="mr-3" />
                            Price Analysis
                        </button>
                    </li>

                    <li className="mb-4">
                        <button onClick={() => setView('availability')} className="w-full flex items-center p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            <FaCalendarCheck className="mr-3" />
                            Availability
                        </button>
                    </li>

                    <li className="mb-4">
                        <button onClick={() => setView('host_insights')} className="w-full flex items-center p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                            <FaUserTie className="mr-3" />
                            Host Insights
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;