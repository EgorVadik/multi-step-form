type backBtnProps = {
    handlePage: (next: number) => void
}

export default function BackBtn({ handlePage }: backBtnProps) {
    return (
        <button
            className='text-Coolgray font-medium hover:text-Marineblue'
            onClick={() => handlePage(-1)}
        >
            Go Back
        </button>
    )
}
