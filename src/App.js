import { useState } from 'react';
import './App.scss';
import { Sidebar } from "./components/Sidebar";

const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(
    window.innerWidth > 1100 ? true : false
  );
  return (
    <div className="App__personal-account-container">
      <Sidebar sidebarIsOpen={sidebarIsOpen} toggleOpen={setSidebarIsOpen} />
      <div
        id="content-wrapper"
        className="App__personalaccount-wrapper non-auth"
      >
        
      </div>
    </div>
  );
};


export default App;
