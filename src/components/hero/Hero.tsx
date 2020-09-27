import React, { FC } from "react";

interface HeroProps {
  className: string;
}

export const Hero: FC<HeroProps> = ({ children, className }) => (
  <header className={className}>{children}</header>
);
