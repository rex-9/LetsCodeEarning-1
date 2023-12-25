import Address from '../components/Address'
import Button from '../components/Button'
import Inputform from '../components/form/Inputform'
import Banner from '../components/Banner'
import { ContactBanner } from '../assets'
const Contact = () => {
  return (
    <div>
      <div className='mt-26'>
        <Banner heading={"Let's talk"} subheading={'Contact  '} img={ContactBanner}></Banner>
    </div>
      <div className=' py-4'>
        <h1 className=' text-secondary-700 font-NunitoSans ps-5 font-bold text-medium'>Medical Laboratory Test</h1>
        <p className=' ps-5 py-2 font-NunitoSans text-body-text-1 pe-5'>Unlock the Miracle of Life: Discover Our Leading IVF Services for Your Journey to Parenthood</p>
      </div>
      <div>
     
      </div>

      <div className="flex">
        <p className="me-auto ms-auto font-NunitoSans text-medium font-bold text-secondary-600">
          Opening Hours For Our Laboratory Test
        </p>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Monday - Wednesday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>7:30am to 6:00pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Thursday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>8:00am to 6:00pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Friday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>7:30am to 4:30pm</span>
        </div>
      </div>
      <div className="flex">
        <div className="me-auto ms-auto flex flex-row py-4">
          <span>Saturday - Sunday</span>
          <span className="p-3">
            <img src="" alt="" />
          </span>
          <span>CLOSED</span>
        </div>
      </div>
      <div className=" flex">
        <div className=" me-auto ms-auto">
          <Button> Book a lab test appointment</Button>
        </div>
      </div>
      {/* form section */}
      <div className='flex gap-1 mt-40 font-NunitoSans flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <div className='md:ps-60 pt-20 ps-8 pe-8'>
            <h1 className=' text-secondary-600 font-bold md:text-header-4 text-header-3'>Get in touch with us</h1>
            <p className='pt-8 md:text-header-1 font-medium'>We are always happy to hear from you. Please feel free to use this form to contact us with any questions or concerns you may have.</p>
          <p className='pt-8 md:text-header-1 font-medium'>Our team is ready and available to help answer your questions and address your needs as quickly as possible. If we can’t handle it, we will find someone who can!</p>
          </div>
        </div>

        <div className='md:w-1/2 mt-3'>
          <Inputform></Inputform>
        </div>
      </div>
      <div className='my-3'>
        <Address></Address>
      </div>

    </div>
  )
}

export default Contact

