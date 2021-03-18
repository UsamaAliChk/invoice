import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
export default function Main() {
    return (
        <div>
            <BrowserRouter>
    <Switch>
    
      {/* <Route path="/companyDetail" component={CompanyDetail}/> */}
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
      
    </Switch>
  
  </BrowserRouter>
        </div>
    )
}
