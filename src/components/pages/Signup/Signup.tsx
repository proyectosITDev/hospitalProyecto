import { useState, } from "react";

interface Credentials {
  name: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string

}
export const Signup = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handdleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials)
  }

  const handdleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      <div className="w-full flex  bg-blue-600  items-center">
        <div className="w-1/2 h-screen justify-center items-center hidden md:flex">
          <img 
          className="border-4 rounded-2xl border-white"
          src="https://cdn.prod.website-files.com/5e51c674258ffe10d286d30a/5e535ac39b55b0379854a1d8_peep-78.svg" alt="" />
        </div>
        <div className=" flex flex-col justify-center h-screen rounded-lg items-center p-2 w-full bg-white md:w-1/2 rounded-l-xl ">
          <div className="w-[80%] sm:w-1/2 text-4xl text-nowrap py-6">
            Registrarse
          </div>
          <div className="w-[80%] sm:w-1/2">
            <form onSubmit={handdleSubmit} className="w-full flex flex-col gap-1 ">
              <div className="flex flex-col lg:flex-row justify-between gap-1">
                <div>
                  <label htmlFor="fullname">Nombre:</label>
                  <input onChange={handdleChange} value={credentials.name} type="text" id="name" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Nombre completo" />
                </div>
                <div>
                  <label htmlFor="fullname">Apellido:</label>
                  <input onChange={handdleChange} value={credentials.lastName} type="text" id="lastName" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Apellido" />
                </div>
              </div>
              <label htmlFor="email">Correo electronico:</label>
              <input onChange={handdleChange} value={credentials.email} type="email" id="email" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Email" />

              <label htmlFor="password">Contraseña:</label>
              <input onChange={handdleChange} value={credentials.password} type="password" id="password" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Contraseña" />

              <label htmlFor="password">Confirmar contraseña:</label>
              <input onChange={handdleChange} value={credentials.confirmPassword} type="password" id="confirmPassword" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Contraseña" />

              <button type="submit" className="border p-2 rounded bg-blue-600 text-white hover:bg-blue-500 duration-200">Registrar</button>
            </form>
          </div>
        </div>
      </div>
    </>);
};