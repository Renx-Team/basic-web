'use client';

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const pathname = usePathname();

  const notifications = [
    {
      id: 1,
      title: "New Bot Purchase",
      message: "Music Bot Pro has been successfully purchased",
      time: "2 hours ago",
      type: "success",
      icon: "mdi:check-circle",
      read: false,
    },
    {
      id: 2,
      title: "Server Added",
      message: "New Discord server has been connected",
      time: "5 hours ago",
      type: "info",
      icon: "mdi:server-plus",
      read: false,
    },
    {
      id: 3,
      title: "Order Update",
      message: "Custom bot order #4567 is in progress",
      time: "1 day ago",
      type: "warning",
      icon: "mdi:clock-outline",
      read: true,
    },
    {
      id: 4,
      title: "Bot Updated",
      message: "Moderation Bot v2.1 is now available",
      time: "2 days ago",
      type: "info",
      icon: "mdi:update",
      read: true,
    },
    {
      id: 5,
      title: "Payment Received",
      message: "Payment of $49 has been processed",
      time: "3 days ago",
      type: "success",
      icon: "mdi:currency-usd",
      read: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const menuItems = [
    { icon: "mdi:view-dashboard", label: "Dashboard", href: "/dashboard" },
    { icon: "mdi:robot", label: "My Bots", href: "/dashboard/bots" },
    { icon: "mdi:server", label: "Servers", href: "/dashboard/servers" },
    { icon: "mdi:shopping-cart", label: "Purchases", href: "/dashboard/purchases" },
    { icon: "mdi:code", label: "Custom Orders", href: "/dashboard/orders" },
    { icon: "mdi:credit-card", label: "Billing", href: "/dashboard/billing" },
    { icon: "mdi:cog", label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 bg-black/90 backdrop-blur-xl border-r border-white/10
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Logo.png"
                alt="Basic Service Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">Basic Service</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <Icon icon="mdi:close" width={24} height={24} />
            </button>
          </div>

          {/* User Section - Moved to Top */}
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-br from-[#5865F2]/20 to-[#5865F2]/10 border border-[#5865F2]/30 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5865F2] to-[#4752C4] flex items-center justify-center shadow-lg shadow-[#5865F2]/30">
                <span className="text-base font-bold text-white">M</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">Mousa</p>
                <p className="text-xs text-gray-300 truncate">@0pese</p>
                <p className="text-xs text-gray-400 truncate mt-0.5">Mousa@avex.gg</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                    isActive
                      ? "bg-[#5865F2]/20 text-[#5865F2] border border-[#5865F2]/30"
                      : "text-gray-300 hover:bg-white/5 hover:text-[#5865F2]"
                  }`}
                >
                  <Icon 
                    icon={item.icon} 
                    width={20} 
                    height={20} 
                    className={isActive ? "text-[#5865F2]" : "group-hover:text-[#5865F2]"} 
                  />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="relative z-30 flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/30 backdrop-blur-xl">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <Icon icon="mdi:menu" width={24} height={24} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            {/* Notifications Button */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon icon="mdi:bell-outline" width={20} height={20} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#5865F2] rounded-full animate-pulse" />
                )}
              </button>

              {/* Notifications Popup */}
              {notificationsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-[100]"
                    onClick={() => setNotificationsOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-[101] max-h-[500px] flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                      <h3 className="text-lg font-semibold text-white">Notifications</h3>
                      <div className="flex items-center gap-2">
                        {unreadCount > 0 && (
                          <span className="px-2 py-1 text-xs font-semibold bg-[#5865F2] text-white rounded-full">
                            {unreadCount} new
                          </span>
                        )}
                        <button
                          onClick={() => setNotificationsOpen(false)}
                          className="p-1 text-gray-400 hover:text-white transition-colors"
                        >
                          <Icon icon="mdi:close" width={20} height={20} />
                        </button>
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto flex-1">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center">
                          <Icon icon="mdi:bell-off" width={48} height={48} className="text-gray-500 mx-auto mb-3" />
                          <p className="text-gray-400 text-sm">No notifications</p>
                        </div>
                      ) : (
                        <div className="divide-y divide-white/5">
                          {notifications.map((notification) => {
                            const iconColors = {
                              success: {
                                text: "text-green-400",
                                bg: "bg-green-400/10",
                                glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
                                gradient: "from-green-400/20 to-green-400/5",
                              },
                              info: {
                                text: "text-blue-400",
                                bg: "bg-blue-400/10",
                                glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
                                gradient: "from-blue-400/20 to-blue-400/5",
                              },
                              warning: {
                                text: "text-yellow-400",
                                bg: "bg-yellow-400/10",
                                glow: "shadow-[0_0_15px_rgba(250,204,21,0.3)]",
                                gradient: "from-yellow-400/20 to-yellow-400/5",
                              },
                              error: {
                                text: "text-red-400",
                                bg: "bg-red-400/10",
                                glow: "shadow-[0_0_15px_rgba(239,68,68,0.3)]",
                                gradient: "from-red-400/20 to-red-400/5",
                              },
                            };
                            
                            const colorScheme = iconColors[notification.type as keyof typeof iconColors] || iconColors.info;
                            
                            return (
                              <div
                                key={notification.id}
                                className={`p-4 hover:bg-white/5 transition-colors cursor-pointer ${
                                  !notification.read ? "bg-[#5865F2]/5" : ""
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`relative p-2 rounded-lg bg-gradient-to-br ${colorScheme.gradient} ${colorScheme.glow} border border-white/10`}>
                                    {/* Glow Effect */}
                                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${colorScheme.gradient} opacity-50 blur-sm`} />
                                    <Icon
                                      icon={notification.icon}
                                      width={20}
                                      height={20}
                                      className={`relative z-10 ${colorScheme.text}`}
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2 mb-1">
                                      <h4 className="text-sm font-semibold text-white">
                                        {notification.title}
                                      </h4>
                                      {!notification.read && (
                                        <span className="w-2 h-2 bg-[#5865F2] rounded-full mt-1 flex-shrink-0" />
                                      )}
                                    </div>
                                    <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                                      {notification.message}
                                    </p>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {notifications.length > 0 && (
                      <div className="p-3 border-t border-white/10">
                        <button className="w-full px-4 py-2 text-sm text-[#5865F2] hover:bg-[#5865F2]/10 rounded-lg transition-colors">
                          Mark all as read
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            <Link
              href="/"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Back to Site
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
