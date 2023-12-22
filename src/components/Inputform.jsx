import { useState } from 'react'
import star from '../assets/img/star.png'

const Inputform = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        number: "",
        message : "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDeafault();
        console.log(details);
    }
  return (
      <div>
         <form className=' p-14' >
              <div className=' flex'>
                  <h3 className=' text-body-text-1 font-normal leading-8'>Name</h3>
                 <img src={star} alt="star"  className='w-auto h-3 my-2 ms-2'/>
             </div>
              <input type="text" name='name' className='border rounded-lg w-80 h-12 ps-2' onChange={handleChange} />
              <div className=' flex'>
                  <h3 className=' text-body-text-1 font-normal leading-8'>Email Adress</h3>
                  <img src={star} alt="star"  className='w-auto h-3 my-2 ms-2'/>
             </div>
              <input type="text" name='email' className='border rounded-lg w-80  h-12 ps-2' onChange={handleChange} />
              <div className='flex'>
                  <h3 className=' text-body-text-1 font-normal leading-8'>Phone Number</h3>
                  <img src={star} alt="star"  className='w-auto h-3 my-2 ms-2'/>
             </div>
              <input type="text" name='number' className='border rounded-lg w-80  h-12 ps-2' onChange={handleChange} />
              <h3 className=' text-body-text-1 font-normal leading-8'>Message</h3>
              <textarea type="text" name='message' className='border rounded-lg w-80  h-32 ps-2' onChange={handleChange} />  
              <div>
                  <button type='submit' onSubmit={handleSubmit} className='bg-secondary-700 text-neutral-100 w-80 p-2 rounded-lg my-3'>Send</button>
              </div>
          </form>
     </div>
  )
}

export default Inputform
