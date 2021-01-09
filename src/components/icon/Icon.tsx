import React, { FC } from "react";
import classNames from "classnames";

import { Box, BoxProps } from "components";

import { IconColor, IconName, IconSize } from "./types";

export interface IconProps extends BoxProps {
  color?: IconColor;
  name?: IconName;
  size?: IconSize;
}

export const Icon: FC<IconProps> = ({
  children,
  className,
  color,
  name,
  size = "md",
  ...rest
}) => {
  const getSize = () => {
    switch (size) {
      case "xs":
        return "w-2 h-2";
      case "sm":
        return "w-4 h-4";
      case "lg":
        return "w-8 h-8";
      case "xl":
        return "w-10 h-10";
      case "md":
      default:
        return "w-6 h-6";
    }
  };

  switch (name) {
    case "chevron-right":
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      );
    case "menu":
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    case "rip":
      // https://www.flaticon.com/free-icon/grave_2851736?term=rip&page=1&position=30
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 60 60"
        >
          <g fill="none" fillRule="evenodd">
            <g
              fill="currentColor"
              fillRule="nonzero"
              transform="translate(0 -1)"
            >
              <path d="M43.437 6.562A19 19 0 0011 20v29.646a6.984 6.984 0 00-3.408 3.387 7 7 0 00-7.556 5.624c-.11.57.042 1.159.413 1.605.384.468.958.739 1.563.738h55.976c.605 0 1.18-.27 1.563-.738a1.937 1.937 0 00.413-1.605 7 7 0 00-7.556-5.624A6.984 6.984 0 0049 49.646V20a18.915 18.915 0 00-5.563-13.438zM13 20c0-9.389 7.611-17 17-17s17 7.611 17 17v29.068a7.075 7.075 0 00-.948-.068 5.772 5.772 0 00-1.847.282A7.035 7.035 0 0039.029 47a7.746 7.746 0 00-2.484.424A10.045 10.045 0 0030 45a9.853 9.853 0 00-6.537 2.461 7.012 7.012 0 00-7.609 1.8A6.961 6.961 0 0013 49.068zm37.409 33.542a7.1 7.1 0 00-2.087 1.308 1 1 0 101.356 1.47 5.452 5.452 0 012.3-1.2h.015a5.026 5.026 0 016.02 3.869.031.031 0 01-.02.01L2 59.04a5.019 5.019 0 016.012-3.919h.015c.852.21 1.641.62 2.3 1.2a1 1 0 001.356-1.47 7.1 7.1 0 00-2.087-1.308 5 5 0 015.718-2.352 1.958 1.958 0 001.961-.557 5.08 5.08 0 015.48-1.3 2 2 0 002.008-.388 8.048 8.048 0 0110.483 0 2 2 0 002.009.388 5.086 5.086 0 015.48 1.3c.498.54 1.255.754 1.962.557a5 5 0 015.717 2.352z"></path>
              <path d="M32.4 51.8a1 1 0 101.2-1.6 6.09 6.09 0 00-7.2 0 1 1 0 001.2 1.6 4.062 4.062 0 014.8 0zM17.33 53.257a1 1 0 001.34 1.486 2.664 2.664 0 013.661 0 1 1 0 101.338-1.485 4.688 4.688 0 00-6.339-.001zM36.33 53.257a1 1 0 001.34 1.486 2.664 2.664 0 013.661 0 1 1 0 101.338-1.485 4.688 4.688 0 00-6.339-.001zM27.33 55.257a1 1 0 101.34 1.486 2.664 2.664 0 013.661 0 1 1 0 101.338-1.485 4.688 4.688 0 00-6.339-.001zM23.257 34.206l-2.7 1.484a3.51 3.51 0 00-5.417 1.866 3.45 3.45 0 00.292 2.65c.248.459.599.854 1.025 1.155a3.5 3.5 0 106.983-.407l2.636-1.443A2 2 0 0028 41h4a2 2 0 001.926-1.489l2.636 1.443a3.5 3.5 0 006.568 1.88 3.46 3.46 0 00.415-1.473 3.359 3.359 0 001.02-1.147 3.491 3.491 0 00-1.378-4.748 3.5 3.5 0 00-3.742.224l-2.7-1.484a3.507 3.507 0 00-.27-.546 7.021 7.021 0 00.511-2.335l2.462-1.355a3.517 3.517 0 003.733.228 3.49 3.49 0 001.391-4.744 3.38 3.38 0 00-1.026-1.161 3.5 3.5 0 10-6.981.414l-1.931 1.059a6.958 6.958 0 00-9.264 0l-1.93-1.059a3.5 3.5 0 10-6.983-.414c-.424.3-.773.695-1.02 1.153A3.489 3.489 0 0016.82 30.2a3.519 3.519 0 003.734-.227l2.462 1.355c.036.802.208 1.592.511 2.335a3.507 3.507 0 00-.27.543zm-1.407 5.336a1 1 0 00-.474 1.178 1.491 1.491 0 01-.7 1.752 1.513 1.513 0 01-2.042-.587 1.456 1.456 0 01-.161-.933 1 1 0 00-.579-1.065 1.421 1.421 0 01-.705-.641 1.467 1.467 0 01-.126-1.132 1.506 1.506 0 012.587-.559 1 1 0 001.246.232l2.278-1.252a3.5 3.5 0 001.118 1.673zm18.5-1.987a1.506 1.506 0 012.587.559c.112.382.066.793-.13 1.14a1.417 1.417 0 01-.7.633 1 1 0 00-.579 1.065c.052.316-.003.641-.156.923a1.515 1.515 0 01-2.045.6 1.492 1.492 0 01-.706-1.753 1 1 0 00-.474-1.178l-2.438-1.334a3.5 3.5 0 001.118-1.673l2.278 1.252a1 1 0 001.249-.234zm-2.2-11.438a1 1 0 00.474-1.177 1.5 1.5 0 012.748-1.166c.156.285.213.613.161.934a1 1 0 00.595 1.071c.297.125.54.35.689.636a1.49 1.49 0 01-.594 2.027 1.5 1.5 0 01-1.867-.337 1 1 0 00-1.247-.231l-2.358 1.3a6.982 6.982 0 00-.8-1.846zM30 26a5.006 5.006 0 015 5 4.941 4.941 0 01-.574 2.321 1 1 0 00.159 1.152 1.5 1.5 0 01-1.387 2.5 1 1 0 00-1.2.981V39H28v-1.05a1 1 0 00-1.2-.981 1.494 1.494 0 01-1.387-2.5 1 1 0 00.159-1.152A4.941 4.941 0 0125 31a5.006 5.006 0 015-5zm-10.354 2.105a1.5 1.5 0 01-1.868.337 1.492 1.492 0 01-.589-2.036 1.38 1.38 0 01.685-.627 1 1 0 00.6-1.071 1.447 1.447 0 01.156-.924c.192-.35.516-.611.9-.724a1.5 1.5 0 011.848 1.88 1 1 0 00.474 1.177l2.2 1.208a6.982 6.982 0 00-.8 1.846l-2.358-1.3a1 1 0 00-1.248.234z"></path>
              <circle cx="28" cy="31" r="1"></circle>
              <circle cx="32" cy="31" r="1"></circle>
              <path d="M28.293 35.707a1 1 0 001.414 0l.293-.293.293.293a1 1 0 001.414-1.414l-1-1a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414zM21 19a1 1 0 001-1v-3h.382l1.723 3.447a1 1 0 101.79-.894l-1.466-2.932A2.989 2.989 0 0023 9h-1a2 2 0 00-2 2v7a1 1 0 001 1zm1-8h1a1 1 0 010 2h-1zM35 19a1 1 0 001-1v-3h1a3 3 0 000-6h-1a2 2 0 00-2 2v7a1 1 0 001 1zm1-8h1a1 1 0 010 2h-1zM30 19a1 1 0 001-1v-8a1 1 0 00-2 0v8a1 1 0 001 1z"></path>
            </g>
          </g>
        </svg>
      );
    case "sun":
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "x":
      return (
        <svg
          className={classNames(color, getSize(), className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    default:
      return (
        <Box
          as="i"
          {...(rest as BoxProps)}
          className={classNames(color, getSize(), className)}
        >
          {children}
        </Box>
      );
  }
};
