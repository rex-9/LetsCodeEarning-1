/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/library";

const buttonVariants = cva(
  "inline-flex items-center justify-center focus:outline-none text-body-text-1 md:text-medium text-neutral-100 font-NunitoSans font-semibold disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-secondary-700 focus:ring-secondary-100 rounded md:rounded-md focus:ring-4",
        transparent:
          "bg-transparent border border-neutral-100 focus:ring-neutral-900 rounded-md focus:ring-2",
        form: "bg-primary-600 focus:bg-primary-100 rounded md:rounded-md focus:ring-4",
        icon: "border-2 border-custom-meadow-green text-primary-1100 focus:ring-neutral-100 rounded-md focus:ring-1",
        nav: "z-50 h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-secondary-700 md:hidden ",
      },
      size: {
        default: "md:py-3 md:px-6 md:gap-3 py-2 px-2 gap-2",
        icon: "py-3 px-6 gap-12",
        mobileNav: 'px-0 py-0'
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
