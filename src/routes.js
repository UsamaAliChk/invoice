/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import CompanyDetail from "./components/Company/CompanyDetail";
import BigLoad from './components/BigLoad' 
const dashboardRoutes = [
 

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    show:true,
    layout: "/admin",
  },
 
  {
    path: "/user",
    name: "Company Detail",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Companies",
    icon: "nc-icon nc-notes",
    component: TableList,
    show:true,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "INVOICES",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "INVOICE PREVIEW",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "INVIOCE TEMPLATES",
    show:true,
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  
  {
    path: "/invoices",
    name: "INVOICES",
    show:true,
    icon: "fas fa-file-invoice-dollar",
    component: Icons,
    layout: "/admin",
  },
  {
    path:"/companyDetail",
    component:CompanyDetail
  }
];

export default dashboardRoutes;
