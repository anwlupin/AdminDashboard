import React from "react";
import { SiWebmoney } from "react-icons/si";
import {
  BsPeople,
  BsHandbag,
  BsCart3,
  BsTruck,
  BsPencilSquare,
  BsCalendar2Event,
  BsPaintBucket,
} from "react-icons/bs";

export const links = [
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
        icon: <BsCart3 />,
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
