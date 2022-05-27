import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TAppBar from "../COMPONENTS/AppBar";

import ContactUs from "./ContactUs";
import MainPage from "./MainPage";
import Login from "./Login";
import ProducerProfile from "./ProducerProfile";

import UploadButtons from "../COMPONENTS/UploadButton";
import SignUp from "./SignUp";
import ContactForm from "./ContactUs";
import Producers from "./Producers";
import FoodValue from "./FoodValue";
import ProducerAccount from "./ProducerAccount";

export default function RouterPage() {
  return (
    <Router>
      <div>
      <TAppBar/>
       
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route> 
          <Route exact path="/Anasayfa">
            <MainPage />
          </Route>
          <Route exact path="/kullanıcı kayıt">
            <Login />
          </Route>
          <Route exact path="/kullanıcı giriş">
            <SignUp />
          </Route>
          <Route exact path="/üretici kayıt">
            <SignUp />
          </Route>
          <Route exact path="/üretici giriş">
            <Login />
          </Route>
          <Route exact path="/BizeUlaşın">
            <ContactUs />
          </Route>
          <Route exact path="/Üreticiler">
            <Producers />
          </Route>
          <Route exact path="/Besin Değerleri">
            <FoodValue />
          </Route>
          <Route exact path="/üreticiProfil">
            <ProducerProfile />
          </Route>
          <Route exact path="/bizeUlaşın">
            <ContactForm/>
          </Route>
          <Route exact path="/üreticiHesabı">
            <ProducerAccount />
          </Route>
          
          <Route exact path="/deneme">
            <UploadButtons/>
          </Route>
        

        </Switch>
        
      </div>
    </Router>
    
  );
}


//<Footer/>