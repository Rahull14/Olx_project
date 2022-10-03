import { createContext,useState} from 'react'

export const FirebaseContext =createContext(null)


export const AuthContext = createContext(null);//second method of creating a context. using for user authentication.


export default function Context({Children}){
     const [user,setUser] = useState(null)

     return(
        <AuthContext.Provider value={{user,setUser}}>
             {Children}
        </AuthContext.Provider>
     )
}