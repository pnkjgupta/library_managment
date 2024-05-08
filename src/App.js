import React from "react";
import {Route,Routes} from "react-router-dom";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";
import Reports from "./pages/Reports";
import Transactions from "./pages/Transactions";
import AddMembership from "./pages/AddMembership";
import UpdateMembership from "./pages/UpdateMembership";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<UserRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/add-membership" element={<AddMembership />} />
        <Route path="/update-membership" element={<UpdateMembership />} />
      </Routes>
    </div>
  );
}

export default App;
