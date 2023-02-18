import { useData } from '../context/DataContext'
import BackBtn from './BackBtn'

type fourthProps = {
    handlePage: (next: number) => void
}

export default function Fourth({ handlePage }: fourthProps) {
    const data = useData()

    function getTotal() {
        let total = 0
        data?.addOns.forEach((addOn) => {
            total += Number(addOn.price)
        })
        return Number(data?.plan.price) + total
    }

    return (
        <div className='grid px-5 md:px-20 pt-5 md:pt-10 pb-2 text-Marineblue text-sm'>
            <h1 className='md:text-3xl text-2xl font-bold'>Finishing up</h1>
            <p className='text-Coolgray mb-3 md:mb-10 mt-3'>
                Double-check everything looks OK before confirming.
            </p>

            <div className='grid grid-cols-3 items-center'>
                <p className='text-lg font-medium col-span-2'>
                    {data?.plan.plan} ({data?.plan.opt})
                </p>
                <p className='font-bold text-lg text-right row-span-2'>
                    {data?.plan.opt === 'Monthly'
                        ? `$${data?.plan.price}/mo`
                        : `$${data?.plan.price}/yr`}
                </p>
                <button
                    className='w-fit underline text-Coolgray hover:text-Purplishblue'
                    onClick={() => handlePage(-2)}
                >
                    Change
                </button>
            </div>

            <hr className='my-5' />

            {data?.addOns.map((addOn, i) => {
                return (
                    <div key={i} className='flex mb-4 items-center'>
                        <p className='mr-auto text-Coolgray'>{addOn.addon}</p>
                        <p>
                            {data?.plan.opt === 'Monthly'
                                ? `$${addOn.price}/mo`
                                : `$${addOn.price}/yr`}
                        </p>
                    </div>
                )
            })}

            <div className='flex mt-4 items-center'>
                <p className='mr-auto text-Coolgray'>
                    Total (per {data?.plan.opt === 'Monthly' ? 'month' : 'year'}
                    )
                </p>
                <p className='md:text-2xl text-lg font-bold text-Purplishblue'>
                    {data?.plan.opt === 'Monthly'
                        ? `$${getTotal()}/mo`
                        : `$${getTotal()}/yr`}
                </p>
            </div>

            <div className='mt-10 md:mt-36 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn handlePage={handlePage} />
                </div>
                <button
                    className='bg-Purplishblue font-medium text-White rounded-lg px-7 py-3 hover:bg-[#948cfa]'
                    onClick={() => handlePage(1)}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}
