/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/library";

const buttonVariants = cva(
  "inline-flex items-center justify-center focus:outline-none text-body-text-1 md:text-medium text-neutral-100 font-NunitoSans font-semibold disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-700 focus:ring-secondary-100 rounded-md focus:ring-4",
        transparent:
          "bg-transparent border border-neutral-100 focus:ring-neutral-900 rounded-md focus:ring-4",
        form: "bg-primary-600 focus:bg-primary-100 rounded-md focus:ring-4",
        icon: "border-2 border-custom-meadow-green text-primary-1100 focus:ring-neutral-100 rounded-md focus:ring-4",
        nav: "z-50 h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-secondary-700 md:hidden ",
      },
      size: {

        default: "py-[0.625rem] px-[1.5625rem] gap-[0.625rem]",
        icon: "md:-[0.875rem] pr-[1rem] gap-[1rem] md:pr-[1.58375rem] md:pl-[1.58188rem] md:gap-[2rem] py-[0.69rem] pl-[0.81rem]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = ({
  children,
  onClick = null,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
