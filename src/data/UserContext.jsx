import React from 'react';
import { createContext, useState } from "react";

export const UserContext = createContext();
// console.log("UserContext", UserContext);

export const UserProvider = ({children}) => {
    const [LoggedInUser, setLoggedInUser] = useState("");
    return(
        <UserContext.Provider value={{LoggedInUser, setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    )
    

}