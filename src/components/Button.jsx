/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/library";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[0.375rem] text-body-text-1 md:text-medium text-neutral-100 font-NunitoSans disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-secondary-700",
        transparent: "bg-transparent border-[1px] border-neutral-100",
        form: "bg-primary-600",
        icon: "border-[2px] border-[#4ADE80]"
      },
      size: {
        default: "py-[0.625rem] px-[1.5625rem] gap-[0.625rem]",
        icon: "py-[0.875rem] pr-[1.58375rem] pl-[1.58188rem] gap-[2.90313rem]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className}))} {...props}>
      {children}
    </button>
  );
};

export default Button;
