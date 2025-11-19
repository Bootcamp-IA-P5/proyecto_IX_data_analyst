import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Datos de ejemplo. En el futuro, estos vendrán de nuestra API o archivo de datos.
const sampleData = [
    { month: 'Enero', avgPrice: 120 },
    { month: 'Febrero', avgPrice: 130 },
    { month: 'Marzo', avgPrice: 150 },
    { month: 'Abril', avgPrice: 145 },
    { month: 'Mayo', avgPrice: 160 },
    { month: 'Junio', avgPrice: 180 },
];

function PriceChart() {
    return (
        // ResponsiveContainer hace que el gráfico se adapte al tamaño de su contenedor.
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={sampleData}>
                <XAxis dataKey="month" stroke="#8884d8" />
                <YAxis />
                <Tooltip wrapperClassName="bg-gray-700 rounded" />
                <Legend />
                <Bar dataKey="avgPrice" fill="#8884d8" name="Precio Promedio (€)" />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default PriceChart;