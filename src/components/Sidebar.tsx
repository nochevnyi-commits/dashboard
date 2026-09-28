import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  Package,
  CreditCard,
  Bell,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: ShoppingCart, label: 'Orders', badge: 12 },
  { icon: Package, label: 'Products' },
  { icon: Users, label: 'Customers' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: CreditCard, label: 'Billing' },
  { icon: Bell, label: 'Notifications', badge: 3 },
];

const bottomItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help Center' },
  { icon: LogOut, label: 'Log Out' },
];

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transition-all duration-300 flex flex-col ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">D</span>
        </div>
        {isOpen && (
          <span className="ml-3 font-bold text-lg text-gray-800 dark:text-white">
            DashBoard
          </span>
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && (
              <>
                <span className="ml-3">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Items */}
      <div className="border-t border-gray-200 dark:border-gray-700 py-4 px-2 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {isOpen && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}
