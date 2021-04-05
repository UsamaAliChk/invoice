import AdminLayout from "layouts/Admin.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {

  return (
    <div className="App">
        
         <BrowserRouter>
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </BrowserRouter>         
    </div>
  );
}

export default App;
