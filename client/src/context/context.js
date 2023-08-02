import { createContext, useContext, useState } from 'react'

const Context = createContext()
export const useAppContext = () => useContext(Context)

const initialState = {}

export const ContextProvider = ({ children }) => {
	const [state, setState] = useState(initialState)

	return (
		<Context.Provider value={{ state, setState }}>
      {children}
    </Context.Provider>
	)
}
