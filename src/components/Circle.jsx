/* eslint-disable react/prop-types */
import {Check} from '../assets'
const Circle = ({name}) => {
  return (
    <div>
        <li className="flex pt-6 items-center ">
            <img src={Check} alt="" className='max-w-[20px]' />
            <p className='ps-3 text-body-text-1 md:text-header-2'>{name}</p>
        </li>
    </div>
  )
}

export default Circle