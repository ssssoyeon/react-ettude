import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './styles/Section1.scss'

const Section1 = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <section className='sc1'>
            <div className="inner">
                <div className="img-wrap" data-aos="fade-right">
                    <img src="./img/ettude.png" alt="img" />
                </div>
                <div className="t-wrap" data-aos="fade-left">
                    <p className="txt_1">
                        MAKEUP LOOK
                        <img src="./img/makeup.png" alt="img" />
                    </p>
                    <h2 className="con_tit">
                    "What makeup suits<br/> me right now?"
                    </h2>
                    <p className="txt">
                    에뛰드는 아모레퍼시픽에서 선보인 메이크업 브랜드로<br/> 젊은 층을 위해 화장놀이의 즐거움을 전하며,<br/> 누구나 자신만의 아름다움을 자연스럽게 발견할 수<br/> 있도록 초점을 맞추는데에 노력합니다!
                    </p>
                    <a href="#" className='con_btn'>SHOP NOW</a>
                </div>
            </div>
        </section>
    )
}

export default Section1