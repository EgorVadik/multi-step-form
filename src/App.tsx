import { useState } from 'react'
import Final from './components/Final'
import First from './components/First'
import Fourth from './components/Fourth'
import Second from './components/Second'
import SideBar from './components/SideBar'
import Third from './components/Third'

function App() {
    const [step, setStep] = useState(1)

    function currentPage() {
        switch (step) {
            case 1:
                return <First />
            case 2:
                return <Second />
            case 3:
                return <Third />
            case 4:
                return <Fourth />
            default:
                return <Final />
        }
    }

    return (
        <main className='grid min-h-screen items-center place-content-center font-ubuntu text-body bg-Magnolia'>
            <div className='flex bg-White p-4 rounded-xl shadow-lg'>
                <SideBar />
                {currentPage()}
            </div>
        </main>
    )
}

export default App
