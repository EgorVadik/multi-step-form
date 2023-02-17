import BackBtn from './BackBtn'
import NextBtn from './NextBtn'

export default function Second() {
    return (
        <div className='grid px-20 pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>
                Select your plan
            </h1>
            <p className='text-Coolgray mb-10 mt-3'>
                You have the option of monthly or yearly billing.
            </p>

            <ul className='grid w-full gap-6 md:grid-cols-3 mr-28'>
                <li>{planRadio('Arcade', '$9/mo', 'icon-arcade.svg', true)}</li>
                <li>{planRadio('Advanced', '$12/mo', 'icon-advanced.svg')}</li>
                <li>{planRadio('Pro', '$15/mo', 'icon-pro.svg')}</li>
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
                    />
                    <span className='w-2/5 h-4/5 bg-white absolute rounded-full left-[0.15rem] top-[0.15rem] peer-checked:left-8 transition-all duration-500'></span>
                </label>
                <label htmlFor='pricing' className='ml-5'>
                    Yearly
                </label>
            </div>

            <div className='mt-32 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn />
                </div>
                <NextBtn />
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
                />
                <label
                    htmlFor={label}
                    className='inline-flex items-center justify-between w-full p-5 border  rounded-lg cursor-pointer peer-checked:border-Purplishblue  border-Coolgray hover:border-Purplishblue'
                >
                    <div className='block'>
                        <img
                            src={`/assets/images/${icon}`}
                            alt='Arcade icon'
                            className='mb-10'
                        />
                        <p className='w-full text-lg font-medium capitalize'>
                            {label}
                        </p>
                        <p className='w-full text-Coolgray'>{price}</p>
                    </div>
                </label>
            </>
        )
    }
}
