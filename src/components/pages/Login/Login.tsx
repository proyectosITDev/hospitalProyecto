// import {useState} from 'react'

export const Login = () => {
  // const []=useState();
  // const [state,setState]=useState();
  // const [state,setState]=useState();
  // const [state,setState]=useState();

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  return (
    <>
      <title>Ingresar</title>
      <form onSubmit={handleSubmit} className="flex flex-col bg-white shadow-sm  rounded-lg p-12 gap-1">
        <label htmlFor="username"> Nombre de usuario:</label>
          <input type="text" id="username" className="border border-stone-300 mb-4 p-2 w-[25ch]" placeholder="NOMBRE_APELLIDO_12345"/>
        <label htmlFor="password"> Contraseña:
        </label>
          <input type="password" id="password" className="border border-stone-300 mb-4 p-2 " placeholder="********"/>
        <input type="submit" value="Ingresar" className="bg-blue-600 text-white font-medium py-2 cursor-pointer hover:bg-blue-500"/>
      </form>
    </>
  );
};
