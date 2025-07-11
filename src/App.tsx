import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Layout } from "./components/Layout";
import { Patients } from "./components/pages/Patients/Patients";
import { Doctors } from "./components/pages/Doctors/Doctors";
import { Recepcionists } from "./components/pages/Rrecepcionists/Recepcionists";
import { LayoutForm } from "./components/LayoutForm";
import { Login } from "./components/pages/Login/Login";
import { Signup } from "./components/pages/Signup/Signup";
import { Dates } from "./components/pages/Dates/Dates";
import { Hospitalizations } from "./components/pages/Hospitalizations/Hospitalizations";
import { Main } from "./components/pages/Main/Main";
import { MedicalSupplies } from "./components/pages/MedicalSupplies/MedicalSupplies";
import { Rooms } from "./components/pages/Rooms/Rooms";
import { Audit } from "./components/pages/Audit/Audit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route element={<LayoutForm />}>
          <Route path="/ingresar" element={<Login />}/>
          <Route path="/registro" element={<Signup />}/>
        </Route>

        <Route element={<Layout />}>
          <Route path="/pacientes" element={<Patients />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/doctores" element={<Doctors />}/>
          <Route path="/recepcionistas" element={<Recepcionists />}/>
          <Route path="/citas" element={<Dates />}/>
          <Route path="/hospitalizaciones" element={<Hospitalizations />}/>
          <Route path="/insumos-medicos" element={<MedicalSupplies />}/>
          <Route path="/habitaciones" element={<Rooms />}/>
          <Route path="/auditoria" element={<Audit />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
