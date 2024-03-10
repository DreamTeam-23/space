import PropTypes from 'prop-types';

const TimerControl = ({ onSetTimer, onStart, onStop, isRunning, onReset }) => (
  <div className="flex flex-col items-center">
    <div className="flex my-2">
      {[5, 10, 15, 20, 30].map((minutes) => (
        <button
          key={minutes}
          className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSetTimer(minutes * 60)}
        >
          {minutes} min
        </button>
      ))}
    </div>
    <button
      className={`my-2 py-2 px-4 rounded ${isRunning ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'}`}
      onClick={isRunning ? onStop : onStart}
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
    <button
      className="my-2 py-2 px-4 rounded bg-gray-500 hover:bg-gray-700"
      onClick={onReset}
    >
        Reset
    </button>
  </div>
);

TimerControl.propTypes = {
    onSetTimer: PropTypes.func.isRequired,
    onStart: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired,
    isRunning: PropTypes.bool.isRequired,
    onReset: PropTypes.func.isRequired,
};

export default TimerControl;
