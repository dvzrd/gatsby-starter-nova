import React, { FC, HTMLAttributes } from "react";

interface HeroProps extends HTMLAttributes<HTMLElement> {}

export const Hero: FC<HeroProps> = ({ children, className }) => (
  <header className={className}>{children}</header>
);
