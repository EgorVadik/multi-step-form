import BackBtn from './BackBtn'
import NextBtn from './NextBtn'

export default function Fourth() {
    return (
        <div className='grid px-20 pt-10 pb-2 text-Marineblue'>
            <h1 className='text-3xl font-bold'>Finishing up</h1>
            <p className='text-Coolgray mb-10 mt-3'>
                Double-check everything looks OK before confirming.
            </p>

            <div className='grid grid-cols-3 items-center'>
                <p className='text-lg font-medium col-span-2'>
                    Arcade (Monthly)
                </p>
                <p className='font-bold text-lg text-right row-span-2'>$9/mo</p>
                <button className='w-fit underline text-Coolgray'>
                    Change
                </button>
            </div>

            <hr className='my-5' />

            <div className='flex mb-4 items-center'>
                <p className='mr-auto text-Coolgray'>Online service</p>
                <p>+1/mo</p>
            </div>

            <div className='flex mb-4 items-center'>
                <p className='mr-auto text-Coolgray'>Larger storage</p>
                <p>+1/mo</p>
            </div>

            <div className='flex mt-4 items-center'>
                <p className='mr-auto text-Coolgray'>Total (per month)</p>
                <p className='text-2xl font-bold text-Purplishblue'>+12/mo</p>
            </div>

            <div className='mt-36 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn />
                </div>
                <button className='bg-Purplishblue font-medium text-White rounded-lg px-7 py-3'>
                    Confirm
                </button>
            </div>
        </div>
    )
}
