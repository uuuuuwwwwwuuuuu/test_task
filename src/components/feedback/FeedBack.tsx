import { FC } from 'react';
import './FeedBack.scss';

export const namesOfSVG = [
    ['VK', 'Вконтакте', 'https://vk.com/'],
    ['FaceBook', 'Фейсбук', 'https://www.facebook.com/'],
    ['Instagram', 'Инстаграм', 'https://www.instagram.com/'],
    ['YouTube', 'Ютуб', 'https://www.youtube.com/'],
    ['Telegram', 'Телеграм', 'https://web.telegram.org/k/'],
    ['TikTok', 'Тик ток', 'https://www.tiktok.com/'],
    ['Twitter', 'Твитер', 'https://x.com/']
] as const;

const FeedBack: FC = () => {
    return (
        <div className='feed_back_wrapper'>
            <div className='social_wrapper'>
                <span className='feed_back_title'>Соцсети</span>
                <div className='social'>
                    <div className='social_icons'>
                        {
                            namesOfSVG.map((iconData, index) => {
                                return (
                                    <a href={iconData[2]} aria-label={iconData[1]} className='social_link' key={index}>
                                        <img src={`${process.env.PUBLIC_URL}/icons/${iconData[0]}.svg`} alt={iconData[1]} />
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='subscribe_wrapper'>
                <span className='feed_back_title'>Подписка</span>
                <div className='subscribe'>
                    <form className='subscribe_form' >
                        <input aria-label='Введите адрес электронной почты' type="email" placeholder='Введите ваш email' className='subscribe_input' />
                        <button type='submit' className='subscribe_button'>Подписаться</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedBack