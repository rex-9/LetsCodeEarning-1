import React from 'react'
import Checkbox from '../Checkbox'
const CheckboxList = () => {
  return (
    <div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 p-6 md:grid-cols-3">
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
  )
}

export default CheckboxList
