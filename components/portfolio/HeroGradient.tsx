export default function HeroGradient() {
  return (
    <div
      className={`absolute z-[0] h-full min-h-[800px] w-full min-w-[800px]`}
      style={{ opacity: "100%", filter: "blur(0px) invert(0)" }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "0",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(337deg, rgba(88, 254, 196, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(88, 243, 254, 1) 100%)",
          filter: "blur(245px)",
          opacity: "1",
          animation:
            "animateOpacity1 20s linear infinite, animateRotation1 20s linear infinite",
        }}
      ></div>
      <style>
        {`
          @keyframes animateOpacity1 {
            0% {
              opacity: 75%;
            }
            50% {
              opacity: 100%;
            }
            100% {
              opacity: 75%;
            }
          }
          
          @keyframes animateRotation1 {
            0% {
              transform: rotate(0deg);
              animation-direction: normal;
            }
            50% {
              transform: rotate(180deg);
              animation-direction: normal;
            }
            100% {
              transform: rotate(360deg);
              animation-direction: normal;
            }
          }
        `}
      </style>
    </div>
  );
}
