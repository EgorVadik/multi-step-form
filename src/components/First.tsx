import NextBtn from './NextBtn'

export default function First() {
    return (
        <div className='grid px-20 pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>
                Personal Info
            </h1>
            <p className='text-Coolgray mb-10 mt-3'>
                Please provide your name, email address, and phone number.
            </p>

            {input('Name', 'name', 'e.g. Stephen King')}
            {input(
                'Email Address',
                'email',
                'e.g. stephenking@lorem.com',
                'email'
            )}
            {input('Phone Number', 'phone', 'e.g. +1 234 567 890')}

            <div className='ml-auto mt-[5.5rem]'>
                <NextBtn />
            </div>
        </div>
    )

    function input(
        label: string,
        id: string,
        ph: string,
        type: string = 'text'
    ) {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input
                    id={id}
                    type={type}
                    className='border-2 rounded-md p-2 focus:border-Purplishblue focus:outline-none my-3 font-medium'
                    placeholder={ph}
                />
            </>
        )
    }
}
