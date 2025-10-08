import { FC } from 'react';
import './Header.scss';

type HashTags = 'Review' | 'Экстрим' |'Легенды' | 'Зож и туризм' | 'Позірк' | 'Треш';

interface NewsData {
    hashTag: HashTags;
    data: string
}

const HeaderPage: FC<{title: string}> = ({title}) => {
    return <span>{title}</span>
}

const HeaderNew: FC<NewsData> = ({hashTag, data}) => {
    return (
        <div className='header_new'>
            <span>#{hashTag}</span>
            <span>{data}</span>
        </div>
    );
}

const Header: FC = () => {
    const headerPages: HashTags[] = ['Review', 'Экстрим', 'Легенды', 'Зож и туризм', 'Позірк', 'Треш'];
    const newData: NewsData = {
        hashTag: 'Экстрим',
        data: 'Юрий Поклад: «Динамо» как бы начинает работать заново'
    }

    return (
        <header>
            <div className="header_info">
                <div className='header_line'>
                    <span className='header_logo'>
                        <i>
                            <span>sport</span>hub
                        </i>
                    </span>
                    <div className='header_right_elements' >
                        <div className='header_pages'>
                            {headerPages.map((titles, index) => {
                                return <HeaderPage key={index} title={titles} />
                            })}
                        </div>
                        <button className='header_aside_button'>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
                <HeaderNew data={newData.data} hashTag={newData.hashTag} />
                <div className="header_submenu">
                    
                </div>
            </div>
            <div className='header_top_gradient'></div>
            <div className='header_bottom_gradient'></div>
            <div className='header_darker'></div>
        </header>
    ); 
}

export default Header;