import { Link } from "react-router-dom";

export const Home  = () => {
  return (<div className="flex flex-col p-16">
    <h1 className="text-2xl">Rutas actuales</h1>
    <Link to={'/ingresar'} className="text-blue-600 hover:text-blue-400 font-medium">ingresar</Link>
    <Link to={'/registro'} className="text-blue-600 hover:text-blue-400 font-medium">Registro</Link>
    <Link to={'/pacientes'} className="text-blue-600 hover:text-blue-400 font-medium">pacientes</Link>
    <Link to={'/medicos'} className="text-blue-600 hover:text-blue-400 font-medium">medicos</Link>
    <Link to={'/nuevo-paciente'} className="text-blue-600 hover:text-blue-400 font-medium">nuevo-paciente</Link>
    <Link to={'/personal'} className="text-blue-600 hover:text-blue-400 font-medium">personal</Link>
    <Link to={'/especialidades'} className="text-blue-600 hover:text-blue-400 font-medium">especialidades</Link>
  </div>);
};