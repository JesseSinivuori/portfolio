import { createContext, useContext, useEffect, useState } from "react";


const defaultValue = { activeMenu: false };
export const DashboardContext = createContext<any | undefined>(defaultValue);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export default function ContextProvider({ children }: any) {

    const [isClicked, setIsClicked] = useState(initialState);
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [screenSize, setScreenSize] = useState(undefined);


    const handleClick = (clicked: any) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    useEffect(() => {
    }, []);


    return (
        <DashboardContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () =>
    useContext(DashboardContext);
