import { Brand,Phonecalling, TiktokIcon, FacebookIcon, WhatsappIcon} from '../assets'
const FooterDiv = () => {
    return (

    <div className='bg-secondary-1200 text-neutral-100'>
        <div className="pt-10  md:pt-16 pb-14 px-4 sm:px-10 md:ps-20   lg:mx-auto w-full xl:max-w-fit">
            <div className="flex flex-col gap-8 lg:gap-10 xl:gap-30 2xl:gap-36  lg:flex-row w-full">

                <div className=" grid grid-cols-2 gap-20 lg:flex lg:gap-10 xl:gap-24 2xl:gap-32">
                    <div className="text-body-text-1 md:text-medium">
                        <img src={Brand} className='w-14 md:w-20' alt="" />
                        <p className="pt-4 md:pt-6 max-w-[150px] sm:max-w-[342px] ">
                        HPAE administrative support entry and all health care service administrative support entry and all health care service.
                        </p>
                    </div>
                    <div className="">
                        <p className="text-medium md:text-header-2 font-bold">Our Service</p>
                        <div className="pt-4 md:pt-6 text-body-text-1 md:text-medium flex flex-col">
                            <a href="" className="">Operating Unit</a>
                            <a href="" className="pt-2">Emergencies & Resuscitations</a>
                            <a href="" className="pt-2">Hospitalization</a>
                            <a href="" className="pt-2">Laboratory</a>
                            <a href="" className="pt-2">IVF Centre</a>
                            <a href="" className="pt-2">Imagerie</a>                         
                        </div>
                    </div>
                </div>

                <div className=" grid grid-cols-2 gap-20 lg:gap-14 xl:gap-24 2xl:gap-32 lg:flex lg:flex-row-reverse">

                   <div className="">
                        <p className="text-medium md:text-header-2 font-bold">Contact</p>
                        <div className="pt-4 md:pt-6 text-body-text-1 md:text-medium">
                            <div className="flex gap-4 md:gap-4 items-center">
                                <Phonecalling className="w-5"></Phonecalling>
                                <p>BP 6176 Lome-TOGO</p>
                            </div>
                            <div className="pt-4 md:pt-5 flex gap-2 md:gap-4 items-center">
                                <Phonecalling className="w-5"></Phonecalling>
                                <p>+228 22 22 63</p>
                            </div>
                            <div className="pt-4 md:pt-5 flex gap-2 md:gap-4 items-center">
                                <Phonecalling className="w-5"></Phonecalling>
                                <p className='flex flex-col sm:flex-row'>Customerservice<span>@cae.com</span></p>
                            </div>                         
                            <div className="pt-4 md:pt-5 flex gap-4 md:gap-4">
                                <a href="#"><WhatsappIcon></WhatsappIcon></a>
                                <a href="#"><FacebookIcon></FacebookIcon></a>
                                <a href="#"><TiktokIcon></TiktokIcon></a>
                            </div>
                        </div>
                   </div>
                   <div className="">
                        <p className="text-medium md:text-header-2 font-bold">Quick Links</p>
                        <div className="pt-4 md:pt-6 text-body-text-1 md:text-medium flex flex-col">
                            <a href="">Blog</a>
                            <a href="" className="pt-2">About Us</a>
                            <a href="" className="pt-2">Privacy Policy</a>
                            <a href="" className="pt-2">Terms & Condition</a>
                        </div>
                   </div>
                </div>

            </div>
        </div>
        <div className="pb-10 text-center lg:text-left lg:px-20 w-full">
            <hr className=' pb-5 opacity-50' />
            <small className='text-small-text md:text-body-text-1 opacity-50'>CAE Copyright 2023. All Rights Reserved By CAE</small>
        </div>
    </div>
    
  )
}

export default FooterDiv