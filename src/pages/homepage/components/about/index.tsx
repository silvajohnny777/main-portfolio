import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'

const About: React.FC = () => {
    const { t } = useTranslation('common')

    const downloadCv = (fileUrl: string) => {
        var a = document.createElement("a");
        a.href = fileUrl;
        a.setAttribute("download", 'Jonatha Silva');
        a.click();
    }

    return (

        <div className="section mt-[50px] p-[3rem] border-b-2 border-b-solid border-[#e5e5e5]">
            <div className="container max-w-[1200px] mx-auto">
                <h2 className="text-[2.125rem] font-[400] mb-[1.5rem]">{t(`WEBSITE_TEXT_ABOUT_ME`)}</h2>
                <p className="mb-[1rem] text-[1.125rem]">{t(`WEBSITE_TEXT_ABOUT_ME_CONTENT`)}</p>
                <button className="flex items-center hover:bg-primary hover:text-white ease-in duration-100 rounded-full border-2 border-solid border-primary px-[12px] py-[8px] text-primary font-[500] uppercase" onClick={() => downloadCv(t(`CV_DOWNLOAD_LINK`))}>
                    <FaCloudDownloadAlt />
                    {t(`WEBSITE_TEXT_DOWNLOAD_CV`)}
                </button>
            </div>
        </div>

    )

}

export default About