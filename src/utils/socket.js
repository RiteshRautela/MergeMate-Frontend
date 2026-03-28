import io from "socket.io-client"
import { Base_Url } from "../utils/constant"
export const createToSocketConnection = () =>{
    return io(Base_Url, {
        withCredentials: true,
    })
}
