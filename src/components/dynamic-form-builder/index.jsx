import { useForm } from 'react-hook-form';
import Field from '../field';
import Loader from '../loader';
import useFetchData from '../../hooks/use-fetch-data';
import '../../theme/components/dynamicFormBuilder.css';

const DynamicFormBuilder = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const { data, loading } = useFetchData('/formData.json');

    const onSubmit = (data) => {
        const formatedData = Object.entries(data).map(([key, value]) => ({
            [key]: value
        }));
        console.log(formatedData);
    };

    return (
        <div className="wrapper">
            <div className="formContainer">
                <h1 className="header">{`Let's get started!`}</h1>

                {loading ? (
                    <Loader height={'450px'} />
                ) : (
                    <form
                        className="form"
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        {data?.map((field, index) => {
                            return (
                                <Field
                                    key={index}
                                    register={register}
                                    errors={errors}
                                    {...field}
                                />
                            );
                        })}
                        <button className="button">{'Submit'}</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DynamicFormBuilder;
