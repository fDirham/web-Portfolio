import { useEffect, useState } from "preact/hooks";
import "./FadeAnimWrapper.css";

export default function FadeAnimWrapper({
  show,
  children,
  animDuration,
  startAnimDuration,
  endAnimDuration,
  customClasses,
}: {
  show: boolean;
  children: any;
  animDuration?: number;
  startAnimDuration?: number;
  endAnimDuration?: number;
  customClasses?: [string, string, string];
}) {
  const [internalShow, setInternalShow] = useState(show);

  useEffect(() => {
    if (show) {
      setInternalShow(true);
    }
  }, [show]);

  function handleAnimationEnd() {
    if (!show) {
      setInternalShow(false);
    }
  }

  const classNameFadeAnimWrapper = () => {
    let className = "fade-anim-wrapper";
    if (customClasses) {
      className = customClasses[0];
      if (show) {
        className += " " + customClasses[1];
      } else {
        className += " " + customClasses[2];
      }
    } else {
      if (show) {
        className += " fade-anim-wrapper--show";
      } else {
        className += " fade-anim-wrapper--hide";
      }
    }
    return className;
  };

  const getAnimationDuration = () => {
    let duration = 0.5;
    if (animDuration) {
      duration = animDuration;
    }
    if (startAnimDuration && show) {
      duration = startAnimDuration;
    }
    if (endAnimDuration && !show) {
      duration = endAnimDuration;
    }
    return duration + "s";
  };

  return (
    internalShow && (
      <div
        class={classNameFadeAnimWrapper()}
        onAnimationEnd={handleAnimationEnd}
        style={{
          animationDuration: getAnimationDuration(),
        }}
      >
        {children}
      </div>
    )
  );
}
