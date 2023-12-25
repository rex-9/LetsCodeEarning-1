/* eslint-disable react/jsx-no-comment-textnodes */
// Labtest.js
import React from 'react';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import Inputbox from '../components/form/Inputbox';
import Banner from '../components/Banner';
import { LabFormBanner } from '../assets';
const Labtest = () => {
  return (
    <div>
      <div>
      <Banner heading={'Book a'} subheading={'Laboratory Test'} img={LabFormBanner} />
    </div>
    <div className=" flex flex-col items-center justify-center bg-gray-200">
      <div className="p-8 mb-4">
        <div className='flex'>
          <h1 className="text-header-1 text-secondary-600 font-bold mb-4 ms-auto me-auto">Book your lab test</h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 gap-x-14 gap-y-8 md:grid-cols-2 md:grid-rows-2">
          <Inputbox label='Full Name'></Inputbox>
          <Inputbox label='Email Address'></Inputbox>
          <Inputbox label='Phone Number'></Inputbox>
          <Inputbox label='Gender'></Inputbox>
          <Inputbox label='Age'></Inputbox>
          <Inputbox label='Date'></Inputbox>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="bg-white p-16 rounded-lg shadow-lg">
        <h1 className="text-header-1 text-secondary-600 ps-3 font-bold mb-8">Select your lab test here:</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 md:grid-cols-3">
          <Checkbox label='Lipid Profile'></Checkbox>
          <Checkbox label='Liver function Test'></Checkbox>
          <Checkbox label='Kidney Function Test'></Checkbox>
          <Checkbox label='Fasting Blood Sugar'></Checkbox>
          <Checkbox label='Full Blood Count'></Checkbox>
          <Checkbox label='Blood Group'></Checkbox>
          <Checkbox label='Hepatitis B (Hbs Ag)'></Checkbox>
          <Checkbox label='G-6PD'></Checkbox>
          <Checkbox label='Hb'></Checkbox>
          <Checkbox label='Hepatisis C'></Checkbox>
          <Checkbox label='ESR'></Checkbox>
          <Checkbox label='WCB'></Checkbox>
          <Checkbox label='Widal Test'></Checkbox>
          <Checkbox label='Pregnancy Test'></Checkbox>
          <Checkbox label='Creatinine'></Checkbox>
          <Checkbox label='Syphilis (VDRL)'></Checkbox>
          <Checkbox label='Stool Analysis'></Checkbox>
          <Checkbox label='Sicking'></Checkbox>
          <Checkbox label='Urine Analysis'></Checkbox>
          <Checkbox label='Urea'></Checkbox>
          <Checkbox label='Uric Acid'></Checkbox>
          <Checkbox label='Triglycerides'></Checkbox>
        </div>
        </div>
      <Button className='mt-2'>Send request</Button>
    </div>
  </div>
  );
};

export default Labtest;
