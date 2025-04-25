import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default IconProps;
