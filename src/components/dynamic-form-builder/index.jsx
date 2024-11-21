import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Field from '../field';
import { styles } from '../../theme/components/dynamic-form-builder';

const DynamicFormBuilder = ({ formJSON }) => {
    const fields = formJSON[0].fields;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        const formatedData = Object.entries(data).map(([key, value]) => ({
            [key]: value
        }));
        console.log(formatedData);
    };
    return (
        <div style={{ ...styles.formContainer }}>
            <h1 style={{ ...styles.header }}>{`Let's get started!`}</h1>

            <form
                style={{ ...styles.form }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                {fields.map((field, index) => {
                    return (
                        <Field
                            key={index}
                            register={register}
                            errors={errors}
                            {...field}
                        />
                    );
                })}
                <button style={{ ...styles.button }}>{'Submit'}</button>
            </form>
        </div>
    );
};

DynamicFormBuilder.propTypes = {
    formJSON: PropTypes.array
};

export default DynamicFormBuilder;
