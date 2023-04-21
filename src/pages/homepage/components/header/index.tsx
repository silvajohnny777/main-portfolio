import React from 'react'
import Image from 'next/image'
import { Me, socialTypes } from '../../../../../context/Me'
import { useTranslation } from 'react-i18next'

interface HeaderPropsTypes {
    social: socialTypes[]
}

const Header: React.FC<HeaderPropsTypes> = (props: HeaderPropsTypes) => {

    const { t } = useTranslation('header')

    const { social } = props

    const calculateAge = (birthDate: string) => {
        const birthday = new Date(birthDate);         
        const diff = Date.now() - birthday.getTime(); 
        const ageDate = new Date(diff);         
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    return (

        <div className="section relative flex items-center sm:items-end justify-center h-[50vh] bg-header_bg_image bg-no-repeat bg-cover bg-center min-h-[480px]">
            <div className="container z-10 h-[320px] max-w-[1200px] flex flex-col md:flex-row">
                <div className="flex relative w-[100%] sm:w-[314px] h-[100%] sm:h-[380px] justify-center">
                    <Image className="sm:absolute left-0 box w-[200px] sm:w-full h-[200px] sm:h-full bg-cover object-cover bg-center rounded-[50%] sm:rounded-[6px] shadow-inner" src='/me.webp' alt='me' width="314" height="380" />
                </div>
                <div className="sm:ml-[50px] pb-[50px] text-[#ffffff] sm:block flex flex-col items-center">
                    <h1 className="font-[100] text-[3rem]">Jonatha Silva</h1>
                    <p className="font-[300] text-[1.125rem] -mt-[0.75rem] mb-[1rem]">{t(`WEBSITE_TEXT_BASIC_INFO_ABOUT`)}</p>
                    <div className="mt-[20px] font-[300] text-[1.5rem] hidden sm:block">
                        <p className="my-2"><strong className="opacity-[.7] font-[300]">{t(`WEBSITE_TEXT_AGE`)}:</strong> {calculateAge(Me.birthDate)} {t(`WEBSITE_TEXT_YEARS_OLD`)}</p>
                        <p className="my-2"><strong className="opacity-[.7] font-[300]">{t(`WEBSITE_TEXT_ADDRESS`)}:</strong>  {Me.address}</p>
                        <p className="my-2"><strong className="opacity-[.7] font-[300] ">{t(`WEBSITE_TEXT_WORKING_AT`)}:</strong> <a className="hover:underline-offset-4" href={`https://www.aubay.pt/`} target="_blank" rel="noreferrer">Aubay</a></p>
                    </div>
                    <div className="flex pt-4 text-[1.5rem]">
                        {
                            social?.map((social: socialTypes) => {
                                return (
                                    <a className="hover:rotate-[360deg] hover:scale-[1.5] ease-in duration-200" key={social.id} href={`${social.link}`} target='_blank' rel="noreferrer">{social.icon}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Header