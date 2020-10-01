import { ReactNode } from "react";

import { SectionProps } from "components";

export interface TopbarProps extends SectionProps {
  navLeft?: ReactNode;
  navLeftClassName?: string;
  navRight?: ReactNode;
  navRightClassName?: string;
}
