import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: {},
    signIn: async () => { },
    signOut: () => { }
})

async function apiAuthenticate(data) {
    // mock implementation of api authentication and token generation
    const userList = await axios.get("http://localhost:3000/users")
    const user = userList.filter((u) => u.email === data.email)[0]

    if (!user) {
        return null
    }

    if (user.password !== data.password) {
        throw new Error("Email ou Senha inválido")
    }
    const userData = {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        token: "1234"
    }
    return userData

}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem("@nature365:userLogged")

        if (userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }
        return null

    })

    async function signIn(data) {

        const userData = await apiAuthenticate(data)
        setUser({ id: userData.id, email: userData.email, fullName: userData.fullName })

        localStorage.setItem("@nature365:userLogged", JSON.stringify({ id: userData.id, email: userData.email, fullName: userData.fullName }))
        localStorage.setItem("@nature365:token", JSON.stringify({ token: userData.token }))


    }

    function signOut() {
        setUser(null)
        localStorage.removeItem("nature365:userLogged")
        localStorage.removeItem("nature365:token")
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>

}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}