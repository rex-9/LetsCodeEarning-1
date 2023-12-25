import {Lab,Phonecalling, WhatsappIcon} from '../assets'
import Buttonbooking from '../components/Button'
import Navbar from '../components/Navbar'
const LabTest = () => {
  return (
    <div>
        <Navbar></Navbar>
         <div className="w-screen h-auto flex flex-col lg:flex-row bg-secondary-700 text-[#fff]  md:items-center  py-10 px-6 md:pt-[80px] md:pb-[100px] md:px-6 md:gap-4">
          <article className='max-w-sm md:max-w-lg mx-auto'>
                <div className="">
                    <p className='text-header-1 lg:text-header-5'>
                        Request your <span className="text-primary-600">lab test</span> from anywhere within Lome-Togo.
                    </p>
                    <p className='pt-4 pb-4 text-[14px] text-body-text-1 lg:text-header-1 text-primary-600'>Available Monday to Friday from 8:00AM to 5:00PM.</p>
                </div>
                <div className="lg:py-12  pb-10">
                    <Buttonbooking variant='form'>Book for your test now</Buttonbooking>  
                </div>       
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Phonecalling></Phonecalling>
                        <div className="flex flex-col ps-4  justify-center pr-14 md:pr-20  lg:ps-6">
                            <span className='text-body-text-1 lg:text-header-3'>92507822</span>
                            <span className='text-body-text-1 lg:text-header-3'>92507822</span>
                        </div>
                        <Buttonbooking variant='icon' size={'icon'}>Chat with us{<WhatsappIcon/>}</Buttonbooking>
                    </div>
                </div>
          </article>

          <section className='pt-11 w-full  max-w-sm md:max-w-md mx-auto'>
                <img src={Lab} alt="" className='w-full h-full object-cover'  />
          </section>

        </div>
    </div>
  )
}

export default LabTest