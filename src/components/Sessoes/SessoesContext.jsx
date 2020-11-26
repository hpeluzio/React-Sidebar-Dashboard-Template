import React, { createContext, useState, useContext } from 'react'

const SessoesContext = createContext()

export default function SessoesProvider({ children }) {
    const [sessoes, setSessoes] = useState([])
    return (
        <SessoesContext.Provider value={{ sessoes, setSessoes }}>
            {children}
        </SessoesContext.Provider>
    )
}

export function useSessoes() {
    const { sessoes, setSessoes } = useContext(SessoesContext)
    return { sessoes, setSessoes }
}
