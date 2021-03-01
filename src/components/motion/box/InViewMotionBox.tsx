import React, { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { MotionBox, MotionBoxProps } from "./MotionBox";

export const InViewMotionBox: FC<MotionBoxProps> = ({
  animate,
  children,
  className,
  variants,
  ...rest
}) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      console.log("in view");
      controls.start("active");
    }
  }, [controls, inView]);

  console.log(inView);

  return (
    <MotionBox
      animate={controls}
      className={className}
      innerRef={ref}
      variants={{
        ...variants,
        active: { y: 0, ...variants?.active },
        inactive: { y: 100, ...variants?.inactive },
      }}
      {...(rest as MotionBoxProps)}
    >
      {children}
    </MotionBox>
  );
};
