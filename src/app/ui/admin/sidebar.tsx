"use client";
import Link from "next/link";
import User from "./user";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import React from "react";
import {
  UserIcon,
  DashboardIcon,
  LogoutIcon,
  OrdersIcon,
  ProductsIcon,
  RevenueIcon,
  SettingsIcon,
  ReportIcon,
} from "../../public/index";
const sideBar = [
  {
    title: "Pages",
    list: [
      { name: "Dashboard", href: "/admin", icon: <DashboardIcon /> },
      { name: "Users", href: "/admin/users", icon: <UserIcon/>},
      { name: "Products", href: "/admin/products", icon: <ProductsIcon /> },
      { name: "Orders", href: "/admin/orders", icon: <OrdersIcon /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { name: "Revenue", href: "/admin/revenue", icon: <RevenueIcon /> },
      { name: "Reports", href: "/admin/reports", icon: <ReportIcon /> },
    ],
  },
  {
    title: "User",
    list: [
      { name: "Setting", href: "/admin/setting", icon: <SettingsIcon /> },
      { name: "Logout", href: "/admin/logout", icon: <LogoutIcon /> },
    ],
  },
];

function AdminSideBar() {
  const pathname = usePathname();
  return (
    <div className="flex h-screen w-full flex-col bg-sub-content px-2 text-text">
      <div className=" mt-2 flex items-center justify-center rounded-md border">
        <User />
      </div>
      <div>
        <ul>
          {sideBar.map((cat) => {
            return (
              <li key={cat.title}>
                <span className="text-sm italic">{cat.title}</span>
                <ul className="w">
                  {cat.list.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className={clsx("rounded-md pl-4", {
                          "bg-text pl-6 text-blue-600 transition-all duration-150 ":
                            pathname === item.href,
                        })}
                      >
                        <Link key={item.name} href={item.href}>
                          <span className="flex items-center">
                            <div className="mr-2 h-7 w-7">{item.icon}</div>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AdminSideBar;
