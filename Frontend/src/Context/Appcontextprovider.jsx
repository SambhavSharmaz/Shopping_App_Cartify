import { useEffect, useState } from "react"
import { AppContext } from "./Appcontext"
const Mycontextprovider = ({ children }) => {
    const [count, setcount] = useState(0)
    const [user, setuser] = useState({ isAuthenticated: false });
    const [appLoading, setappLoading] = useState(false);

    const getuser = async () => {
        try {
            setappLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
                method: 'GET',
                credentials: 'include',
            })
            const result = await response.json()
            const { isSuccess, data } = result
            if (isSuccess == true) {
                setuser({
                    isAuthenticated: true,
                    ...data.user, //spread operator
                })
            }
            else {
                alert("Please Login Again")
            }

        }
        catch (err) {
            alert("User not found" + err.message)
            // window.open("/signin")
        }
        finally {
            setappLoading(false);
        }
    }

    useEffect(() => {
        getuser();
    }, []);

    const valueOBJ = {
        count,
        setcount,
        user,
        appLoading,
    }
    return (
        <AppContext.Provider value={valueOBJ}>
            {children}
        </AppContext.Provider>
    )
}

export { Mycontextprovider }