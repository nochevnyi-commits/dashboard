import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Desktop', value: 45, color: '#6366f1' },
  { name: 'Mobile', value: 35, color: '#8b5cf6' },
  { name: 'Tablet', value: 15, color: '#a78bfa' },
  { name: 'Other', value: 5, color: '#c4b5fd' },
];

export default function TrafficChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Device breakdown</p>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
