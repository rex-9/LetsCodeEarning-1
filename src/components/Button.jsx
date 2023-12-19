/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[0.375rem] text-medium font-NunitoSans disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-secondary-700 text-neutral-100",
        transparent: "bg-transparent border-[1px] border-neutral-100 text-neutral-100",
        form: "bg-primary-600 text-neutral-100",
        icon: "border-[2px] border-[#4ADE80] text-primary-1000"
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

const Button = ({ children, variant, size, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
