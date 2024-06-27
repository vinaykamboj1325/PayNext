import React, { Children, Suspense } from "react";
import { Navigate } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Outlet, createRoutesFromElements, redirect } from "react-router-dom";
import Loading from "./Components/Loading.jsx";
import Header from "./Components/Header.jsx";
import Leftbar from "./Components/Leftbar.jsx"
import Login from "./Components/Login.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Transactions from "./Components/Transactions.jsx";
import Complain from "./Components/Complain.jsx";
import Violation from "./Components/Violation.jsx";
import Settlement from "./Components/Settlement.jsx";
import Dispute from "./Components/Dispute.jsx";
import PassIssue from "./Components/PassIssue.jsx";
import Blacklist from "./Components/Blacklist.jsx";
import Report from "./Components/Report.jsx";

import './Styles/Login.scss';
import './Styles/Dashboard.scss';
import './Styles/Leftbar.scss';
import './Styles/Home.scss';
import './Styles/Loading.scss';
import './Styles/Transactions.scss';
import './Styles/Complain.scss';
import './Styles/Violation.scss';
import './Styles/Settlement.scss';
import './Styles/Dispute.scss';
import './Styles/PassIssue.scss';
import './Styles/Blacklist.scss';
import './Styles/Report.scss';


const MainLayout = () => (
  <>
    <Header/>
    <Leftbar />
    <Outlet />
  </>
);

const PrivateComponent =({children})=>{
  const value = localStorage.getItem("LoginId");
  console.log(value)
  if(!value){
    return <Navigate to="/" replace/>
  }
  return <>{children}</>;
};


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />

    <Route path="/arete" element={<><PrivateComponent><MainLayout /></PrivateComponent></>}>
      <Route path="dashboard" element={<><PrivateComponent><Dashboard/></PrivateComponent></>}/> 
        <Route path="transactions" element={<Transactions />} />
        <Route path="complain" element={<Complain />} />
        <Route path="violation" element={<Violation/>}/>
        <Route path="settlement" element={<Settlement/>}/>
        <Route path="dispute" element={<Dispute/>}/>
        <Route path="pass-issuance" element={<PassIssue/>}/>
        <Route path="blacklist" element={<Blacklist/>}/>
        <Route path="report/Schedule" element={<Report/>}/>
      </Route>

    </>
  )
);

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </>

);
