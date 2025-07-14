import {useState} from 'react'

interface Credentials {
  email: string,
  password: string,
}

export const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState<Credentials>({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginCredentials)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({ ...loginCredentials, [e.target.id]: e.target.value });
  };
  
  return (
    <>
      <div className=" flex flex-col justify-center h-9/10  rounded-lg items-center p-2 w-full bg-white md:w-1/2 rounded-l-xl ">
          <div className="w-[80%] sm:w-1/2 text-4xl text-center text-nowrap py-6">
            Ingresar
          </div>
          <div className="w-[80%] sm:w-1/2">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-1 ">
              
              <label htmlFor="email">Email:</label>
              <input onChange={handleChange} value={loginCredentials.email} type="email" id="email" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Email" />

              <label htmlFor="password">Contraseña:</label>
              <input onChange={handleChange} value={loginCredentials.password} type="password" id="password" className="border border-[#EAEFEF] mb-4 p-2 w-full 0 rounded outline-none bg-[#EAEFEF] hover:border-gray-300 focus:border-gray-400 duration-200" placeholder="Contraseña" />

              <button type="submit" className="border p-2 rounded bg-blue-600 text-white hover:bg-blue-500 duration-200">Ingresar</button>
            </form>
          </div>
        </div>
    </>
  )
};
