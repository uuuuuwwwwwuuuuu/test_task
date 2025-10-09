import { FC } from 'react';
import './Header.scss';

export type HashTags = 'Review' | 'Экстрим' |'Легенды' | 'Зож и туризм' | 'Позірк' | 'Треш';
type Categories = 
    | 'Футбол'
    | 'Хоккей'
    | 'Биатлон'
    | 'Теннис'
    | 'Гандбол'
    | 'Баскетбол'
    | 'Бокс'
    | 'Лёгкая атлетика'
    | 'Другое'

interface NewsData {
    hashTag: HashTags;
    data: string
}

const HeaderPage: FC<{title: string}> = ({title}) => {
    return (
        <button>{title}</button>
    )
};

const HeaderNew: FC<NewsData> = ({hashTag, data}) => {
    return (
        <div className='header_new'>
            <span>#{hashTag}</span>
            <span>{data}</span>
        </div>
    );
};
export const headerPages: HashTags[] = ['Review', 'Экстрим', 'Легенды', 'Зож и туризм', 'Позірк', 'Треш'];
export const categories: Categories[] = ['Футбол', 'Хоккей', 'Биатлон', 'Теннис', 'Гандбол', 'Баскетбол', 'Бокс', 'Лёгкая атлетика', 'Другое']

interface Props {
    setIsAsideVisible: (isVisible: boolean) => void
}

const Header: FC<Props> = ({setIsAsideVisible}) => {
    const newData: NewsData = {
        hashTag: 'Экстрим',
        data: 'Юрий Поклад: «Динамо» как бы начинает работать заново'
    }

    const openAside = () => {
        setIsAsideVisible(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <header>
            <div className="header_info">
                <div className='header_line'>
                    <span className='logo'>
                        <i>
                            <span>sport</span>hub
                        </i>
                    </span>
                    <div className='header_right_elements' >
                        <div className='header_pages'>
                            {
                                headerPages.map((titles, index) => {
                                    return <HeaderPage key={index} title={titles} />
                                })
                            }
                        </div>
                        <button onClick={openAside} className='header_aside_button'>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
                <HeaderNew data={newData.data} hashTag={newData.hashTag} />
                <div className="header_submenu">
                    <div className='header_submenu_container'>
                        {
                            categories.map((category, index) => {
                                return <HeaderPage title={category} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='header_top_gradient'></div>
            <div className='header_bottom_gradient'></div>
            <div className='header_darker'></div>
        </header>
    ); 
}

export default Header;