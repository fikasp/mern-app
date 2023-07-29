import { createContext } from "react"
import { useCrud } from './useCrud'

const Context = createContext()
export default Context

export const Provider = ({ children }) => {

  return (
    <Context.Provider 
      value={{ ...useCrud() }}>
      {children}
    </Context.Provider>
  )
}
