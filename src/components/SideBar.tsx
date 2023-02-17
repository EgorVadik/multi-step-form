export default function SideBar() {
    return (
        <div className='bg-[url(/assets/images/bg-sidebar-desktop.svg)] p-5 text-white pr-12 bg-no-repeat'>
            <div className='flex items-center w-full'>
                <div className='rounded-full border border-white px-4 py-2 w-fit m-5'>
                    1
                </div>
                <div>
                    <span className='text-Coolgray text-sm'>STEP 1</span>
                    <p className='font-bold tracking-widest w-32'>YOUR INFO</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='rounded-full border border-white px-4 py-2 w-fit m-5'>
                    2
                </div>
                <div>
                    <span className='text-Coolgray text-sm'>STEP 2</span>
                    <p className='font-bold tracking-widest'>SELECT PLAN</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='rounded-full border border-white px-4 py-2 w-fit m-5'>
                    3
                </div>
                <div>
                    <span className='text-Coolgray text-sm'>STEP 3</span>
                    <p className='font-bold tracking-widest'>ADD-ONS</p>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='rounded-full border border-white px-4 py-2 w-fit m-5'>
                    4
                </div>
                <div>
                    <span className='text-Coolgray text-sm'>STEP 4</span>
                    <p className='font-bold tracking-widest'>SUMMARY</p>
                </div>
            </div>
        </div>
    )
}
