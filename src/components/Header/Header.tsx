import { FC } from 'react';
import './Header.scss';

const Header: FC = () => {


    return (
        <header>
            <div className='container'>
                <div className='header_line'>
                    <span className='header_logo'>
                        <i>
                            <span>sport</span>hub
                        </i>
                    </span>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className='header_pages'>
                            <span>Review</span>
                            <span>Экстрим</span>
                            <span>Легенды</span>
                            <span>зож и туризм</span>
                            <span>Позірк</span>
                            <span>Треш</span>
                        </div>
                        <button className='header_aside_button'>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    ); 
}

export default Header;