import DynamicFormBuilder from './components/dynamic-form-builder';
import formJSON from './formData.json';

function App() {
    return <DynamicFormBuilder formJSON={formJSON} />;
}

export default App;
