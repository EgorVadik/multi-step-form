import { createContext, useContext, useState } from 'react'

type providerProps = {
    children: React.ReactNode
}

export type dataType = {
    personal: {
        name: string
        email: string
        phone: string
    }
    plan: {
        plan: string
        opt: string
        price: string
    }
    addOns: {
        addon: string
        price: string
    }[]
}

const DataContext = createContext<dataType | undefined>(undefined)
const UpdateContext = createContext<any>(undefined)

export function useData() {
    return useContext(DataContext)
}

export function useUpdate() {
    return useContext(UpdateContext)
}

export function DataProvider({ children }: providerProps) {
    const [data, setData] = useState({
        personal: {
            name: '',
            email: '',
            phone: '',
        },
        plan: {
            plan: 'Arcade',
            opt: 'Monthly',
            price: '9',
        },
        addOns: [
            {
                addon: 'Online service',
                price: '1',
            },
            {
                addon: 'Larger storage',
                price: '2',
            },
        ],
    })

    return (
        <DataContext.Provider value={data}>
            <UpdateContext.Provider value={setData}>
                {children}
            </UpdateContext.Provider>
        </DataContext.Provider>
    )
}
