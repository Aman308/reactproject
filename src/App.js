import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* Adding props from Navbar.js to change title and about accordingly */}
      {/* <BrowserRouter> */}
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
         <Alert alert={alert} />
         <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
         {/* <Routes> */}
         {/* <Route exact path="/about" element={<About />}></Route> */}
            {/* <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
             }
            /> */}
         {/* </Routes> */}
        </div>
        {/* </BrowserRouter> */}
    </>
  );
}

export default App;
