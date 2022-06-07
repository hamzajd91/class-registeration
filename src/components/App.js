import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./common/Header";
import Body from "./common/Body";
import TeacherRegisterarion from "./forms/TeacherRegisteration";
import ClassRegisteration from "./forms/ClassRegisteration";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Header />
      <Body>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/teacher-registeration"
            element={<TeacherRegisterarion />}
          />
          <Route
            exact
            path="/class-registeration"
            element={<ClassRegisteration />}
          />
        </Routes>
      </Body>
    </Router>
  );
};

export default App;
