import { LabFormBanner } from "../../assets";
import { GenderDropdown, DateDropdown } from "../../components/form/Dropdown";
import Inputbox from "../../components/form/Inputbox";
import Checkbox from "../../components/form/Checkbox";
import Button from "../../components/Button";
import Banner from "../../components/Banner";
import Wrapper from "../../layouts/Wrapper";

const LabtestPage = () => {
  return (
    <Wrapper className="bg-neutral-200 shadow">
      <Banner
        heading="Book a"
        subheading="Laboratory Test"
        img={LabFormBanner}
      />
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSdZplNiFZ6wapRR3DPY8yJmxjuXFBmyvGkQnnbMUHxjYcS8Gg/viewform?usp=pp_url&entry.1962834337=Nyi+Ye+Zin&entry.1216334326=nyiyezin11@gmail.com&entry.767352949=09-1234433434&entry.500168668=Male&entry.203263031=22&entry.479248790=2000-06-13&entry.309236967=Liver+Function+Test">
        <div className="bg-gray-200 flex flex-col items-center  justify-center py-10">
          <div className="mb-4 p-8">
            <h1 className="mb-4 text-center text-header-1 font-bold text-secondary-600">
              Book your lab test
            </h1>
            <div className="grid grid-cols-1 grid-rows-3 gap-x-14 gap-y-8 md:grid-cols-2 md:grid-rows-2">
              <Inputbox label="Full Name" name="entry.1962834337" />
              <Inputbox label="Email Address" name="entry.1216334326" />
              <Inputbox label="Phone Number" name="entry.767352949" />
              <GenderDropdown name="entry.500168668" />
              <Inputbox label="Age" name="entry.203263031" />
              <DateDropdown name="entry.479248790" />
            </div>
          </div>
          {/* Checkboxes */}
          <div className="bg-neutral-100 p-5 shadow">
            <fieldset>
              <div className="mb-8 ps-3 text-header-1 font-bold capitalize text-secondary-600">
                <legend>Select your lab test here:</legend>
              </div>
              <input type="hidden" name="entry.309236967_sentinel" />
              <div className="grid grid-cols-2 grid-rows-2 gap-5 p-6 md:grid-cols-3">
                <Checkbox
                  name="entry.309236967"
                  value="Lipid Profile"
                  label="Lipid Profile"
                />
                <Checkbox name="entry.309236967" value="G-6PD" label="G-6PD" />
                <Checkbox
                  name="entry.309236967"
                  value="Creatinine"
                  label="Creatinine"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Liver Function Test"
                  label="Liver Function Test"
                />

                <Checkbox name="entry.309236967" value="Hb" label="Hb" />
                <Checkbox
                  name="entry.309236967"
                  value="Syphilis (VDRL)"
                  label="Syphilis (VDRL)"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Kidney Function Test"
                  label="Kidney Function Test"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Hepatisis C"
                  label="Hepatisis C"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Stool Analysis"
                  label="Stool Analysis"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Thick Blood Film For malaria"
                  label="Thick Blood Film For malaria"
                />
                <Checkbox name="entry.309236967" value="WCB" label="WCB" />
                <Checkbox
                  name="entry.309236967"
                  value="Urine Analysis"
                  label="Urine Analysis"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Fasting Blood Sugar"
                  label="Fasting Blood Sugar"
                />
                <Checkbox name="entry.309236967" value="ESR" label="ESR" />
                <Checkbox
                  name="entry.309236967"
                  value="Sicking"
                  label="Sicking"
                />

                <Checkbox
                  name="entry.309236967"
                  value="Full Blood Count"
                  label="Full Blood Count"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Widal Test"
                  label="Widal Test"
                />
                <Checkbox name="entry.309236967" value="Urea" label="Urea" />

                <Checkbox
                  name="entry.309236967"
                  value="Blood Group"
                  label="Blood Group"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Cholesterol"
                  label="Cholesterol"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Uric Acid"
                  label="Uric Acid"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Hepatitis B (Hbs Ag)"
                  label="Hepatitis B (Hbs Ag)"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Pregnancy Test"
                  label="Pregnancy Test"
                />
                <Checkbox
                  name="entry.309236967"
                  value="Triglycerides"
                  label="Triglycerides"
                />
              </div>
            </fieldset>
          </div>
          <Button className="mt-5">Send request</Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default LabtestPage;
