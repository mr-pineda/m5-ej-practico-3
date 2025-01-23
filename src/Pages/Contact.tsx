import { useState, useEffect } from "react";
import { obtenerdoctorInfo } from "../scripts/api";
import AppointmentForm from "../components/AppointmentForm";
import { doctor } from "../types/data";

const hours = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
];

const days = ["Lunes", "Martes", "Míercoles", "Jueves", "Viernes"];

const Contact = () => {
  console.log("Contact page");
  const [doctorsData, setDoctorsData] = useState<doctor[]>([]); //Estado para los datos de los Doctores

  useEffect(() => {
    const fetchDoctorsData = async () => {
      const data = await obtenerdoctorInfo(); //Llama a la función de la API simulada
      setDoctorsData(data); //Actualiza el estado con los datos obtenidos
    };

    fetchDoctorsData(); //Ejecuta la función al montar el componente
  }, []); // El userEffetc se ejecuta solo una vez cuando el componente se monta

  return (
    <>
      <div className="w-full bg-sky-200 px-28 py-16">
        <h1 className="mb-10 text-center text-3xl font-bold text-black">
          Agenda tu hora
        </h1>
        <p className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
          temporibus provident nostrum eligendi deserunt illum perspiciatis
          eveniet officia quis sequi, quos aperiam minus ipsam asperiores itaque
          nam minima voluptate animi velit pariatur cum. Impedit, est eveniet
          fugit facilis in nesciunt? Velit voluptate optio, rerum quae ratione
          est. Illum, natus!
        </p>
      </div>
      <div className="w-full bg-white px-28 py-16">
        <AppointmentForm doctorsData={doctorsData} days={days} hours={hours} />
      </div>
    </>
  );
};

export default Contact;
