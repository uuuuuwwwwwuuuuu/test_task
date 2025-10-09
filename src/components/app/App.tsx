import './App.scss';
import Header from '../Header/Header';
import News from '../news/News';
import BigNew from '../bigNew/BigNew';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <News />
            <BigNew />
        </div>
    );
};

export default App;
