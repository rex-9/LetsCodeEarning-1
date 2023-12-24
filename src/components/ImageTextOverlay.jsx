/* eslint-disable react/prop-types */
import { cva } from "class-variance-authority";
import { cn } from "../libs/library";

const ImageTextOverlayVariants = cva(
  "inline-flex items-center justify-center bg-center text-center text-neutral-100 bg-cover bg-no-repeat",
  {
    variants: {
      size: {
        default:
          "py-[6.82rem] px-[2.1rem] lg::pt-[7.5rem] lg:pb-[3.625rem] lg:px-[23.125rem]",
        small:
          "py-[6rem] px-[2.125rem] lg:pt-[4.75rem] lg:pb-[4.1875rem] lg:px-[16.2rem]",
      },
      pattern: {
        default: "bg-hero-pattern",
        footer: "bg-footer-pattern",
      },
    },
    defaultVariants: {
      size: "default",
      pattern: "default",
    },
  },
);

function ImageTextOverlay({ children, className, size, pattern }) {
  return (
    <div className={cn(ImageTextOverlayVariants({ className, size, pattern }))}>
      {children}
    </div>
  );
}

export default ImageTextOverlay;
