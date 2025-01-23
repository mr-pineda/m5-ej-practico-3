export type doctor = {
  name: string;
  specialty: string;
  description: string;
  years: number;
  services: string[];
};

export type setState<T> = React.Dispatch<React.SetStateAction<T>>;
