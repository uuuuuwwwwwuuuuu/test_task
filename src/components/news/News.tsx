import { FC, MouseEventHandler, RefObject, useEffect, useRef, useState } from 'react';
import './News.scss';
import useScreenSize from '../../dtectScreenSIze';


const NewsCard: FC<{size: 'big' | 'small', imgSrc: string, hashTag: string}> = ({size, imgSrc, hashTag}) => {
    const dynamicPath = `${process.env.PUBLIC_URL}/img/${imgSrc}.png`;
    if (size === 'big') {
        return (
            <section className='big_news_card' style={{backgroundImage: `url(${dynamicPath})`}} >
                <div className='news_card_text'>
                    <span className='news_card_date'>
                        <span>09.07.19 |</span>#{hashTag.toUpperCase()}
                    </span>
                    <h2 className='news_card_title'>
                        Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
                    </h2>
                    <p className='news_card_info'>
                        И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
                    </p>
                </div>
                <div className='news_bottom_gradient'></div>
                <div className='news_darker'></div>
            </section>
        )
    }
    return (
        <div className='small_news_card' >
            <div className="small_news_card_img" style={{backgroundImage: `url(${dynamicPath})`}}></div>
            <div className='news_card_text'>
                <span className='news_card_date'>
                    <span>09.07.19 |</span>#{hashTag.toUpperCase()}
                </span>
                <h2 className='news_card_title' >
                    Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?
                </h2>
                <p className='news_card_info'>
                    И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...
                </p>
            </div>
        </div>
    )
};

interface CoachProps {
    textVersion: 'first' | 'second';
    imgSrc: `coach-${number}`;
    ref?: RefObject<HTMLDivElement | null>
}

const CoachCard: FC<CoachProps> = ({textVersion, imgSrc, ref}) => {
    const text = textVersion === 'first' ? 'Сергей Корниленко станет играющим тренером «Крыльев советов»' : '«Динамо» как бы начинает работать заново'
    const dynamicPath = `${process.env.PUBLIC_URL}/img/${imgSrc}.png`;
    return (
        <section className='coach_card' ref={ref}>
            <img src={dynamicPath} alt="Фото тренера" />
            <div className='coach_card_text_header'>
                <span className='coach_name'>Алексей Михайличенко</span>
                <span className='coach_qualification'>Главный тренер ф.к. Динамо</span>
            </div>
            <span className='coach_info'>{text}</span>
            <div className='quotation_mark_wrapper'>
                <img src={`${process.env.PUBLIC_URL}/icons/quotationMarks.svg`} alt="Иконка кавычек" />
            </div>
        </section>
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

    const [coachIndex, setCoachIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);
    const coachWrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const wrapper = coachWrapper.current;

        if (wrapper) {
            const wrapperWidth = wrapper.clientWidth;
            const cardAndGapWidth = (wrapperWidth / coachesArr.length);

            setTranslateValue(cardAndGapWidth * coachIndex);
        }
    }, [coachIndex, coachesArr.length]);

    const nextCoach = () => {
        if (coachIndex !== coachesArr.length - 1) {
            setCoachIndex(prevState => prevState + 1);
        }
        return
    }

    const prevCoach = () => {
        if (coachIndex !== 0) {
            setCoachIndex(prevState => prevState - 1);
        }
        return
    }

    return (
        <main className="news_container">
            <span className='last_news'>Последнее</span>
            <article className='news_big_wrapper'>
                <NewsCard size='small' imgSrc='new-2' hashTag='болельщикам'/>
                <NewsCard size='small' imgSrc='new-3' hashTag='любительский_спорт'/>
                <NewsCard size='big' imgSrc='new-1' hashTag='профессиональный_спорт'/>
                <NewsCard size='small' imgSrc='new-2' hashTag='болельщикам'/>
            </article>
            {
                screenSize.width <= 660 ? 
                    <div className='coach_container'>
                        <article className='coach_window'>
                            <div className='coach_wrapper' ref={coachWrapper} style={{transform: `translateX(${-translateValue}px)`}}>
                                {
                                    coachesArr.map((coach, index) => {
                                        return <CoachCard textVersion={coach.textVersion} imgSrc={coach.imgSrc} key={index} />
                                    })
                                }
                            </div>
                        </article>
                        <div className='coach_nav_panel'>
                            <button className='coach_slide_buttons' onClick={prevCoach}>{'<'}</button>
                            <div className='coach_nav_buttons'>
                                {
                                    coachesArr.map((_, index) => {
                                        return <div key={index} id={index === coachIndex ? 'active' : ''} ></div>
                                    })
                                }
                            </div>
                            <button className='coach_slide_buttons' onClick={nextCoach}>{'>'}</button>
                        </div>
                    </div> :
                    <article className='coach_wrapper'>
                        {
                            coachesArr.map((coach, index) => {
                                return <CoachCard textVersion={coach.textVersion} imgSrc={coach.imgSrc} key={index} />
                            })
                        }
                    </article>
            }
            <article className='news_small_wrapper'>
                <NewsCard size='big' imgSrc='new-1' hashTag='профессиональный_спорт'/>
                <NewsCard size='small' imgSrc='new-3' hashTag='любительский_спорт'/>
            </article>
        </main>
    );
};

export default News;
