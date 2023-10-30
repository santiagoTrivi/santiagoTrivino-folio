import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";


export const tailwindMergeFnc =(...inputs:ClassValue[]) => {
    return twMerge(clsx(inputs))
}