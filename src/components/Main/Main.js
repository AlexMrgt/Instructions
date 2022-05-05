import './Main.css';

import Questions from '../Questions/Questions';
import ItemsForm from '../ItemsForm/ItemsForm';

import ApprovedImage from '../../images/approved.png';
import { useState } from 'react';


const Main = () => {

    const [isShow, setIsShow] = useState(false);

    function showHelper() {
        setIsShow(true)
    }

    function hideHelper() {
        setIsShow(false)
    }


    return (
        <main className='main'>

            <div className='main__approved-container'  >
                <img src={ApprovedImage} alt='approved' onMouseOver={showHelper} onMouseLeave={hideHelper} className='main__approved-image'></img>


            </div>

            {(isShow)
                ?
                <div className='helper-container'>
                    <p className='helper-text'> Дизайн одобрен аналитиком, менеджером и тимлидом</p>
                </div>
                : null
            }

            <h1 className='main__title'>ФАК ( за мат извени )</h1>

            <Questions />
            <ItemsForm />

            <footer className='footer'>

                <div className='first'  >
                    <img src={ApprovedImage} alt='approved' onMouseOver={showHelper} onMouseLeave={hideHelper} className='first__approved-image'></img>


                </div>

                <div className='second'>
                    <p className='second-text'> Дизайн одобрен аналитиком, менеджером и тимлидом</p>
                </div>
            </footer>

        </main>

    )
}

export default Main;