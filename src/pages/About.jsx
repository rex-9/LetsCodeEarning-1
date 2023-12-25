import {HomeServices2,Doctor1,Doctor2,Doctor3}  from '../assets'
import Banner from '../components/Banner'
import CircleList from '../components/CircleList'
import AboutCard from '../components/CardAbout'
import Button from '../components/Button'
import Circle from '../components/Circle'
import ImageDecoration from '../components/ImageDecoration'
import FooterDiv from '../components/FooterDiv'



const About = () => {
  return (
    <div className="font-['NunitoSans']">
      
      <Banner heading="About" subheading="Hopital Prive Autel D’elie" img={HomeServices2} alt="banner photo for about us page" />

      <div className="lg:grid grid-cols-3 gap-20 ">
        <div className=" pt-14 ps-20  hidden lg:block">
          <ImageDecoration style="both">
              <img src={HomeServices2} className="object-cover aspect-square w-[20rem]" alt="" />
          </ImageDecoration>
        </div>

        <article className='pb-16 pt-8 px-6 text-body-text-1 col-span-2 '>
            <section>
            
              <h2 className='text-secondary-600  font-bold text-medium md:text-header-4'>
                Building a Centre of Excellence for a Healthy Lifestyle
              </h2>

              <p className='pt-6 text-body-text-1 md:text-header-1'>
                Hopital Prive Autel D’elie is a multi-disciplinary health centre of excellence in TOGO. We’ve been around for a long 
                time and we love working with people and giving them the right support to help them meet their health needs.
              </p>

              <p className='pt-6 text-body-text-1 md:text-header-1'>
                We’re here to listen – to hear your story – and then work with you in a collaborative way. We want to help you to achieve your goals,
                to maximize your lifestyle choices and to improve your overall health and wellbeing. We don’t just work with where you are at, we want to empower you to do more now and into the future!
              </p>

              <p className='pt-6 text-body-text-1 md:text-header-1'>
                We’re here to help you bridge the gap between treatment, child care and your lifestyle. Our centre offers:
              </p>
            </section>

            <section className='grid grid-cols-2 pt-6 gap-8 pb-10 text-body-text-1 md:text-header-2'>
              <div className="">
                <ul>
                    <Circle name={"Stimulation Ovarienne"}></Circle>
                    <Circle name={"Stimulation Ovarienne"}></Circle>
                    <Circle name={"Stimulation Ovarienne"}></Circle>                
                </ul>
              </div>
              <div className="">
                <ul>
                    <Circle name={"Stimulation Ovarienne"}></Circle>                
                    <Circle name={"Stimulation Ovarienne"}></Circle>                
                 
                </ul>
              </div>         
            </section>

            <div className="text-center lg:text-left">
             <Button variant={'default'}>Book an appoinment</Button>
            </div>
         </article>
      </div>

      <section className='bg-secondary-600 text-[#fff] relative z-10 '>
       
          <div className="max-w-md mx-auto text-center md:py-4 pt-6 relative">
            <h2 className="font-semibold  text-medium  md:text-header-2">Services We Offer </h2>
            <p className='w-2/3 md:w-full mx-auto md:pt-6 pt-3 pb-3 text-body-text-1 md:text-header-1'>
              Our team is qualified and committed to providing a high-quality service to help you
              navigate your health through different life stages and health challenges.
            </p>
            <span className='text-body-text-2 md:pt-6 md:text-header-1'>This may include:</span>
          </div>
 
        <div className='absolute  top-0 w-full h-1/4 circle  bg-secondary-1300 -z-10'></div>
 
           <CircleList></CircleList>
      </section>

      <section className='px-6 pb-14 md:pb-24 bg-[#f2f2f2] md:px-28'>
         <div className="text-center   mx-auto py-8 md:py-20">
           <h2 className='text-medium md:text-header-4 text-secondary-600 font-semibold'>Meet Our Qualified Doctors</h2>
            <p className='pt-4 max-w-[327px]  md:max-w-4xl m-auto text-body-text-1 md:text-header-1'> 
              We are passionate about helping you achieve your goals to maximize your lifestyle choices and improve your health and wellbeing. We are committed to providing a high quality service to assist you 
            </p>   
          </div> 
          <div className="grid lg:grid-cols-3 gap-6 md:gap-16 xl:gap-36">
            <AboutCard imgSrc={Doctor1} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />
            <AboutCard imgSrc={Doctor2} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />
            <AboutCard imgSrc={Doctor3} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />

        </div>
      </section>

      <FooterDiv></FooterDiv>
     </div>
  )
}

export default About