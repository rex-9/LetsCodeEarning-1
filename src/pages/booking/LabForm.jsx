import { useState } from "react";
import Button from "../../components/Button";
import Inputbox from "../../components/form/Inputbox";
import Banner from "../../components/Banner";
import { LabFormBanner } from "../../assets";
import CheckboxList from "../../components/form/CheckboxList";
import { GenderDropdown, DateDropdown } from "../../components/form/Dropdown";
import Wrapper from "../../layouts/Wrapper";
const LabtestPage = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <Wrapper className="bg-neutral-200 shadow">
      <div>
        <Banner
          heading={"Book a"}
          subheading={"Laboratory Test"}
          img={LabFormBanner}
        />
      </div>
      <div className=" bg-gray-200 flex flex-col items-center  justify-center py-10">
        <div className="mb-4 p-8">
          <div className="flex">
            <h1 className="mb-4 me-auto ms-auto text-header-1 font-bold text-secondary-600">
              Book your lab test
            </h1>
          </div>
          <div className="grid grid-cols-1 grid-rows-3 gap-x-14 gap-y-8 md:grid-cols-2 md:grid-rows-2">
            <Inputbox label="Full Name"></Inputbox>
            <Inputbox label="Email Address"></Inputbox>
            <Inputbox label="Phone Number"></Inputbox>
            <GenderDropdown
              selectedGender={selectedGender}
              onGenderChange={setSelectedGender}
            />
            <Inputbox label="Age"></Inputbox>
            <DateDropdown
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="bg-neutral-100 p-5 shadow">
          <h1 className="mb-8 ps-3 text-header-1 font-bold text-secondary-600">
            Select your lab test here:
          </h1>
          <CheckboxList></CheckboxList>
        </div>
        <Button className="mt-5">Send request</Button>
      </div>
    </Wrapper>
  );
};

export default LabtestPage;
