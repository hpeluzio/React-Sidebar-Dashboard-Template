import React, { createContext, useState, useContext } from 'react'

const ApiContext = createContext()

export default function ApiProvider({ children }) {
    const [apiData, setApData] = useState({
        base_url: 'http://127.0.0.1:8000/api/v1/sessoes/',
    })
    return (
        <ApiContext.Provider value={{ apiData, setApData }}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApi() {
    const { apiData, setApiData } = useContext(ApiContext)
    return { apiData, setApiData }
}
