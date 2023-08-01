import { createContext, useState } from "react"

const Context = createContext()
export default Context

export const ContextProvider = ({ children }) => {
  const [context, setContext] = useState()

  return (
    <Context.Provider 
      value={{ context, setContext }}>
      {children}
    </Context.Provider>
  )
}
