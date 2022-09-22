import React from "react";
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
import { GoPrimitiveDot } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import {
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineMinusCircle,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import {
  MdKeyboardArrowDown,
  MdOutlineSupervisorAccount,
  MdOutlinePointOfSale,
  MdOutlinePending,
  MdOutlineCheckCircleOutline,
  MdOutlineCancel,
} from "react-icons/md";
import { RiRefund2Line } from "react-icons/ri";
import { SiWebmoney } from "react-icons/si";

//* JSX
const gridOrderImage = (props) => (
  <div className="flex">
    {props.productImage.map((item, index) => (
      <img
        key={index}
        className="rounded-xl h-20 md:ml-3"
        src={item}
        alt="order-item"
      />
    ))}
  </div>
);

const gridOrderStatus = (props) => {
  const status = {
    pending: {
      color: "#FFB300",
      icon: <HiOutlineClock />,
    },
    shipped: {
      color: "#52D600",
      icon: <HiOutlineTruck />,
    },
    processing: {
      color: "#A1D600",
      icon: <MdOutlinePending />,
    },
    onHold: {
      color: "#595A58",
      icon: <HiOutlineMinusCircle />,
    },
    completed: {
      color: "#00D5E8",
      icon: <MdOutlineCheckCircleOutline />,
    },
    cancelled: {
      color: "#FF0000",
      icon: <MdOutlineCancel />,
    },
    refunded: {
      color: "#B8A898",
      icon: <RiRefund2Line />,
    },
    failed: {
      color: "#FFF42B",
      icon: <HiOutlineExclamationCircle />,
    },
  };

  return (
    <div
      className="flex justify-center items-center gap-1 border-solid border-2 rounded-full p-1"
      style={{
        color: status[props.status].color,
        borderColor: status[props.status].color,
      }}
    >
      <span className="text-lg">{status[props.status].icon}</span>
      <span className="capitalize">{props.status}</span>
    </div>
  );
};

const gridUserProfile = (props) => (
  <div className="flex items-center gap-2">
    <img className="rounded-full w-10 h-10" src={props.image} alt="user" />
    <p>{`${props.firstName} ${props.lastName}`}</p>
  </div>
);

const gridUserAddress = (props) => (
  <div className="flex items-center gap-2">
    <GrLocation />
    <span>{`${props.address.address} ${props.address.city}, ${props.address.state} ${props.address.postalCode}`}</span>
  </div>
);

const gridProductImage = (props) => (
  <div className="flex justify-center">
    <img className="rounded-xl h-20" src={props.thumbnail} alt="user" />
  </div>
);
//* END OF JSX

//* ELEMENTS
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
//* END OF ELEMENTS

//* CONFIG
export const earningConfig = {
  stats: [
    {
      name: "customers",
      icon: <MdOutlineSupervisorAccount />,
      style: {
        iconColor: "#03C9D7",
        iconBg: "#E5FAFB",
        pcColor: "red-600",
      },
    },
    {
      name: "products",
      icon: <BsBoxSeam />,
      style: {
        iconColor: "rgb(255, 244, 229)",
        iconBg: "rgb(254, 201, 15)",
        pcColor: "green-600",
      },
    },
    {
      name: "sales",
      icon: <MdOutlinePointOfSale />,
      style: {
        iconColor: "rgb(228, 106, 118)",
        iconBg: "rgb(255, 244, 229)",
        pcColor: "green-600",
      },
    },
    {
      name: "refund",
      icon: <RiRefund2Line />,
      style: {
        iconColor: "rgb(0, 194, 146)",
        iconBg: "rgb(235, 250, 242)",
        pcColor: "red-600",
      },
    },
  ],
};

export const sparklineConfig = {
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
  tooltipSettings: {
    visible: true,
    // eslint-disable-next-line no-template-curly-in-string
    format: "${x} : data ${y}",
    trackLineSettings: { visible: true },
  },
};

export const barChartConfig = {
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
  tooltip: { enable: true },
  legendSettings: { background: "white" },
};

export const ordersConfig = {
  grid: [
    {
      width: "50",
      textAlign: "Center",
      headerText: "ID",
      field: "id",
    },
    {
      width: "250",
      textAlign: "Center",
      headerText: "Items",
      template: gridOrderImage,
    },
    {
      width: "90",
      textAlign: "Center",
      headerText: "Customer Name",
      field: "customerName",
    },
    {
      width: "60",
      textAlign: "Center",
      headerText: "Status",
      template: gridOrderStatus,
    },
    {
      width: "60",
      textAlign: "Center",
      format: "C2",
      editType: "numericedit",
      field: "total",
      headerText: "Total Amount",
    },
    {
      width: "90",
      textAlign: "Center",
      format: "C2",
      editType: "numericedit",
      field: "discountedTotal",
      headerText: "Discounted Amount",
    },
  ],
};

export const usersConfig = {
  grid: [
    { type: "checkbox", width: "20" },
    {
      width: "90",
      textAlign: "Center",
      headerText: "Users",
      template: gridUserProfile,
    },
    { width: "0", textAlign: "Center", headerText: "", field: "Name" },
    {
      width: "100",
      textAlign: "Left",
      headerText: "Profession",
      field: "company.title",
    },
    {
      width: "110",
      textAlign: "Left",
      headerText: "Company",
      field: "company.name",
    },
    {
      width: "70",
      textAlign: "Center",
      headerText: "Birth date",
      field: "birthDate",
    },
    {
      width: "90",
      textAlign: "Left",
      headerText: "Email Address",
      field: "email",
    },
    {
      width: "170",
      textAlign: "Center",
      headerText: "Address",
      template: gridUserAddress,
    },
  ],
};

export const productsConfig = {
  grid: [
    { type: "checkbox", width: "20" },
    {
      width: "100",
      textAlign: "Center",
      headerText: "Image",
      template: gridProductImage,
    },
    {
      width: "90",
      textAlign: "Center",
      headerText: "Product Name",
      field: "title",
    },
    {
      width: "50",
      textAlign: "Center",
      headerText: "Rating",
      field: "rating",
    },
    {
      width: "50",
      textAlign: "Center",
      headerText: "Price",
      field: "price",
    },
    {
      width: "50",
      textAlign: "Center",
      headerText: "Discount",
      field: "discountPercentage",
    },
    {
      width: "50",
      textAlign: "Center",
      headerText: "Stock",
      field: "stock",
    },
    {
      width: "90",
      textAlign: "Center",
      headerText: "Brand",
      field: "brand",
    },
  ],
};
//* END OF CONFIG

// fetch("https://dummyjson.com/users")
//   .then((res) => res.json())
//   .then(JSON.stringify)
//   .then(console.log);
