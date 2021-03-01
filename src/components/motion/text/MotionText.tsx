import React, { FC } from "react";
import { motion } from "framer-motion";

import { Text, TextProps } from "components";

export interface MotionTextProps extends TextProps {
  animate?: any;
  initial?: string;
  transition?: any;
  variants?: any;
}

export const MotionText: FC<MotionTextProps> = ({
  animate = "active",
  children,
  className,
  initial = "inactive",
  transition,
  variants,
  ...rest
}) => {
  const AnimatedText = motion(Text);

  return (
    <AnimatedText
      animate={animate}
      className={className}
      initial={initial}
      transition={{ duration: 0.25, ...transition }}
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
      {...(rest as TextProps)}
    >
      {children}
    </AnimatedText>
  );
};
