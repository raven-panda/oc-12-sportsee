import IconProps from "@/components/icon/IconProps.ts";

export default function CheeseburgerIcon({
  width = 20,
  height = 18,
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 20 19"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.25 15C1.25 17.125 2.875 18.75 5 18.75H15C17.125 18.75 18.75 17.125 18.75 15H1.25Z" />
      <path d="M18.75 12.5H1.25C0.5 12.5 0 12 0 11.25C0 10.5 0.5 10 1.25 10H18.75C19.5 10 20 10.5 20 11.25C20 12 19.5 12.5 18.75 12.5Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.25 0H8.75C4.625 0 1.25 3.375 1.25 7.5H18.75C18.75 3.375 15.375 0 11.25 0ZM7.5 5C6.75 5 6.25 4.5 6.25 3.75C6.25 3 6.75 2.5 7.5 2.5C8.25 2.5 8.75 3 8.75 3.75C8.75 4.5 8.25 5 7.5 5ZM12.5 5C12.5 5.75 13 6.25 13.75 6.25C14.5 6.25 15 5.75 15 5C15 4.25 14.5 3.75 13.75 3.75C13 3.75 12.5 4.25 12.5 5Z"
      />
    </svg>
  );
}
