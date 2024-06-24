import React , { createContext, useContext, useMemo} from "react"
import { io } from "socket.io-client"
import SERVER_URL from "../contants.mjs"

const SocketContext = createContext(null)

export const useSocket = ()=>{
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props)=>{
    const socket = useMemo(()=> io(`${SERVER_URL}`),[])
    // const socket = useMemo(()=> io(`${import.meta.env.VITE_WEB_SERVER_URL}`),[])

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}
