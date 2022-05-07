import Questions from '../Questions/Questions';
import ItemsForm from '../ItemsForm/ItemsForm';
import ApprovedMark from '../ApprovedMark/ApprovedMark';
import AbsolutePositionWrapper from '../AbsolutePositionWrapper/AbsolutePositionWrapper';
import Footer from '../Footer/Footer';

import './Main.css';

const Main: React.FC = () => {

    const getConfiguredApprovedMarkComponent = () => <ApprovedMark helperPosition='bottom' helperBgColor='colored' />;

    return (
        <main className='main'>

            <h1 className='main__title'>ФАК ( за мат извени )</h1>
            <AbsolutePositionWrapper innerComponent={getConfiguredApprovedMarkComponent()} />
            <Questions />
            <ItemsForm />
            <Footer />

        </main>
    )
}

export default Main;