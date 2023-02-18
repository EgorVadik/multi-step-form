import { useData, useUpdate } from '../context/DataContext'
import BackBtn from './BackBtn'
import NextBtn from './NextBtn'

type thirdProps = {
    handlePage: (next: number) => void
}

export default function Third({ handlePage }: thirdProps) {
    const data = useData()
    const setData = useUpdate()

    return (
        <div className='grid px-5 md:px-20 pt-5 md:pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>Pick add-ons</h1>
            <p className='text-Coolgray mb-3 md:mb-10 mt-3'>
                Add-ons help enhance your gaming experience.
            </p>

            <ul className='grid w-full gap-2 md:gap-6 text-sm'>
                <li>
                    {addOnCheckBox(
                        'Online service',
                        'Access to multiplayer games',
                        `${data?.plan.opt === 'Monthly' ? '1' : '10'}`,
                        data?.addOns.some(
                            (addOn) => addOn.addon === 'Online service'
                        )
                    )}
                </li>
                <li>
                    {addOnCheckBox(
                        'Larger storage',
                        'Exta 1TB of cloud save',
                        `${data?.plan.opt === 'Monthly' ? '2' : '20'}`,
                        data?.addOns.some(
                            (addOn) => addOn.addon === 'Larger storage'
                        )
                    )}
                </li>
                <li>
                    {addOnCheckBox(
                        'Customizable profile',
                        'Custom theme on your profile',
                        `${data?.plan.opt === 'Monthly' ? '2' : '20'}`,
                        data?.addOns.some(
                            (addOn) => addOn.addon === 'Customizable profile'
                        )
                    )}
                </li>
            </ul>

            <div className='mt-10 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn handlePage={handlePage} />
                </div>
                <NextBtn handlePage={handlePage} />
            </div>
        </div>
    )

    function addOnCheckBox(
        label: string,
        desc: string,
        price: string,
        checked: boolean = false
    ) {
        return (
            <>
                <div className='inline-flex items-center p-2 md:p-5 rounded-lg w-full relative'>
                    <input
                        type='checkbox'
                        id={label}
                        name='hosting'
                        value={label}
                        className='peer mr-5 w-4 h-4'
                        defaultChecked={checked}
                        onChange={(e) => {
                            if (!e.target.checked) {
                                const newData = {
                                    ...data,
                                    addOns: data?.addOns.filter(
                                        (addOn) =>
                                            addOn.addon !== e.target.value
                                    ),
                                }
                                setData(newData)
                            } else {
                                const newData = {
                                    ...data,
                                    addOns: [
                                        //@ts-ignore
                                        ...data?.addOns,
                                        {
                                            addon: e.target.value,
                                            price: price,
                                        },
                                    ],
                                }
                                setData(newData)
                            }
                        }}
                    />
                    <label
                        htmlFor={label}
                        className='w-full h-full absolute inset-0 peer-checked:border-Purplishblue border rounded-lg cursor-pointer hover:border-Purplishblue border-Coolgray'
                    ></label>
                    <div className='grid grid-cols-4 md:grid-cols-3 items-center place-content-start w-full'>
                        <p className='text-lg font-medium md:col-span-2 col-span-3'>
                            {label}
                        </p>
                        <p className='row-span-2 w-full text-right text-Purplishblue font-medium'>
                            {data?.plan.opt === 'Monthly'
                                ? `$${price}/mo`
                                : `$${price}/yr`}
                        </p>
                        <p className='text-Coolgray w-full md:col-span-2 col-span-3'>
                            {desc}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
