export const handleRolePermissions = (
  rol: UserRole
) : IconT[] => {
  // switch (rol) {
  //   case "admin":
      return [
        "Home",
        "Pacientes",
        "Doctores",
        "Recepcionistas",
        "Citas",
        "Hospitalizaciones",
        "Insumos Médicos",
        "Habitaciones",
        "Auditoría",
      ];
    // case "doctor":
    //   return ["mis pacientes", "mis citas", "hospitalizaciones", "perfil"];
    // case "receptionist":
    //   return [
    //     "pacientes",
    //     "doctores",
    //     "citas",
    //     "habitaciones",
    //     "hospitalizaciones",
    //   ];
    // case "patient":
    //   return [
    //     "mis citas",
    //     "historial de citas",
    //     "descargar reportes y comprobantes",
    //     "mis hospitalizaciones",
    //     "perfil",
    //   ];
  // }
};
