import { useState } from "react";

export const NewPatient = () => {
  const [name, setName]=useState('');
  const [lastname, setLastname] = useState("");
  const [bornsDate, setBornsDate]=useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType]=useState("");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };

  return (
    <>
      <title>Agregar paciente</title>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-sm p-6 flex flex-col gap-4"
      >
        <h2 className="text-xl font-bold">Agregar nuevo paciente</h2>

        <label htmlFor="name" className="flex justify-between items-center">
          Nombre:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            className="border border-stone-200 py-1 px-2 ml-4"
            autoComplete="off"
          />
        </label>

        <label htmlFor="lastname" className="flex justify-between items-center">
          Apellido:
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e)=>setLastname(e.target.value)}
            className="border border-stone-200 py-1 px-2 ml-4"
            autoComplete="off"
          />
        </label>

        <label
          htmlFor="bornsdate"
          className="flex justify-between items-center"
        >
          Fecha de nacimiento:
          <input
            type="date"
            id="bornsdate"
            value={bornsDate}
            onChange={(e)=>setBornsDate(e.target.value)}
            className="border border-stone-200 py-1 px-2 ml-4"
            autoComplete="off"
          />
        </label>

        <label htmlFor="phone" className="flex justify-between items-center">
          Teléfono:
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            className="border border-stone-200 py-1 px-2 ml-4"
            autoComplete="off"
          />
        </label>

        <label
          htmlFor="bloodtype"
          className="flex justify-between items-center"
        >
          Tipo de sangre:
          <select
            id="bloodtype"
            className="p-2 border border-stone-200"
            value={bloodType}
            onChange={(e)=>setBloodType(e.target.value)}
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </label>

        <input
          type="submit"
          value="Agregar"
          className="py-2 bg-sky-700 text-white font-bold"
        />
      </form>
    </>
  );
};
