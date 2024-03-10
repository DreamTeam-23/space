import { useState, useEffect, useRef } from "react";
import TimerControl from "../components/timer/TimerControl";
import TimerDisplay from "../components/timer/TimerDisplay";
import { formatTime } from "../components/timer/timerUtils";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TimerPage = () => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (time === 0 && timerId) {
      clearInterval(timerId);
      setTimerId(null);
      if (!isMuted) {
        audioRef.current.play();
      }
    }
  }, [time, timerId, isMuted]);

  const startTimer = () => {
    if (!timerId) {
      setTimerId(setInterval(() => setTime((t) => t - 1), 1000));
      if (!isMuted) {
        audioRef.current.play();
      }
    }
  };

  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      audioRef.current.pause();
    }
  };

  const setTimer = (seconds) => {
    if (!timerId) {
      setTime(seconds);
    }
  };

  const resetTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setTime(0);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const muteButtonStyle = {
    opacity: isMuted ? 0.5 : 1,
    cursor: "pointer",
    backgroundColor: isMuted ? "#ccc" : "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center">
        <TimerDisplay timeLeft={formatTime(time)} />
        <div className="flex justify-center items-center">
          <div className="pulsingCircleMain"></div>
        </div>
        <TimerControl
          onSetTimer={setTimer}
          onStart={startTimer}
          onStop={stopTimer}
          isRunning={!!timerId}
          onReset={resetTimer}
        />
        <button onClick={toggleMute} style={muteButtonStyle}>
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <audio
          ref={audioRef}
          src="https://cdn.pixabay.com/download/audio/2024/02/24/audio_1fe2d5f39b.mp3?filename=deep-meditation-192828.mp3"
        />
      </div>
      <Footer />
    </div>
  );
};

export default TimerPage;
