import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { useEffect, useRef, useState } from 'react';
import { doctor } from '../types/data';
import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CheckIcon } from '@heroicons/react/20/solid';

interface AppointmentFormProps {
  doctorsData: doctor[];
  hours: string[];
  days: string[];
}

const AppointmentForm: React.FC<AppointmentFormProps> = (props) => {
  const [selected, setSelected] = useState(props.doctorsData[0]);
  const [hour, setHour] = useState(props.hours[0]);
  const [day, setDay] = useState(props.days[0]);
  const [doctorQuery, setDoctorQuery] = useState('');
  const [dayQuery, setDayQuery] = useState('');
  const [hourQuery, setHourQuery] = useState('');
  const [doctorHover, setDoctorHover] = useState(false);
  const [hourHover, setHourHover] = useState(false);
  const [dayHover, setDayHover] = useState(false);

  const { doctorsData, hours, days } = props;

  const filteredDoctor =
    doctorQuery === ''
      ? doctorsData
      : doctorsData.filter((doctor) => {
          return doctor.name.toLowerCase().includes(doctorQuery.toLowerCase());
        });

  const filteredDay =
    dayQuery === ''
      ? days
      : days.filter((day) => {
          return day.toLowerCase().includes(dayQuery.toLowerCase());
        });

  const filteredHour =
    hourQuery === ''
      ? hours
      : hours.filter((hour) => {
          return hour.toLowerCase().includes(hourQuery.toLowerCase());
        });

  const doctorInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);
  const dayInputRef = useRef<HTMLInputElement>(null);

  const handleDoctorQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDoctorQuery(event.target.value);
  };

  const handleDayQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDayQuery(event.target.value);
  };

  const handleHourQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setHourQuery(event.target.value);
  };

  const doctorMouseEnter = () => {
    setDoctorHover(true);
  };
  const doctorMouseLeave = () => {
    setDoctorHover(false);
  };

  const hourMouseEnter = () => {
    setHourHover(true);
  };
  const hourMouseLeave = () => {
    setHourHover(false);
  };

  const dayMouseEnter = () => {
    setDayHover(true);
  };
  const dayMouseLeave = () => {
    setDayHover(false);
  };

  useEffect(() => {
    if (
      !doctorInputRef.current ||
      !dayInputRef.current ||
      !hourInputRef.current
    )
      return;

    doctorInputRef.current.focus();

    doctorInputRef.current.addEventListener('mouseenter', () => {
      doctorMouseEnter();
    });
    doctorInputRef.current.addEventListener('mouseleave', () => {
      doctorMouseLeave();
    });

    hourInputRef.current.addEventListener('mouseenter', () => {
      hourMouseEnter();
    });
    hourInputRef.current.addEventListener('mouseleave', () => {
      hourMouseLeave();
    });

    dayInputRef.current.addEventListener('mouseenter', () => {
      dayMouseEnter();
    });
    dayInputRef.current.addEventListener('mouseleave', () => {
      dayMouseLeave();
    });

    return () => {
      if (
        !doctorInputRef.current ||
        !dayInputRef.current ||
        !hourInputRef.current
      )
        return;

      doctorInputRef.current.addEventListener('mouseenter', () => {
        doctorMouseEnter();
      });
      doctorInputRef.current.addEventListener('mouseleave', () => {
        doctorMouseLeave();
      });

      hourInputRef.current.addEventListener('mouseenter', () => {
        hourMouseEnter();
      });
      hourInputRef.current.addEventListener('mouseleave', () => {
        hourMouseLeave();
      });

      dayInputRef.current.addEventListener('mouseenter', () => {
        dayMouseEnter();
      });
      dayInputRef.current.addEventListener('mouseleave', () => {
        dayMouseLeave();
      });
    };
  }, []);

  return (
    <div className='w-full bg-white px-28 py-16'>
      <div className='mb-5'>
        <h1>Doctor</h1>
        <Combobox
          value={selected}
          onChange={(value) => setSelected(value as doctor)}
          onClose={() => setDoctorQuery('')}
        >
          <div className='relative'>
            <ComboboxInput
              className={`w-full rounded-lg border-2 border-black py-1.5 pl-3 pr-8 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${doctorHover ? 'bg-sky-100' : 'bg-white/50'}`}
              ref={doctorInputRef}
              displayValue={(doctor: doctor) => doctor?.name}
              onChange={(event) => handleDoctorQueryChange(event)}
            />
            <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
              <ChevronDownIcon className='size-4 fill-black' />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            anchor='bottom'
            transition
            className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] empty:invisible data-[leave]:data-[closed]:opacity-0'
          >
            {filteredDoctor.map((doctor, idx) => (
              <ComboboxOption
                key={idx}
                value={doctor}
                className='group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10'
              >
                <CheckIcon className='invisible size-4 fill-black group-data-[selected]:visible' />
                <div className='text-sm/6 text-black'>
                  {doctor.name} --- {doctor.specialty}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
      <div className='mb-5 flex flex-row'>
        <div className='mr-2'>
          <h1>Hora</h1>
          <Combobox
            value={hour}
            onChange={(value) => setHour(value as string)}
            onClose={() => setHourQuery('')}
          >
            <div className='relative'>
              <ComboboxInput
                className={`w-full rounded-lg border-2 border-black py-1.5 pl-3 pr-8 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${hourHover ? 'bg-sky-100' : 'bg-white/50'}`}
                ref={hourInputRef}
                displayValue={(currentHour: string) => currentHour}
                onChange={(event) => handleHourQueryChange(event)}
              />
              <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                <ChevronDownIcon className='size-4 fill-black' />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor='bottom'
              transition
              className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] empty:invisible data-[leave]:data-[closed]:opacity-0'
            >
              {filteredHour.map((hour, idx) => (
                <ComboboxOption
                  key={idx}
                  value={hour}
                  className='group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10'
                >
                  <div className='text-sm/6 text-black'>{hour}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>
        <div>
          <h1>Día</h1>
          <Combobox
            value={day}
            onChange={(value) => setDay(value as string)}
            onClose={() => setDayQuery('')}
          >
            <div className='relative'>
              <ComboboxInput
                className={`w-full rounded-lg border-2 border-black py-1.5 pl-3 pr-8 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${dayHover ? 'bg-sky-100' : 'bg-white/50'}`}
                ref={dayInputRef}
                displayValue={(currentDay: string) => currentDay}
                onChange={(event) => handleDayQueryChange(event)}
              />
              <ComboboxButton className='group absolute inset-y-0 right-0 px-2.5'>
                <ChevronDownIcon className='size-4 fill-black' />
              </ComboboxButton>
            </div>

            <ComboboxOptions
              anchor='bottom'
              transition
              className='w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] empty:invisible data-[leave]:data-[closed]:opacity-0'
            >
              {filteredDay.map((day, idx) => (
                <ComboboxOption
                  key={idx}
                  value={day}
                  className='group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10'
                >
                  <CheckIcon className='invisible size-4 fill-black' />
                  <div className='text-sm/6 text-black'>{day}</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Combobox>
        </div>
      </div>
      <button
        className='rounded-lg bg-sky-700 p-3 font-bold text-white'
        onClick={() =>
          console.log(
            `Reserva de Hora con Doctor: ${selected?.name}
        Día: ${day}
        Hora: ${hour}`
          )
        }
      >
        Agendar Hora
      </button>
    </div>
  );
};

export default AppointmentForm;
