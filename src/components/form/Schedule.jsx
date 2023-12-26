import React from 'react'
import Button from '../Button'
import { Bar, LongBar } from '../../assets'
const Schedule = () => {
  return (
    <div>
         <div>
            <div className="flex p-4 ">
              <p className="me-auto ms-auto font-NunitoSans text-header-1 font-bold text-secondary-600">
                Opening Hours For Our Laboratory Test
              </p>
            </div>
            <div className="flex mt-6">
              <div className="me-auto ms-auto flex flex-row py-4">
                <span>Monday - Wednesday</span>
                <span className="p-3">
                  <Bar></Bar>
                </span>
                <span>7:30am to 6:00pm</span>
              </div>
            </div>
            <div className="flex">
              <div className="me-auto ms-auto flex flex-row py-4">
                <span>Thursday</span>
                <span className="p-3">
                  <LongBar></LongBar>
                </span>
                <span>8:00am to 6:00pm</span>
              </div>
            </div>
            <div className="flex">
              <div className="me-auto ms-auto flex flex-row py-4">
                <span>Friday</span>
                <span className="p-3">
                  <LongBar></LongBar>
                </span>
                <span>7:30am to 4:30pm</span>
              </div>
            </div>
            <div className="flex">
              <div className="me-auto ms-auto flex flex-row py-4">
                <span>Saturday - Sunday</span>
                <span className="p-3">
                  <LongBar></LongBar>
                </span>
                <span>CLOSED</span>
              </div>
            </div>
            <div className=" flex mt-8">
              <div className=" me-auto ms-auto">
                <Button> Book a lab test appointment</Button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Schedule
