import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext()

export default function CountProvider({ children }) {
    const [count, setCount] = useState(0)
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export function useCount() {
    const { count, setCount } = useContext(CountContext)
    return { count, setCount }
}
