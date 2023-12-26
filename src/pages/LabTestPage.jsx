/* eslint-disable react/jsx-no-comment-textnodes */
// Labtest.js
import { useState } from 'react';
import React from 'react';
import Button from '../components/Button';
import Inputbox from '../components/form/Inputbox';
import Banner from '../components/Banner';
import { LabFormBanner } from '../assets';
import FooterDiv from '../components/FooterDiv';
import CheckboxList from '../components/form/CheckboxList';
import { GenderDropdown, DateDropdown } from '../components/form/Dropdown';
const LabtestPage = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <div className=' bg-neutral-200 shadow'>
      <div>
        <Banner heading={'Book a'} subheading={'Laboratory Test'} img={LabFormBanner} />
      </div>
      <div className=" flex flex-col items-center justify-center bg-gray-200 mb-16 my-10">
        <div className="p-8 mb-4">
          <div className='flex'>
            <h1 className="text-header-1 text-secondary-600 font-bold mb-4 ms-auto me-auto">Book your lab test</h1>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-x-14 gap-y-8 md:grid-cols-2 md:grid-rows-2">
            <Inputbox label='Full Name'></Inputbox>
            <Inputbox label='Email Address'></Inputbox>
            <Inputbox label='Phone Number'></Inputbox>
            <GenderDropdown
              selectedGender={selectedGender}
              onGenderChange={setSelectedGender}
            />
            <Inputbox label='Age'></Inputbox>
            <DateDropdown selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="bg-neutral-100 p-5 shadow">
          <h1 className="text-header-1 text-secondary-600 ps-3 font-bold mb-8">Select your lab test here:</h1>
         <CheckboxList></CheckboxList>
        </div>
        <Button className='mt-5'>Send request</Button>
      </div>
        <FooterDiv></FooterDiv>
    </div>
  );
};

export default LabtestPage;