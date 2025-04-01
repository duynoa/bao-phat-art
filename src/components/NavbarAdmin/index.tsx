"use client";

import {
  AccountCircle as AccountIcon,
  NotificationsNone as NotificationIcon,
} from "@mui/icons-material";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-600">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="rounded-full bg-gray-100 p-2">
              <span className="sr-only">Notifications</span>
              <NotificationIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="rounded-full bg-gray-100 p-2">
              <span className="sr-only">Profile</span>
              <AccountIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}