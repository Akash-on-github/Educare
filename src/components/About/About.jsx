import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import Videoplayer from '../Videoplayer/Videoplayer.jsx'

const About = ({playState,setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                {playState
                ?<Videoplayer/>
                :<img src={about_img} alt="" className='about-img' />}
                <img src={play_icon} alt="" className='play-icon' onClick={()=>setPlayState(true)} />

            </div>
            <div className="about-right">

                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                <p>"Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and critical thinking needed to excel in their chosen fields and adapt to the ever-evolving demands of the global landscape."</p>
                <p>"With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare students to become leaders and problem-solvers, equipped to tackle real-world challenges and make a meaningful impact in their careers and communities."</p>
                <p>"Whether you aspire to become a teacher, administrator, or educational leader, our diverse range of programs offers the tools, experiences, and support you need to achieve your goals and make a lasting difference in the field of education."</p>

            </div>
        </div>
    )
}

export default About
