import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Layout } from "./components/Layout";
import { NewPatient } from "./components/pages/NewPatient";
import { Patients } from "./components/pages/Patients";
import { Doctors } from "./components/pages/Doctors";
import { Staff } from "./components/pages/Staff";
import { Specialities } from "./components/pages/Specialities";
import { LayoutForm } from "./components/LayoutForm";
import { Login } from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<LayoutForm />}>
          <Route path="/ingresar" element={<Login />}/>
        </Route>

        <Route element={<Layout />}>
          <Route path="/nuevo-paciente" element={<NewPatient />}/>
          <Route path="/pacientes" element={<Patients />}/>
          <Route path="/medicos" element={<Doctors />}/>
          <Route path="/personal" element={<Staff />}/>
          <Route path="/especialidades" element={<Specialities />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
