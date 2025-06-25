import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Program-1.jpeg'
import program_2 from '../../assets/Program-2.jpeg'
import program_3 from '../../assets/Program-3.png'
import program_icon_1 from '../../assets/Program_Icon-1.svg'
import program_icon_2 from '../../assets/Program_Icon-2.svg'
import program_icon_3 from '../../assets/Program_Icon-3.svg'

const Programs = () => {
return (
    <div>
        <div className="programs">
            <div className="program">
                <img src={program_1} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Cuci Khusus</p>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Setrika & Lipat</p>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Antar & Jemput</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Programs
