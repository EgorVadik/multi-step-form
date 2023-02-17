import BackBtn from './BackBtn'
import NextBtn from './NextBtn'

export default function Third() {
    return (
        <div className='grid px-20 pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>Pick add-ons</h1>
            <p className='text-Coolgray mb-10 mt-3'>
                Add-ons help enhance your gaming experience.
            </p>

            <ul className='grid w-full gap-6'>
                <li>
                    {addOnCheckBox(
                        'Online service',
                        'Access to multiplayer games',
                        '+$1/mo',
                        true
                    )}
                </li>
                <li>
                    {addOnCheckBox(
                        'Larger storage',
                        'Exta 1TB of cloud save',
                        '+$2/mo',
                        true
                    )}
                </li>
                <li>
                    {addOnCheckBox(
                        'Customizable profile',
                        'Custom theme on your profile',
                        '+$2/mo'
                    )}
                </li>
            </ul>

            <div className='mt-10 flex items-center'>
                <div className='mr-auto'>
                    <BackBtn />
                </div>
                <NextBtn />
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
                <div className='inline-flex items-center p-5 rounded-lg w-full relative'>
                    <input
                        type='checkbox'
                        id={label}
                        name='hosting'
                        value={label}
                        className='peer mr-5 w-4 h-4'
                        defaultChecked={checked}
                    />
                    <label
                        htmlFor={label}
                        className='w-full h-full absolute inset-0 peer-checked:border-Purplishblue border rounded-lg cursor-pointer hover:border-Purplishblue border-Coolgray'
                    ></label>
                    <div className='grid grid-cols-3 items-center place-content-start w-full'>
                        <p className='text-lg font-medium capitalize col-span-2'>
                            {label}
                        </p>
                        <p className='row-span-2 w-full text-right'>{price}</p>
                        <p className='text-Coolgray w-full col-span-2'>
                            {desc}
                        </p>
                    </div>
                </div>
            </>
        )
    }
}
