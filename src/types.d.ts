type UserRole =  "admin" | "patient" | "doctor" | "receptionist";

type User = {
    username: string,
    name:string,
    lastname:string,
    bornDate:string,
    phone:string,
    bloodType:string,
    role: UserRole,
}

type IconT = "Home" | "Doctores" | "Pacientes" | "Recepcionistas" | "Citas" | "Hospitalizaciones" | "Insumos Médicos" | "Habitaciones" | "Auditoría" | "Salir"; 