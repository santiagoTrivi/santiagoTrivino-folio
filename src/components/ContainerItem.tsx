import { ReactNode } from "react"


interface ContainerProps {
    children: ReactNode;
    containerStyle: string;
}

export const ContainerItem: React.FC<ContainerProps> = ({children, containerStyle}) => {
    return(
        <div className={containerStyle}>
            {children}
        </div>
    )
}