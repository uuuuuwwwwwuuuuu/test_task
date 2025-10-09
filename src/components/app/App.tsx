import './App.scss';
import Header from '../Header/Header';
import News from '../news/News';
import BigNew from '../bigNew/BigNew';
import FeedBack from '../feedback/FeedBack';
import Footer from '../Footer/Footer';
import Aside from '../aside/Aside';
import { useEffect, useState } from 'react';

const App = () => {
    const [isAsideVisible, setIsAsideVisible] = useState(false);

    return (
        <div className='app' style={{overflowY: isAsideVisible ? 'hidden' : 'auto'}}>
            <Header setIsAsideVisible={setIsAsideVisible} />
            <News />
            <BigNew isHashTag={true} imgName='big-new' titleOrHashTag='болельщикам' info='Юрий Поклад: «Динамо» как бы начинает работать заново' />
            <FeedBack />
            <BigNew isHashTag={false} imgName='big-new-2' titleOrHashTag='Экстрим' info='Интервью с Юрием Покладом. Полный список всех медалей Беларуси на Европейских играх.' />
            <Footer />
            <Aside isVisible={isAsideVisible} setIsVisible={setIsAsideVisible} />
        </div>
    );
};

export default App;
