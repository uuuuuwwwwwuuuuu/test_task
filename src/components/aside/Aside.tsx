import { CSSProperties, FC } from 'react';
import './Aside.scss';
import { categories, headerPages } from '../Header/Header';
import { namesOfSVG } from '../feedback/FeedBack';
import useScreenSize from '../../dtectScreenSIze';

interface Props {
    isVisible: boolean;
    setIsVisible: (isVisible: boolean) => void;
}

const Aside: FC<Props> = ({isVisible, setIsVisible}) => {
    const height = useScreenSize().height

    const offsetValue = isVisible 
        ? 0 
        : height <= 800 ? -800 : -height - 30

    const asideInlineStyles: CSSProperties = {
        top: offsetValue
    }

    const closeAside = () => {
        setIsVisible(false);
    }

    return (
        <aside style={asideInlineStyles}>
            <div className='aside_header'>
                <span className='logo'><i>sporthub</i></span>
                <button onClick={closeAside}>
                    <img src={`${process.env.PUBLIC_URL}/icons/cross.svg`} alt="Крестик" />
                </button>
            </div>
            <div className='aside_main_container'>
                <div className='aside_main'>
                    <nav className='aside_hash_tags_list'>
                        {
                            headerPages.map((hashTagData, index) => {
                                return (
                                    <button key={index}>{hashTagData}</button>
                                )
                            })
                        }
                    </nav>
                    <div className='aside_categories'>
                        {
                            categories.map((categoriesData, index) => {
                                return (
                                    <button key={index}>{categoriesData}</button>
                                )
                            })
                        }
                    </div>
                    <div className='aside_about'>
                        <button>О проекте</button>
                        <button>Обратная связь</button>
                    </div>
                </div>
                <div className="aside_social">
                    {
                        namesOfSVG.map((iconData, index) => {
                            return (
                                <a aria-label={iconData[1]} href={iconData[2]} key={index}>
                                    <img src={`${process.env.PUBLIC_URL}/icons/${iconData[0]}-outline.svg`} alt={iconData[1]} />
                                </a>
                            )
                        })
                    }
                </div>
            </div>
            <div className='aside_footer'>
                <div className='aside_ads'>
                    <span>Размещение рекламы:</span>
                    <span>ads@sporthub.news</span>
                </div>
                <form>
                    <div className='aside_subscribe'>
                        <span>Подписка:</span>
                        <input type="email" placeholder='Введите ваш email' />
                    </div>
                    <button type='submit'>ПОДПИСАТЬСЯ</button>
                </form>
            </div>
        </aside>
    )
}

export default Aside