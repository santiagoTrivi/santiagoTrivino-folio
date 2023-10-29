import { FC } from "react";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";


const cn =(...inputs:ClassValue[]) => {
    return twMerge(clsx(inputs))
}

interface ButtonATagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

}

export const ButtonATag: FC<ButtonATagProps> = ({className, children, href}) => {

    return (
        <a 
            className={cn( className )}
            href={href}
            target='_blank'
        >
            {children}
        </a>
    )
}
