export const handleRolePermissions = (
  rol: UserRole
) : string[] => {
  switch (rol) {
    case "admin":
      return [
        "pacientes",
        "doctores",
        "recepcionista",
        "citas",
        "hospitalizaciones",
        "insumos médicos",
        "habitaciones",
        "auditoría",
      ];
    case "doctor":
      return ["mis pacientes", "mis citas", "hospitalizaciones", "perfil"];
    case "receptionist":
      return [
        "pacientes",
        "doctores",
        "citas",
        "habitaciones",
        "hospitalizaciones",
      ];
    case "patient":
      return [
        "mis citas",
        "historial de citas",
        "descargar reportes y comprobantes",
        "mis hospitalizaciones",
        "perfil",
      ];
  }
};
