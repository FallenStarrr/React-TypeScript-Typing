import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import Card, { CardVariant } from "./components/Card";
import { ITodo, IUser } from "./types/types";
import axios from 'axios'
import List from "./components/List";
import UserItem from "./components/UserItem.tsx";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample"; 
import {BrowserRouter, Route} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
 
function App() {

 
  return (
    <BrowserRouter>
         
              {/* <div>
                <NavLink to={'/users'}>Юзеры</NavLink>
                <NavLink to={'/todos'}>Дела</NavLink>
              </div> */}

              <div>
                      <Route path={'/users'}>
                              <UserPage />
                        </Route>
                        <Route path={'/todos'}>
                              <TodosPage />
                        </Route>
              </div>
     </BrowserRouter>
            


  );
}

export default App;
