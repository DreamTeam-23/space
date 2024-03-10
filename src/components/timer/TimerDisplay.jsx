import PropTypes from 'prop-types';

const TimerDisplay = ({ timeLeft }) => (
    <div className="text-4xl font-bold text-center my-4 text-white">
        {timeLeft}
    </div>
);

TimerDisplay.propTypes = {
    timeLeft: PropTypes.number.isRequired,
};

export default TimerDisplay;
