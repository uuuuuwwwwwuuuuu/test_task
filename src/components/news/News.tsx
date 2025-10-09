import { FC, useEffect } from 'react';
import './News.scss';
import useScreenSize from '../../dtectScreenSIze';


const NewsCard: FC<{size: 'big' | 'small', imgSrc: string, hashTag: string}> = ({size, imgSrc, hashTag}) => {
    const dynamicPath = `${process.env.PUBLIC_URL}/img/${imgSrc}.png`;
    if (size === 'big') {
        return (
            <div className='big_news_card' style={{backgroundImage: `url(${dynamicPath})`}} >
                <div className='news_card_text'>
                    <span className='news_card_date'>
                        <span>09.07.19 |</span>#{hashTag.toUpperCase()}
                    </span>
                    <span className='news_card_title'>
                        Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
                    </span>
                    <span className='news_card_info'>
                        И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
                    </span>
                </div>
                <div className='news_bottom_gradient'></div>
                <div className='news_darker'></div>
            </div>
        )
    }
    return (
        <div className='small_news_card' >
            <div className="small_news_card_img" style={{backgroundImage: `url(${dynamicPath})`}}></div>
            <div className='news_card_text'>
                <span className='news_card_date'>
                    <span>09.07.19 |</span>#{hashTag.toUpperCase()}
                </span>
                <span className='news_card_title' >
                    Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
                </span>
                <span className='news_card_info'>
                    И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
                </span>
            </div>
        </div>
    )
};

interface CoachProps {
    textVersion: 'first' | 'second',
    imgSrc: `coach-${number}`
}

const CoachCard: FC<CoachProps> = ({textVersion, imgSrc}) => {
    const text = textVersion === 'first' ? 'Сергей Корниленко станет играющим тренером «Крыльев советов»' : '«Динамо» как бы начинает работать заново'
    const dynamicPath = `${process.env.PUBLIC_URL}/img/${imgSrc}.png`;
    return (
        <div className='coach_card'>
            <img src={dynamicPath} alt="Фото тренера" />
            <div className='coach_card_text_header'>
                <span className='coach_name'>Алексей Михайличенко</span>
                <span className='coach_qualification'>Главный тренер ф.к. Динамо</span>
            </div>
            <span className='coach_info'>{text}</span>
            <div className='quotation_mark_wrapper'>
                <img src={`${process.env.PUBLIC_URL}/icons/quotationMarks.svg`} alt="Иконка кавычек" />
            </div>
        </div>
    )
}

const News: FC = () => {
    const screenSize = useScreenSize();
    const coachesArr: CoachProps[] = [
        {textVersion: 'first', imgSrc: 'coach-1'},
        {textVersion: 'second', imgSrc: 'coach-2'},
        {textVersion: 'first', imgSrc: 'coach-3'},
        {textVersion: 'second', imgSrc: 'coach-1'},
    ];

    return (
        <div className="news_container">
            <span className='last_news'>Последнее</span>
            <div className='news_big_wrapper'>
                <NewsCard size='small' imgSrc='new-2' hashTag='болельщикам'/>
                <NewsCard size='small' imgSrc='new-3' hashTag='любительский_спорт'/>
                <NewsCard size='big' imgSrc='new-1' hashTag='профессиональный_спорт'/>
                <NewsCard size='small' imgSrc='new-2' hashTag='болельщикам'/>
            </div>
            {
                screenSize.width <= 660 ? 
                    <div className='coach_container'>
                        <div className='coach_window'>
                            <div className='coach_wrapper'>
                                {
                                    coachesArr.map((coach, index) => {
                                        return <CoachCard textVersion={coach.textVersion} imgSrc={coach.imgSrc} key={index} />
                                    })
                                }
                            </div>
                        </div>
                        <div className='coach_nav_panel'>
                            <button className='coach_slide_buttons'>{'<'}</button>
                            <div className='coach_nav_buttons'>
                                {
                                    coachesArr.map(_ => {
                                        return <div></div>
                                    })
                                }
                            </div>
                            <button className='coach_slide_buttons'>{'>'}</button>
                        </div>
                    </div> :
                    <div className='coach_wrapper'>
                        {
                            coachesArr.map((coach, index) => {
                                return <CoachCard textVersion={coach.textVersion} imgSrc={coach.imgSrc} key={index} />
                            })
                        }
                    </div>
            }
            <div className='news_small_wrapper'>
                <NewsCard size='big' imgSrc='new-1' hashTag='профессиональный_спорт'/>
                <NewsCard size='small' imgSrc='new-3' hashTag='любительский_спорт'/>
            </div>
        </div>
    );
};

export default News;
