import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()
export const useAppContext = () => useContext(Context)

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

	return (
		<Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
	)
}
