import React, { FC } from "react";
import { motion } from "framer-motion";

import { Box, BoxProps } from "components";

export interface MotionBoxProps extends BoxProps {
  animate?: any;
  initial?: string;
  transition?: any;
  variants?: any;
}

export const MotionBox: FC<MotionBoxProps> = ({
  animate = "active",
  children,
  className,
  initial = "inactive",
  transition,
  variants,
  ...rest
}) => {
  // const AnimatedBox = motion(BoxRef);

  return (
    <motion.div
      animate={animate}
      className={className}
      initial={initial}
      transition={{ duration: 0.25, type: "spring", ...transition }}
      variants={{
        ...variants,
        active: {
          opacity: 1,
          ...variants?.active,
        },
        inactive: {
          opacity: 0,
          ...variants?.inactive,
        },
      }}
      // {...(rest as BoxProps)}
    >
      {children}
    </motion.div>
  );
};
