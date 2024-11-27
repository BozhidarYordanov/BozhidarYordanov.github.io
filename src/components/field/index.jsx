import PropTypes from 'prop-types';
import { useState } from 'react';
import '../../theme/components/field.css';

const Field = ({
    id = '',
    label = '',
    required = false,
    placeholder = '',
    type = '',
    value = '',
    options = [],
    minLength = 0,
    register = () => {},
    errors = {}
}) => {
    const [isChecked, setIsChecked] = useState(value);
    const regularExpression =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handleOnCheckboxChange = () => {
        setIsChecked((isChecked) => !isChecked);
    };

    if (type === 'checkbox') {
        return (
            <div>
                <div className="checkboxContainer">
                    <label className="label" htmlFor={id}>
                        {label} {required && '*'}
                    </label>
                    <input
                        className="checkbox"
                        {...register(id)}
                        type="checkbox"
                        id={id}
                        name={id}
                        checked={isChecked}
                        onChange={handleOnCheckboxChange}
                    />
                </div>
                {id === 'subscribe' && isChecked && (
                    <div
                        className="fieldContainer"
                        style={{ marginTop: '30px' }}
                    >
                        <label className="label" htmlFor={'email'}>
                            {'Email *'}
                        </label>
                        <input
                            {...register('email', {
                                required: `This field is mandatory. Please add Email.`,
                                pattern: {
                                    value: regularExpression,
                                    message:
                                        'Please enter a valid email address.'
                                }
                            })}
                            className="field"
                            id="email"
                            type="email"
                            placeholder={'you@email.com'}
                        />
                        <span className="error">
                            {errors['email']?.message}
                        </span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="fieldContainer">
            {type === 'text' && (
                <>
                    <label className="label" htmlFor={id}>
                        {label} {required && '*'}
                    </label>
                    <input
                        {...register(id, {
                            required:
                                required &&
                                `This field is mandatory. Please add ${label}.`,
                            minLength: {
                                value: minLength,
                                message: `${label} must contain at least ${minLength} characters.`
                            }
                        })}
                        className="field"
                        id={id}
                        type="text"
                        placeholder={placeholder}
                        defaultValue={value}
                    />
                    <span className="error">{errors[id]?.message}</span>
                </>
            )}

            {type === 'select' && (
                <>
                    <label className="label" htmlFor={id}>
                        {label} {required && '*'}
                    </label>
                    <select
                        className="field"
                        {...register(id, {
                            required:
                                required &&
                                `This field is mandatory. Please select ${label}.`
                        })}
                        name={id}
                        id={id}
                        defaultValue={value}
                    >
                        <option value="" disabled hidden>
                            {'-- Select an option --'}
                        </option>
                        {options &&
                            options.map(({ label }, index) => {
                                return (
                                    <option
                                        key={`${index}-${label}`}
                                        value={label}
                                    >
                                        {label}
                                    </option>
                                );
                            })}
                    </select>
                    <span className="error">{errors[id]?.message}</span>
                </>
            )}
        </div>
    );
};

Field.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    options: PropTypes.array,
    minLength: PropTypes.number,
    register: PropTypes.func,
    errors: PropTypes.object
};

export default Field;
