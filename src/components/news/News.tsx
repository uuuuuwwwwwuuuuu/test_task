import { FC } from 'react';
import './News.scss';


const NewsCard: FC<{size: 'big' | 'small', imgSrc: string}> = ({size, imgSrc}) => {
    const dynamicPath = `${process.env.PUBLIC_URL}/img/${imgSrc}.png`;
    if (size === 'big') {
        return (
            <div className='big_news_card' style={{backgroundImage: `url(${dynamicPath})`}} >
                <div className='news_card_text'>
                    <span className='news_card_date'>
                        <span>09.07.19 |</span>#ПРОФЕССИОНАЛЬНЫЙ_СПОРТ
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
                    <span>09.07.19 |</span>#ПРОФЕССИОНАЛЬНЫЙ_СПОРТ
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
}

const News: FC = () => {
    return (
        <div className="news_container">
            <span className='last_news'>Последнее</span>
            <div className='news_wrapper'>
                <NewsCard size='small' imgSrc='new-2'/>
                <NewsCard size='small' imgSrc='new-3'/>
                <NewsCard size='big' imgSrc='new-1'/>
                <NewsCard size='small' imgSrc='new-2'/>
                <NewsCard size='small' imgSrc='new-3'/>
                <NewsCard size='big' imgSrc='new-1'/>
            </div>

        </div>
    );
};

export default News;
