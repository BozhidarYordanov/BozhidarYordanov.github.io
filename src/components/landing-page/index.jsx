import { useState } from 'react';
import DynamicFormBuilder from '../dynamic-form-builder';
import '../../theme/components/landingPage.css';

const LandingPage = () => {
    const [isFormLoaded, setIsFormLoaded] = useState(false);

    const handleOnClick = () => {
        setIsFormLoaded(true);
    };

    return isFormLoaded ? (
        <DynamicFormBuilder />
    ) : (
        <div className="container--landing">
            <h1 className="title" style={{ fontSize: '45px' }}>{`Welcome!`}</h1>
            <h1 className="title">{`Press the button to see the Dynamic Form Builder!`}</h1>
            <button className="button--landing" onClick={handleOnClick}>
                {'Load the form!'}
            </button>
        </div>
    );
};

export default LandingPage;
