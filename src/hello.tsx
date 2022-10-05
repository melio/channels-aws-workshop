import { useEffect, useRef } from "react";
const id = "surprise-surprise";

const stepSize = 50;

const getStepTime = () => {
  const windowWidth = window.innerWidth;
  const stepCount = Math.floor(windowWidth / stepSize);
  return 2500 / stepCount;
};

const runAnimation = (start: number) => {
  const faceImg = document.getElementById(id);
  const current = start + stepSize;

  if (faceImg) {
    if (current < window.innerWidth) {
      faceImg.style.left = `${current}px`;
      setTimeout(() => {
        runAnimation(current);
      }, getStepTime());
    } else {
      faceImg.style.left = `${-100}px`;
    }
  }
};

export const Hello = () => {
  const started = useRef<boolean>(false);
  useEffect(() => {
    if (!started.current) {
      console.log("started loop");
      setInterval(() => {
        runAnimation(-100);
      }, 150 * 1000);
      started.current = true;
    }
  }, []);

  return (
    <div className="surprise">
      <img
        src="b.gif"
        style={{ position: "absolute", top: "80px", left: "-50px" }}
        id={id}
      />
    </div>
  );
};
