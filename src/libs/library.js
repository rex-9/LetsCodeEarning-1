import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useLocation } from "react-router";
import { useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
}
