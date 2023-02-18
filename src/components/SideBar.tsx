type sideBarProps = {
    step?: number
}

export default function SideBar({ step }: sideBarProps) {
    return (
        <div className='md:bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-[url(/assets/images/bg-sidebar-mobile.svg)] md:p-5 text-white md:pr-12 bg-no-repeat fixed inset-0 md:relative bg-contain z-0'>
            <div className='flex md:block place-content-center mt-5 md:mt-0'>
                <div className='flex items-center'>
                    <div
                        className={`rounded-full border border-white px-3 md:px-4 py-1 md:py-2 w-fit mx-2 md:m-5 font-medium ${
                            step === 1 && shadeStep()
                        }`}
                    >
                        1
                    </div>
                    <div className='hidden md:inline'>
                        <span className='text-Coolgray text-sm'>STEP 1</span>
                        <p className='font-bold tracking-widest w-32'>
                            YOUR INFO
                        </p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div
                        className={`rounded-full border border-white px-3 md:px-4 py-1 md:py-2 w-fit mx-2 md:m-5 font-medium ${
                            step === 2 && shadeStep()
                        }`}
                    >
                        2
                    </div>
                    <div className='hidden md:inline'>
                        <span className='text-Coolgray text-sm'>STEP 2</span>
                        <p className='font-bold tracking-widest'>SELECT PLAN</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div
                        className={`rounded-full border border-white px-3 md:px-4 py-1 md:py-2 w-fit mx-2 md:m-5 font-medium ${
                            step === 3 && shadeStep()
                        }`}
                    >
                        3
                    </div>
                    <div className='hidden md:inline'>
                        <span className='text-Coolgray text-sm'>STEP 3</span>
                        <p className='font-bold tracking-widest'>ADD-ONS</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div
                        className={`rounded-full border border-white px-3 md:px-4 py-1 md:py-2 w-fit mx-2 md:m-5 font-medium ${
                            step! >= 4 && shadeStep()
                        }`}
                    >
                        4
                    </div>
                    <div className='hidden md:inline'>
                        <span className='text-Coolgray text-sm'>STEP 4</span>
                        <p className='font-bold tracking-widest'>SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )

    function shadeStep() {
        return 'bg-Lightblue text-black'
    }
}
