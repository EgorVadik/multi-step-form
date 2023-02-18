import { ChangeEvent, useState } from 'react'
import { useData, useUpdate } from '../context/DataContext'
import NextBtn from './NextBtn'

type firstProps = {
    handlePage: (next: number) => void
}

export default function First({ handlePage }: firstProps) {
    const data = useData()
    const setData = useUpdate()

    const [nameErr, setNameErr] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [phoneErr, setPhoneErr] = useState(false)

    function vaildateInput() {
        if (!data?.personal.name) {
            setNameErr(true)
        }
        if (!data?.personal.email) {
            setEmailErr(true)
        }
        if (!data?.personal.phone) {
            setPhoneErr(true)
        }
        if (!ValidateEmail(data?.personal.email)) {
            setEmailErr(true)
            return false
        }
        if (
            data?.personal.name &&
            data?.personal.email &&
            data?.personal.phone
        ) {
            const newData = {
                ...data,
                personal: {
                    name: data?.personal.name,
                    email: data?.personal.email,
                    phone: data?.personal.phone,
                },
            }
            setData(newData)
            return true
        }

        return false
    }

    function ValidateEmail(mail: string | undefined) {
        if (mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                return true
            }
        }
        return false
    }

    return (
        <div className='grid px-5 md:px-20 pt-5 md:pt-10 pb-2'>
            <h1 className='text-3xl font-bold text-Marineblue'>
                Personal Info
            </h1>
            <p className='text-Coolgray mb-5 md:mb-10 mt-3'>
                Please provide your name, email address, and phone number.
            </p>

            {input(
                'Name',
                'name',
                'e.g. Stephen King',
                data?.personal.name,
                (e: ChangeEvent<HTMLInputElement>) => {
                    if (nameErr) setNameErr(false)
                    const newData = {
                        ...data,
                        personal: {
                            name: e.target.value,
                            email: data?.personal.email,
                            phone: data?.personal.phone,
                        },
                    }
                    setData(newData)
                },
                nameErr
            )}
            {input(
                'Email Address',
                'email',
                'e.g. stephenking@lorem.com',
                data?.personal.email,
                (e: ChangeEvent<HTMLInputElement>) => {
                    if (emailErr) setEmailErr(false)
                    const newData = {
                        ...data,
                        personal: {
                            name: data?.personal.name,
                            email: e.target.value,
                            phone: data?.personal.phone,
                        },
                    }
                    setData(newData)
                },
                emailErr,
                'email'
            )}
            {input(
                'Phone Number',
                'phone',
                'e.g. +1 234 567 890',
                data?.personal.phone,
                (e: ChangeEvent<HTMLInputElement>) => {
                    if (phoneErr) setPhoneErr(false)
                    const newData = {
                        ...data,
                        personal: {
                            name: data?.personal.name,
                            email: data?.personal.email,
                            phone: e.target.value,
                        },
                    }
                    setData(newData)
                },
                phoneErr
            )}

            <div className='ml-auto mt-5 md:mt-[5.5rem]'>
                <NextBtn
                    handlePage={handlePage}
                    validateInput={vaildateInput}
                />
            </div>
        </div>
    )

    function input(
        label: string,
        id: string,
        ph: string,
        value: string | undefined,
        onchange: (e: ChangeEvent<HTMLInputElement>) => void,
        err: boolean,
        type: string = 'text'
    ) {
        return (
            <>
                <label htmlFor={id} className='flex'>
                    <p>{label}</p>
                    {err && (
                        <p className='ml-auto text-Strawberryred font-medium'>
                            This field is required
                        </p>
                    )}
                </label>
                <input
                    id={id}
                    type={type}
                    className={`border-2 rounded-md p-2 focus:border-Purplishblue focus:outline-none my-3 font-medium ${
                        err && 'border-Strawberryred'
                    }`}
                    placeholder={ph}
                    value={value}
                    onChange={(e) => onchange(e)}
                />
            </>
        )
    }
}
