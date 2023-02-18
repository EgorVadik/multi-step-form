import { useState } from 'react'
import Final from './components/Final'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import SideBar from './components/SideBar'
import Third from './components/Third'

import { DataProvider } from './context/DataContext'

function App() {
    const [step, setStep] = useState(1)

    const data = {
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
                addon: 'Online Service',
                price: '1',
            },
            {
                addon: 'Larger Storage',
                price: '2',
            },
        ],
    }

    function currentPage() {
        switch (step) {
            case 1:
                return <First handlePage={handlePage} />
            case 2:
                return <Second handlePage={handlePage} />
            case 3:
                return <Third handlePage={handlePage} />
            case 4:
                return <Fourth handlePage={handlePage} />
            default:
                return <Final />
        }
    }

    function handlePage(next: number) {
        setStep(step + next)
    }

    return (
        <DataProvider>
            <main className='grid min-h-screen items-center place-content-center font-ubuntu text-body bg-Magnolia transition-all duration-500'>
                <div className='flex flex-wrap md:flex-nowrap bg-White md:p-4 rounded-xl shadow-lg relative w-[90%] md:w-full m-auto'>
                    <SideBar step={step} />
                    <div className=' bg-White rounded-xl relative'>
                        <div>{currentPage()}</div>
                    </div>
                </div>
            </main>
        </DataProvider>
    )
}

export default App
