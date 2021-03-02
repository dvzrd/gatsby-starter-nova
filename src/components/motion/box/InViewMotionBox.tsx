import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import { MotionBox, MotionBoxProps } from "./MotionBox";

export const InViewMotionBox: FC<MotionBoxProps> = ({
  // animate,
  children,
  className,
  transition,
  variants,
  // ...rest
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  console.log(inView);

  return (
    <motion.div
      ref={ref}
      animate={inView ? "active" : "inactive"}
      className={className}
      transition={{ type: "spring", ...transition }}
      variants={{
        ...variants,
        active: { opacity: 1, y: 0, ...variants?.active },
        inactive: { opacity: 0, y: 1000, ...variants?.inactive },
      }}
      // {...(rest as MotionBoxProps)}
    >
      {children}
    </motion.div>
  );
};
