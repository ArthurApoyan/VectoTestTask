import {FC, ReactNode} from 'react';
import MainMenu from "../MainMenu/MainMenu.tsx";

type LayoutProps = {
    children:ReactNode
}
const Layout:FC<LayoutProps> = ({children}) => {
    return (
        <>
            <MainMenu/>
            {children}
        </>
    );
};

export default Layout;