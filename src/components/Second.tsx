import { useData, useUpdate } from '../context/DataContext'
import BackBtn from './BackBtn'
import NextBtn from './NextBtn'

type secondProps = {
    handlePage: (next: number) => void
}

export default function Second({ handlePage }: secondProps) {
    const data = useData()
    const setData = useUpdate()

    return (
        <div className='grid px-5 md:px-20 pt-5 md:pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>
                Select your plan
            </h1>
            <p className='text-Coolgray mb-3 md:mb-10 mt-3'>
                You have the option of monthly or yearly billing.
            </p>

            <ul className='grid w-full gap-6 md:grid-cols-3 mr-28'>
                <li>
                    {planRadio(
                        'Arcade',
                        `${data?.plan.opt === 'Monthly' ? '9' : '90'}`,
                        'icon-arcade.svg',
                        data?.plan.plan === 'Arcade'
                    )}
                </li>
                <li>
                    {planRadio(
                        'Advanced',
                        `${data?.plan.opt === 'Monthly' ? '12' : '120'}`,
                        'icon-advanced.svg',
                        data?.plan.plan === 'Advanced'
                    )}
                </li>
                <li>
                    {planRadio(
                        'Pro',
                        `${data?.plan.opt === 'Monthly' ? '15' : '150'}`,
                        'icon-pro.svg',
                        data?.plan.plan === 'Pro'
                    )}
                </li>
            </ul>

            <div className='flex place-content-center content-center mt-10'>
                <label htmlFor='pricing' className='mr-5'>
                    Monthly
                </label>
                <label
                    htmlFor='pricing'
                    className=' bg-Marineblue h-7 w-14 rounded-full relative cursor-pointer'
                >
                    <input
                        type='checkbox'
                        id='pricing'
                        className='sr-only peer'
                        checked={data?.plan.opt === 'Yearly'}
                        onChange={(e) => {
                            if (e.target.checked) {
                                const newData = {
                                    ...data,
                                    plan: {
                                        plan: data?.plan.plan,
                                        opt: 'Yearly',
                                        price: Number(data?.plan.price) * 10,
                                    },
                                    addOns: data?.addOns.map((addOn) => {
                                        return {
                                            addon: addOn.addon,
                                            price: Number(addOn.price) * 10,
                                        }
                                    }),
                                }
                                setData(newData)
                            } else {
                                const newData = {
                                    ...data,
                                    plan: {
                                        plan: data?.plan.plan,
                                        opt: 'Monthly',
                                        price: Number(data?.plan.price) / 10,
                                    },
                                    addOns: data?.addOns.map((addOn) => {
                                        return {
                                            addon: addOn.addon,
                                            price: Number(addOn.price) / 10,
                                        }
                                    }),
                                }
                                setData(newData)
                            }
                        }}
                    />
                    <span className='w-2/5 h-4/5 bg-white absolute rounded-full left-[0.15rem] top-[0.15rem] peer-checked:left-8 transition-all duration-500'></span>
                </label>
                <label htmlFor='pricing' className='ml-5'>
                    Yearly
                </label>
            </div>

            <div className='mt-5 md:mt-32 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn handlePage={handlePage} />
                </div>
                <NextBtn handlePage={handlePage} />
            </div>
        </div>
    )

    function planRadio(
        label: string,
        price: string,
        icon: string,
        checked: boolean = false
    ) {
        return (
            <>
                <input
                    type='radio'
                    id={label}
                    name='hosting'
                    value={label}
                    className='hidden peer'
                    defaultChecked={checked}
                    onChange={(e) => {
                        const newData = {
                            ...data,
                            plan: {
                                plan: e.target.value,
                                opt: data?.plan.opt,
                                price: price,
                            },
                        }
                        setData(newData)
                    }}
                />
                <label
                    htmlFor={label}
                    className='inline-flex items-center justify-between w-full p-2 lg:p-5 border rounded-lg cursor-pointer peer-checked:border-Purplishblue border-Coolgray hover:border-Purplishblue'
                >
                    <div className='md:block flex'>
                        <img
                            src={`/assets/images/${icon}`}
                            alt='Arcade icon'
                            className='md:mb-10'
                        />
                        <div className='md:ml-0 ml-5'>
                            <p className='w-full text-lg font-medium capitalize'>
                                {label}
                            </p>
                            <p className='w-full text-Coolgray'>
                                {data?.plan.opt === 'Monthly'
                                    ? `$${price}/mo`
                                    : `$${price}/yr`}
                            </p>
                        </div>
                    </div>
                </label>
            </>
        )
    }
}
