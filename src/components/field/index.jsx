import PropTypes from 'prop-types';
import { useState } from 'react';
import { styles } from '../../theme/components/field';

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
                <div style={{ ...styles.checkboxContainer }}>
                    <label style={{ ...styles.label }} htmlFor={id}>
                        {label} {required && '*'}
                    </label>
                    <input
                        style={{ ...styles.checkbox }}
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
                        style={{ marginTop: '30px', ...styles.fieldContainer }}
                    >
                        <label style={{ ...styles.label }} htmlFor={'email'}>
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
                            style={{ ...styles.field }}
                            id="email"
                            type="email"
                            placeholder={'you@email.com'}
                        />
                        <span style={{ ...styles.error }}>
                            {errors['email']?.message}
                        </span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div style={{ ...styles.fieldContainer }}>
            {type === 'text' && (
                <>
                    <label style={{ ...styles.label }} htmlFor={id}>
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
                        style={{ ...styles.field }}
                        id={id}
                        type="text"
                        placeholder={placeholder}
                        defaultValue={value}
                    />
                    <span style={{ ...styles.error }}>
                        {errors[id]?.message}
                    </span>
                </>
            )}

            {type === 'select' && (
                <>
                    <label style={{ ...styles.label }} htmlFor={id}>
                        {label} {required && '*'}
                    </label>
                    <select
                        style={{ ...styles.field }}
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
                    <span style={{ ...styles.error }}>
                        {errors[id]?.message}
                    </span>
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
