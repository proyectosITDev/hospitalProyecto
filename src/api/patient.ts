// const url = `${import.meta.env.SERVER_URL}/api/patient`;

export const addNewPatient = async ({
  name,
  lastname,
  bornDate,
  phone,
  bloodType,
}: Patient) => {
  try {
    const username = `${name.toUpperCase()}_${lastname.toUpperCase()}_${phone.slice(-5)}`.replaceAll(' ','_')
    console.log({ username, name, lastname, bornDate, phone, bloodType })
    // const data = await fetch(url, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username, name, lastname, bornDate, phone, bloodType }),
    // });
    // const json = await data.json();
    // return json;
  } catch (error) {
    console.log(error);
  }
};
