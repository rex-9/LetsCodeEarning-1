import {HomeServices2,Doctor1,Doctor2,Doctor3,Check} from '../assets'
import Banner from '../components/Banner'
import CircleList from '../components/CircleList'
import AboutCard from '../components/CardAbout'

const About = () => {
  return (
    <div className="font-['NunitoSans']">


      <Banner heading="About" subheading="Hopital Prive Autel D’elie" img={HomeServices2} alt="banner photo for about us page"  />

       <article className='pb-5 pt-8 px-6 text-body-text-1 '>
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
                  <li className='flex max-w-[200px]'>
                    <img src={Check} alt="" className='h-full max-w-[20px] ' />
                    <p className='ps-2 '>Stimulation Ovarienne</p>
                  </li>
                  <li className='flex pt-6 max-w-[200px] '>
                    <img src={Check} alt="" className=' h-full max-w-[20px] '  />
                  <p className='ps-2 '>Insemination Intra Uterine</p>
                  </li>
                  <li className='flex pt-6 max-w-[200px] '>
                    <img src={Check} alt="" className=' h-full max-w-[20px]'  />
                    <p className='ps-2 '>Don D’ovocytes</p>
                </li>
              </ul>
          </div>
          <div className="">
              <ul>
                  <li className='flex max-w-[200px]'>
                    <img src={Check} alt="" className=' h-full max-w-[20px]'  />
                    <p className='ps-2 '>Don De Sperme</p>
                  </li>
                  <li className='flex pt-6 max-w-[200px]'>
                      <img src={Check} alt="" className=' h-full max-w-[20px]'  />
                      <p className='ps-2'>Don D’ovocytes</p>
                  </li>
                </ul>
            </div>
           
          </section>

       </article>

      <section className='bg-secondary-600 text-[#fff] relative z-10 '>
        <div className="w-full  relative bg-cover bg-center lg:py-13 xl:py-14 md:py-7 py-6 ">
          <div className="max-w-xs md:max-w-md mx-auto text-center h-full ">
            <h2 className="font-semibold  text-medium  md:text-header-2">Services We Offer </h2>
            <p className='pt-3 pb-4 md:pt-6 text-body-text-1 md:text-header-1'>
              Our team is qualified and committed to providing a high-quality service to help you
              navigate your health through different life stages and health challenges.
            </p>
            <span className='text-body-text-2 md:text-header-1'>This may include:</span>
         </div>
         
        </div>
        <div className='absolute  top-0 w-full h-1/4 circle  bg-secondary-700 -z-10'></div>
 
           <CircleList></CircleList> 
      </section>

      <section className='px-6 pb-14 bg-[#f2f2f2] md:px-28'>
         <div className="text-center  w-full px-5 pt-8 md:py-20">
           <h2 className='text-medium md:text-header-4 text-secondary-600 font-semibold'>Meet Our Qualified Doctors</h2>
            <p className='pt-4 pb-8 max-w-3xl m-auto text-body-text-1 md:text-header-1'> 
              We are passionate about helping you achieve your goals to maximize your lifestyle choices and improve your health and wellbeing. We are committed to providing a high quality service to assist you 
            </p>   
          </div> 
          <div className="grid lg:grid-cols-3 gap-10">
            <AboutCard imgSrc={Doctor1} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />
            <AboutCard imgSrc={Doctor2} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />
            <AboutCard imgSrc={Doctor3} imgAlt="Dr Tabitha Tan" name="Dr Tabitha Tan" job="Surgical department" />

        </div>
      </section>
    </div>
  )
}

export default About