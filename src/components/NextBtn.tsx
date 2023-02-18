import { useData } from '../context/DataContext'

type nextBtnProps = {
    handlePage: (next: number) => void
    validateInput?: () => boolean
}

export default function NextBtn({ handlePage, validateInput }: nextBtnProps) {
    const data = useData()
    return (
        <button
            className='hover:bg-[#194a89] text-White font-medium rounded-lg px-7 py-3 bg-Marineblue'
            onClick={() => {
                if (validateInput && validateInput!()) {
                    console.log(data)
                    handlePage(1)
                } else if (!validateInput) {
                    console.log(data)
                    handlePage(1)
                }
            }}
        >
            Next Step
        </button>
    )
}
