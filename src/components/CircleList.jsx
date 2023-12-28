// import {Check} from '../assets'

import Circle from "../components/Circle";

const CircleList = () => {
  return (
    <div>
      <div className="relative z-10 grid w-full list-none grid-cols-2 gap-12 px-6 py-14 md:gap-14 lg:gap-32 lg:py-14 ">
        <div className="ms-auto">
          <Circle name='Stimulation Ovarienne' textColor='text-neutral-100'></Circle>
          <Circle name="Insermination Intra Uterine" textColor='text-neutral-100'></Circle>
          <Circle name="Insermination Intra Uterine" textColor='text-neutral-100'></Circle>
          <Circle name="Insermination Intra Uterine" textColor='text-neutral-100'></Circle>
          <Circle name="Don D&apos;ovocytes" textColor='text-neutral-100'></Circle>
          <Circle name="Don D&apos;ovocytes" textColor='text-neutral-100'></Circle>
          <Circle name="Don D&apos;ovocytes" textColor='text-neutral-100'></Circle>
        </div>
        <div className="me-auto">
          <Circle name="Don De Sperme" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
          <Circle name="Accueil D&apos;embryons" textColor='text-neutral-100'></Circle>
        </div>
      </div>
    </div>
  );
};

export default CircleList;
