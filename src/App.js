import React from "react";
import './App.scss';
import "./Components/Header/Header"
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";
function App() {
  return (
    <div className="App">
        <Header/>
        <div className="App__body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div> 

    </div>
  );
}

export default App;
