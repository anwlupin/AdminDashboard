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
  BsCurrencyDollar,
  BsBoxSeam,
} from "react-icons/bs";
import {
  MdKeyboardArrowDown,
  MdOutlineSupervisorAccount,
  MdOutlinePointOfSale,
} from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { GoPrimitiveDot } from "react-icons/go";

export const colors = {
  badge: "#0DB0DD", // Battery Charged Blue
  buttonBlue: "#0DB0DD", // Battery Charged Blue
};

export const icons = {
  arrowDown: (attr) => <MdKeyboardArrowDown className={attr} />,
  dollarSign: (attr) => <BsCurrencyDollar className={attr} />,
  dot: (attr) => <GoPrimitiveDot className={attr} />,
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

export const earningData = {
  total: "98,765.43",
  budget: "76,543.21",
  expense: "12,345.67",
  stats: [
    {
      name: "Customers",
      icon: <MdOutlineSupervisorAccount />,
      style: {
        iconColor: "#03C9D7",
        iconBg: "#E5FAFB",
        pcColor: "red-600",
      },
      data: {
        amount: "39,354",
        percentage: "-4%",
      },
    },
    {
      name: "Products",
      icon: <BsBoxSeam />,
      style: {
        iconColor: "rgb(255, 244, 229)",
        iconBg: "rgb(254, 201, 15)",
        pcColor: "green-600",
      },
      data: {
        amount: "4,396",
        percentage: "+23%",
      },
    },
    {
      name: "Sales",
      icon: <MdOutlinePointOfSale />,
      style: {
        iconColor: "rgb(228, 106, 118)",
        iconBg: "rgb(255, 244, 229)",
        pcColor: "green-600",
      },
      data: {
        amount: "423,39",
        percentage: "+38%",
      },
    },
    {
      name: "Refund",
      icon: <RiRefund2Line />,
      style: {
        iconColor: "rgb(0, 194, 146)",
        iconBg: "rgb(235, 250, 242)",
        pcColor: "red-600",
      },
      data: {
        amount: "39,354",
        percentage: "-12%",
      },
    },
  ],
};

export const sparklineData = {
  id: "line-sparkline",
  type: "Line",
  valueType: "Numeric",
  width: "250px",
  height: "80px",
  lineWidth: 1,
  filLColor: "#0000FF", // Blue
  border: {
    color: "#0000FF", // Blue
    width: 2,
  },
  xName: "x",
  yName: "y",
  coordinates: [
    { x: 1, y: 2 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 5 },
    { x: 5, y: 10 },
  ],
  tooltipSettings: {
    visible: true,
    format: "${x} : data ${y}",
    trackLineSettings: { visible: true },
  },
};

export const barChartData = {
  id: "charts",
  width: "560px",
  height: "360px",
  chartArea: { border: { width: 0 } },
  primaryXAxis: {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    valueType: "Category",
  },
  primaryYAxis: {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}",
  },
  series: [
    {
      dataSource: [
        { x: "Jan", y: 88.0 },
        { x: "Feb", y: 99.0 },
        { x: "Mar", y: 100.0 },
        { x: "Apr", y: 111.1 },
        { x: "May", y: 122.2 },
        { x: "Jun", y: 133.3 },
        { x: "Jul", y: 144.4 },
        { x: "Aug", y: 155.5 },
        { x: "Sep", y: 166.6 },
        { x: "Oct", y: 177.7 },
        { x: "Nov", y: 188.8 },
        { x: "Dec", y: 199.9 },
      ],
      xName: "x",
      yName: "y",
      name: "Budget",
      type: "StackingColumn",
      background: "blue",
    },
    {
      dataSource: [
        { x: "Jan", y: 88.0 },
        { x: "Feb", y: 99.0 },
        { x: "Mar", y: 100.0 },
        { x: "Apr", y: 111.1 },
        { x: "May", y: 122.2 },
        { x: "Jun", y: 133.3 },
        { x: "Jul", y: 144.4 },
        { x: "Aug", y: 155.5 },
        { x: "Sep", y: 166.6 },
        { x: "Oct", y: 177.7 },
        { x: "Nov", y: 188.8 },
        { x: "Dec", y: 199.9 },
      ],
      xName: "x",
      yName: "y",
      name: "Expense",
      type: "StackingColumn",
      background: "red",
    },
  ],
  tooltip: { enable: true },
  legendSettings: { background: "white" },
};

export const dummy = {
  avatar: [
    "/assets/avatar1.jpg",
    "/assets/avatar2.jpg",
    "/assets/avatar3.jpg",
    "/assets/avatar4.jpg",
  ],
};
