import { useState } from "react"
import { AppContext } from "./Appcontext"
const Mycontextprovider = ({children}) => {
    const [count,setcount] = useState(0)
    const [user,setuser] = useState([])
    const valueOBJ = {
        count,
        setcount,
        user,
    }
    return(
        <AppContext.Provider value={valueOBJ}>
            {children}
        </AppContext.Provider>
    )
}

export {Mycontextprovider}