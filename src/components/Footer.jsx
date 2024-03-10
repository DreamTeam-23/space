import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <style>
        {`
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0, 191, 255, 0.7), 0 0 20px rgba(0, 191, 255, 0.9);
            }
            50% {
              box-shadow: 0 0 30px rgba(0, 191, 255, 1), 0 0 40px rgba(0, 191, 255, 0.9);
            }
          }

          @keyframes pulseGlowMain {
            0%, 100% {
              box-shadow: 0 0 20px rgba(0, 191, 255, 0.7), 0 0 20px rgba(0, 191, 255, 0.9);
            }
            50% {
              box-shadow: 0 0 50px rgba(0, 191, 255, 1), 0 0 80px rgba(0, 191, 255, 0.9);
            }
          }

          .pulsingCircleMain {
            width: 150px;
            height: 150px;
            margin: 50px;
            border-radius: 50%;
            background-color: #00BFFF;
            box-shadow: 0 0 15px 5px rgba(0, 191, 255, 0.7);
            animation: pulseGlowMain 8s ease-in-out infinite;
            cursor: pointer;
          }
          
          .pulsingCircle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #00BFFF;
            box-shadow: 0 0 15px 5px rgba(0, 191, 255, 0.7);
            animation: pulseGlow 2.5s ease-in-out infinite;
            cursor: pointer;
          }
        `}
      </style>
      <footer className="fixed bottom-0 left-0 w-full text-center py-5 bg-gradient-to-r from-black to-teal-900 text-white">
        <div className="flex justify-center items-center">
          <NavLink to="/space/timer" className="pulsingCircle"></NavLink>
        </div>
      </footer>
    </>
  );
}
