import PropTypes from 'prop-types'

function Input(props) {
    const { text, autoComplete, name, className, placeholder, type, required, textarea, disabled} = props;

    if (textarea) {
        return (
          <>
            <label htmlFor={name}>{name}</label>
            <textarea
              autoComplete={autoComplete}
              id={name}
              name={name}
              className={className}
              placeholder={placeholder}
              required={required}
             disabled={disabled}
            >
            </textarea>
          </>
        );
      } else {
        return (
          <>
            <label htmlFor={name}>{text}</label>
            <input
              autoComplete={autoComplete}
              id={name}
              name={name}
              className={className}
              placeholder={placeholder}
              type={type}
              required={required}
              disabled={disabled}
            />
          </>
        );
      }
}

Input.propTypes = {
    text: PropTypes.string,
    autoComplete: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    required: PropTypes.bool,
    textarea: PropTypes.bool,
    disabled: PropTypes.bool,

}

export default Input;
    