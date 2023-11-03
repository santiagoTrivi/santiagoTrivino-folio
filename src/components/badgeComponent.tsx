import { FC } from "react";
import { tailwindMergeFnc } from "@/shared";


interface BadgeComponentProps extends React.HTMLAttributes<HTMLSpanElement> {
}

export const BadgeComponent: FC<BadgeComponentProps> = ({className, children,}) => {

    return (
        <span 
            className={tailwindMergeFnc('inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10', className )}
            
        >
            {children}
        </span>
    )
}