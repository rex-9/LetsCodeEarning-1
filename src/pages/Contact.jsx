import img from '../assets/img/Contact-img.jpg'
import bar from '../assets/img/bar.png'
import bar1 from '../assets/img/bar1.png'
import Button from '../components/Button'
const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-2 h-20 md:h-24">
        <div className="flex flex-col bg-secondary-800 text-[#fff] py-2  ps-8 h-1/2 md:h-full">
          <i className='text-primary-600 font-NunitoSans'>Lets Talk</i>
          <span className=' font-SchadowBT'>Contact </span>
        </div>
        <div>
          <img src={img} alt="" className="w-full h-1/2 object-cover
                 md:h-24"/>
        </div>
      </div>
      <div className=' py-4'>
        <h1 className=' text-secondary-700 font-NunitoSans ps-5 font-bold text-medium'>Medical Laboratory Test</h1>
        <p className=' ps-5 py-2 font-NunitoSans text-body-text-1 pe-5'>Unlock the Miracle of Life: Discover Our Leading IVF Services for Your Journey to Parenthood</p>
      </div>
      <div>
        <ul>
          <li className='flex max-w-[200px] '>
            <img src={circle} alt="" className='h-full max-w-[20px] ' />
            <p className='ps-2 '>Stimulation Ovarienne</p>
          </li>
          <li className='flex pt-6 max-w-[200px] '>
            <img src={circle} alt="" className=' h-full max-w-[20px] ' />
            <p className='ps-2 '>Insemination Intra Uterine</p>
          </li>
          <li className='flex pt-6 max-w-[200px] '>
            <img src={circle} alt="" className=' h-full max-w-[20px]' />
            <p className='ps-2 '>Don D’ovocytes</p>
          </li>
        </ul>
      </div>

      <div className='flex'>
        <p className='ms-auto me-auto text-secondary-600 text-medium font-NunitoSans font-bold'>Opening Hours For Our Laboratory Test</p>
      </div>
      <div className='flex'>
        <div className='flex flex-row me-auto ms-auto py-4'>
          <span>Monday - Wednesday</span>
          <span className='p-3'><img src={bar} alt="" /></span>
          <span>7:30am to 6:00pm</span>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-row me-auto ms-auto py-4'>
          <span>Thursday</span>
          <span className='p-3'><img src={bar1} alt="" /></span>
          <span>8:00am to 6:00pm</span>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-row me-auto ms-auto py-4'>
          <span>Friday</span>
          <span className='p-3'><img src={bar1} alt="" /></span>
          <span>7:30am to 4:30pm</span>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-row me-auto ms-auto py-4'>
          <span>Saturday - Sunday</span>
          <span className='p-3'><img src={bar1} alt="" /></span>
          <span>CLOSED</span>
        </div>
      </div>
      <div className=' flex'>
        <div className=' me-auto ms-auto'>
          <Button> Book a lab test appointment</Button>
        </div>
      </div>

      {/* form section */}
      <div className=''>
        <div className=' flex'>
          <h1 className=' text-secondary-600 font-semibold text-header-1 font-NunitoSans ms-auto me-auto py-5'>Get in touch with us</h1>
        </div>
        <div className=' flex '>
          <p className=' font-NunitoSans ms-auto me-auto'>We are always happy to hear from you. Please feel free to use this form to contact us with any questions or concerns you may have.</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
