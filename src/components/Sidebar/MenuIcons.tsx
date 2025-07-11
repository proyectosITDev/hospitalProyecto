import type { JSX } from "react";
import { HomeSVG } from "../../assets/svg/HomeSVG";
import { DoctorSVG } from "../../assets/svg/DoctorSVG";
import { PatientsSVG } from "../../assets/svg/PatientsSVG";
import { RecepcionistsSVG } from "../../assets/svg/RecepcionistsSVG";
import { DatesSVG } from "../../assets/svg/DatesSVG";
import { HospitalizationsSVG } from "../../assets/svg/HospitalizationsSVG";
import { MedicalSuppliesSVG } from "../../assets/svg/MedicalSuppliesSVG";
import { RoomsSVG } from "../../assets/svg/RoomsSVG";
import { AuditSVG } from "../../assets/svg/AuditSVG";
import { LogoutSVG } from "../../assets/svg/LogoutSVG";

const Icons: Record<IconT, () => JSX.Element> = {
  "Home": HomeSVG,
  "Doctores": DoctorSVG,
  "Pacientes": PatientsSVG,
  "Recepcionistas": RecepcionistsSVG,
  "Citas": DatesSVG,
  "Hospitalizaciones": HospitalizationsSVG,
  "Insumos Médicos": MedicalSuppliesSVG,
  "Habitaciones": RoomsSVG,
  "Auditoría": AuditSVG,
  "Salir": LogoutSVG
};

export const MenuIcons = ({ Icon }: { Icon: IconT }) => {
  const GetIcon = (i: IconT): JSX.Element => {
    return Icons[i]();
  };

  return <>{GetIcon(Icon)}</>;
};
