import React from 'react'
import'./programmes.css'
import programme_1 from'../../assets/programme-1.jpg'
import programme_2 from'../../assets/programme-2.jpg'
import programme_3 from'../../assets/programme-3.jpg'
import programme_icon_1 from '../../assets/programme-icon-1.png'
import programme_icon_2 from '../../assets/programme-icon-2.png'
import programme_icon_3 from '../../assets/programme-icon-3.png'


const Programmes = () => {
  return (
    <div className='programmes'>
        <div className='programme'>
            <img src={programme_1}alt=""/>
            <div className="caption">
                <img src={programme_icon_1} alt="" />
                <p>Graduation Degree</p>

            </div>


        </div>
        <div className='programme'>
       
            <img src={programme_2}alt=""/>
            <div className="caption">
                <img src={programme_icon_2} alt="" />
                <p>Masters Degree</p>

            </div>


        </div>
        <div className='programme'>
       
            <img src={programme_3}alt=""/>
            <div className="caption">
                <img src={programme_icon_3} alt="" />
                <p>Post Graduation</p>

            </div>


        </div>

      
    </div>
  )
}

export default Programmes
