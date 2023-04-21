import React from 'react'
import { useTranslation } from 'react-i18next'

const Projects:React.FC = () => {

    const { t } = useTranslation('projects')

    return (

        <div className="section p-[3rem]">
            <div className="container max-w-[1200px] mx-auto">
                <h2 className="text-[2.125rem] font-[400] mb-[1.5rem]">{t(`WEBSITE_TEXT_PROJECTS`)}</h2>
                <p className="mb-[1rem] text-[1.125rem]">{t(`WEBSITE_TEXT_PROJECTS_CONTENT`)}</p>
            </div>
        </div>

    )

}

export default Projects