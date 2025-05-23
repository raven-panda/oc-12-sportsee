import IconProps from "./IconProps";

export default function MeditationIcon({
  width = 36,
  height = 32,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 36 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 8C20.2091 8 22 6.20914 22 4C22 1.79086 20.2091 0 18 0C15.7909 0 14 1.79086 14 4C14 6.20914 15.7909 8 18 8Z" />
      <path d="M36 24V20C31.52 20 27.68 18.08 24.8 14.64L22.12 11.44C21.36 10.52 20.24 10 19.06 10H16.96C15.78 10 14.66 10.52 13.9 11.44L11.22 14.64C8.32 18.08 4.48 20 0 20V24C5.54 24 10.38 21.66 14 17.5V22L6.24 25.1C4.9 25.64 4 26.96 4 28.42C4 30.4 5.6 32 7.58 32H12V31C12 28.24 14.24 26 17 26H23C23.56 26 24 26.44 24 27C24 27.56 23.56 28 23 28H17C15.34 28 14 29.34 14 31V32H28.42C30.4 32 32 30.4 32 28.42C32 26.96 31.1 25.64 29.76 25.1L22 22V17.5C25.62 21.66 30.46 24 36 24Z" />
    </svg>
  );
}
