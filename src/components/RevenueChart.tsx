import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000, orders: 2400 },
  { month: 'Feb', revenue: 3000, orders: 1398 },
  { month: 'Mar', revenue: 5000, orders: 3800 },
  { month: 'Apr', revenue: 4780, orders: 3908 },
  { month: 'May', revenue: 5890, orders: 4800 },
  { month: 'Jun', revenue: 6390, orders: 3800 },
  { month: 'Jul', revenue: 7490, orders: 4300 },
  { month: 'Aug', revenue: 6820, orders: 4100 },
  { month: 'Sep', revenue: 7930, orders: 5200 },
  { month: 'Oct', revenue: 8120, orders: 4900 },
  { month: 'Nov', revenue: 9430, orders: 5800 },
  { month: 'Dec', revenue: 10200, orders: 6100 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Monthly revenue and orders</p>
        </div>
        <select className="text-sm bg-gray-100 dark:bg-gray-700 border-0 rounded-lg px-3 py-1.5 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Last 12 months</option>
          <option>Last 6 months</option>
          <option>Last 30 days</option>
        </select>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
            <YAxis stroke="#9ca3af" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="#8b5cf6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorOrders)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
