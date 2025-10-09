import { FC, useEffect, useState } from 'react';
import './Footer.scss';
import { namesOfSVG } from '../feedback/FeedBack';
import useScreenSize from '../../dtectScreenSIze';
import { calcOffset } from '../bigNew/BigNew';

const Footer: FC = () => {
    const screenWidth = useScreenSize().width
    const [offset, setOffset] = useState(150);

    useEffect(() => {
        if (screenWidth >= 1380) {
            setOffset(150);
        } else if (screenWidth <= 1380 && screenWidth >= 768) {
            setOffset(calcOffset({
                currentScreenSize: screenWidth,
                options: {
                    maxOffsetValue: 150,
                    minOffsetValue: 0,
                    maxScreenSize: 1380,
                    minScreenSize: 768
                }
            }));
        } else {
            setOffset(0)
        }
    }, [screenWidth])

    return (
        <footer>
            <div className='footer_container'>
                <div className='footer_main_info'>
                    <span className='logo'><i>sporthub</i></span>
                    <span className='footer_about_and_feedback'>О проекте</span>
                    <span className='footer_about_and_feedback'>Обратная связь</span>
                    <div className='footer_ads' style={{right: offset}}>
                        <span>Реклама:</span>
                        <span>ads@sporthub.news</span>
                    </div>
                </div>
                <div className='footer_social'>
                    {
                        namesOfSVG.map((iconData, index) => {
                            return (
                                <a key={index} href={iconData[2]}>
                                    <img src={`${process.env.PUBLIC_URL}/icons/${iconData[0]}-outline.svg`} alt={iconData[1]} />
                                </a>
                            )
                        })
                    }
                </div>
                <div className='footer_about'>
                    <span>© 2022 «Спортхаб»</span>
                    <div className='footer_about_right_elements' >
                        <img src={`${process.env.PUBLIC_URL}/icons/PRAS.svg`} alt="ПРАС логотип" />
                        <span>Разработка сайта — компания PRAS</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer