import { FC } from "react";
import { tailwindMergeFnc } from "@/shared";


interface ButtonATagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {

}

export const ButtonATag: FC<ButtonATagProps> = ({className, children, href}) => {

    return (
        <a 
            className={tailwindMergeFnc( className )}
            href={href}
            target='_blank'
        >
            {children}
        </a>
    )
}
