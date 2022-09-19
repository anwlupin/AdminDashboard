import React from "react";
import { SiWebmoney } from "react-icons/si";
import {
  BsPeople,
  BsHandbag,
  BsReceipt,
  BsTruck,
  BsPencilSquare,
  BsCalendar2Event,
  BsPaintBucket,
  BsCart3,
  BsChatLeft,
  BsBell,
} from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export const colors = {
  primary: "#003f5c",
  darkPrimary: "#fff",
  badge: "#0DB0DD",
};

export const icons = {
  arrowDown: (attr) => <MdKeyboardArrowDown className={attr} />,
};

export const navbarLinks = [
  {
    name: "cart",
    path: "/checkout/cart",
    icon: <BsCart3 />,
    color: colors.primary,
  },
  {
    name: "chat",
    path: "/chat",
    icon: <BsChatLeft />,
    color: colors.primary,
  },
  {
    name: "notifications",
    path: "/notifications",
    icon: <BsBell />,
    color: colors.primary,
  },
];

export const sidebarLinks = [
  {
    category: "Dashboard",
    list: [
      {
        name: "ecommerce",
        path: "/ecommerce",
        icon: <SiWebmoney />,
      },
    ],
  },
  {
    category: "Pages",
    list: [
      {
        name: "users",
        path: "/users",
        icon: <BsPeople />,
      },
      {
        name: "products",
        path: "/products",
        icon: <BsHandbag />,
      },
      {
        name: "orders",
        path: "/orders",
        icon: <BsReceipt />,
      },
      {
        name: "delivery",
        path: "/delivery",
        icon: <BsTruck />,
      },
    ],
  },
  {
    category: "Apps",
    list: [
      {
        name: "editor",
        path: "/apps/editor",
        icon: <BsPencilSquare />,
      },
      {
        name: "calendar",
        path: "/apps/calendar",
        icon: <BsCalendar2Event />,
      },
      {
        name: "color-picker",
        path: "/apps/color-picker",
        icon: <BsPaintBucket />,
      },
    ],
  },
];

export const dummy = {
  avatar: [
    "/assets/avatar1.jpg",
    "/assets/avatar2.jpg",
    "/assets/avatar3.jpg",
    "/assets/avatar4.jpg",
  ],
};
