import Search from "public/search.svg";
import Menu from "public/menu.svg";
import Settings from "public/settings.svg";
import Cancel from "public/cancel.svg";
import Home from "public/home.svg";
import ChevronDown from "public/chevron-down.svg";
import Login from "public/login.svg";
import User from "public/user.svg";

const icons = { Search, Menu, Settings, Cancel, Home, ChevronDown, Login, User };

type Name = keyof typeof icons;

export type IconProps = {
  name: Name,
  className?: string,
  fill?: string,
  stroke?: string,
  width?: number,
  height?: number,
};

export function Icon({ name, className, fill = "none", stroke = "currentColor", width = 20, height = 20 }: IconProps) {
  const SvgComponent = icons[name];
  return (
    <SvgComponent
      className={className}
      fill={fill}
      stroke={stroke}
      width={width}
      height={height}
    />
  );
};