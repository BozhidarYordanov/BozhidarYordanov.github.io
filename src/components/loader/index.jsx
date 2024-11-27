import PropTypes from 'prop-types';
import '../../theme/components/loader.css';

const Loader = ({ height }) => {
    return (
        <div className="container" style={{ height: height }}>
            <div className="spinner"></div>
        </div>
    );
};

Loader.propTypes = {
    height: PropTypes.string
};

export default Loader;
