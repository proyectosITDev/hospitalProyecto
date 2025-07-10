import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Layout } from "./components/Layout";
import { Patients } from "./components/pages/Patients/Patients";
import { Doctors } from "./components/pages/Doctors/Doctors";
import { Recepcionists } from "./components/pages/Rrecepcionists/Recepcionists";
import { LayoutForm } from "./components/LayoutForm";
import { Login } from "./components/pages/Login/Login";
import { Signup } from "./components/pages/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<LayoutForm />}>
          <Route path="/ingresar" element={<Login />}/>
          <Route path="/registro" element={<Signup />}/>
        </Route>

        <Route element={<Layout />}>
          <Route path="/pacientes" element={<Patients />}/>
          <Route path="/medicos" element={<Doctors />}/>
          <Route path="/personal" element={<Recepcionists />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
