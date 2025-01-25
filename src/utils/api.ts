import axios from 'axios';
import { doctor, user } from '../types/data';

const api = axios.create({
  timeout: 1000,
});

export const getDoctorData = async () => {
  try {
    const res = await api.get<doctor[]>('/data/doctors.json');
    return res.data;
  } catch (error) {
    // If status is out of range of 2xx axios will throw an error
    console.error('ERROR:', error);
    return [];
  }
};

export const login = async (user: string, password: string) => {
  try {
    const res = await api.get<user[]>('/data/users.json');
    const users = res.data;
    const valid_user = users.find((u) => {
      return u.name === user && u.password === password;
    });
    if (valid_user === undefined) {
      // console.error("ERROR: Usuario o contraseña incorrectos");
      return null;
    }
    return valid_user;
  } catch (error) {
    // If status is out of range of 2xx axios will throw an error
    console.error('ERROR:', error);
    return null;
  }
};
