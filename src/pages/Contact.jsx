import Address from '../components/Address'
import Button from '../components/Button'
import Inputform from '../components/form/Inputform'
import Banner from '../components/Banner'
import {  ContactBanner, ContactHero, } from '../assets'
import ImageDecoration from '../components/ImageDecoration'
import Circle from '../components/Circle'
import FooterDiv from '../components/FooterDiv'
import Schedule from '../components/form/Schedule'
const Contact = () => {
  return (
    <div className='bg-neutral-200 shadow'>
      <div>
        <Banner heading={"Let's talk"} subheading={'Contact  '} img={ContactBanner}></Banner>
      </div>

      <div className=' flex md:flex-row flex-col-reverse lg:gap-24 md:my-12'>
        <div className='lg:ps-36 md:p-10 p-8'>
          <div className='md:ps-4'>
            <ImageDecoration style='top'>
              <img src={ContactHero} className=' w-[34.625rem] h-[ 24.875rem]' alt="" />
            </ImageDecoration>
          </div>
        </div>

        <div className=' font-NunitoSans lg:p-8 md:p-5 p-8 '>
          <div className='w-full'>
            <h1 className=' text-header-4 text-secondary-700 font-bold '>Medical Laboratory Test</h1>
            <p className='mt-4 checklabel'>Unlock the Miracle of Life: Discover Our Leading <br />IVF Services for Your Journey to Parenthood</p>
            <div className=' mt-8'>
              <Circle name={"Comprehensive Fertility Assessment"}></Circle>
              <Circle name={"In Vitro Fertilization (IVF)"}></Circle>
              <Circle name={"Intracytoplasmic Sperm Injection (ICSI)"}></Circle>
              <div className='my-8'>
                <Button>Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Schedule></Schedule>
      {/* form section */}
      <div className='flex gap-1 mt-10  font-NunitoSans flex-col md:flex-row bg-neutral-100 shadow'>
        <div className='md:w-1/2'>
          <div className='lg:ps-60 pt-20 ps-8 pe-8'>
            <h1 className=' text-secondary-600 font-bold md:text-header-4 text-header-3'>Get in touch with us</h1>
            <p className='pt-8 md:text-header-1 font-medium'>We are always happy to hear from you. Please feel free to use this form to contact us with any questions or concerns you may have.</p>
            <p className='pt-8 md:text-header-1 font-medium'>Our team is ready and available to help answer your questions and address your needs as quickly as possible. If we can’t handle it, we will find someone who can!</p>
          </div>
        </div>

        <div className='md:w-1/2 flex mt-3'>
          <Inputform></Inputform>
        </div>
      </div>
      <div className='my-3'>
        <Address></Address>
      </div>
      <FooterDiv></FooterDiv>
    </div>
  )
}

export default Contact

