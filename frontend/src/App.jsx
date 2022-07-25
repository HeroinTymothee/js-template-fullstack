import { useState } from "react";
import Home from "@pages/Home";
import UserContext from "@contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@styles/App.scss";

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <UserContext.Provider value={(user, setUser)}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
