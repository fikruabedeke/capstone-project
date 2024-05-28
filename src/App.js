import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Home from "./Home.js";
import CreateAccount from "./CreateAccount.js";
import Login from "./Login.js";
import Deposit from "./Deposit.js";
import Balance from "./Balance.js";
import Withdraw from "./Withdraw.js";
import AllData from "./Alldata.js";
import UserContex from "./Context.js";
import NoPage from './NoPage.js'

function Bank() {
  return (
    <UserContex.Provider value={{users:[{name:"Fikru", email:"fikrubedeke@gmail.com", passcode:"fikru980", balance:100}]}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/create" element={<CreateAccount/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/deposit" element={<Deposit/>}/>
          <Route path="/balance" element={<Balance/>} />
          <Route path="/withdraw" element={<Withdraw/>}/>
          <Route path="/alldata" element={<AllData/>} />
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContex.Provider>
  );
}
export default Bank;
