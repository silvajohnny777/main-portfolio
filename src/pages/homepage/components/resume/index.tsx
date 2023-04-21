import React from 'react'
import { educationTypes, employmentTypes } from '../../../../../context/Me'
import { useTranslation } from 'react-i18next'

interface ResumePropTypes {
    education: educationTypes[]
    employment: employmentTypes[]
}

const Resume: React.FC<ResumePropTypes> = (props: ResumePropTypes) => {

    const { education, employment } = props
    const { t } = useTranslation('resume')

    return (

        <div className="section p-[3rem]">

            <div className="container max-w-[1200px] mx-auto">

                <h2 className="text-[2.125rem] font-[400] mb-[1.5rem]">{t(`WEBSITE_TEXT_RESUME`)}</h2>
                <p className="mb-[1rem] text-[1.125rem]">{t(`WEBSITE_TEXT_RESUME_CONTENT`)}</p>

                <div className="block">

                    <h2 className="text-[0.875rem] text-[#999] uppercase font-[700] my-[2.5rem] leading-[1.3 rem] tracking-[.3rem]">{t(`WEBSITE_TEXT_EDUCATION`)}</h2>

                    {
                        
                        education.map((education: educationTypes) => {
                            return (

                                <div key={education.id} className="resumeItem relative pl-[1.3rem] pb-[3.125rem] last:pb-0 border-l-2 border-primary ">
                                    <p className="resumeTitle text-primary font-[700] text-[0.875rem] uppercase pb-[.3rem]">{t(`${education.title}`)}</p>
                                    <p className="text-[0.875rem] text-[#999999] pb-[.3rem]">{t(`${education.period}`)}</p>
                                    <p className="text-[1rem]">{t(`${education.course}`)}</p>
                                </div>

                            )
                        })

                    }

                </div>

                <div className="block">

                    <h2 className="text-[0.875rem] text-[#999] uppercase font-[700] my-[2.5rem] leading-[1.3 rem] tracking-[.3rem]">{t(`WEBSITE_TEXT_EMPLOYMENT`)}</h2>

                    {
                        
                        employment.map((employment: employmentTypes) => {
                            return (

                                <div key={employment.id} className="resumeItem relative pl-[1.3rem] pb-[3.125rem] last:pb-0 border-l-2 border-primary ">
                                    <p className="resumeTitle text-primary font-[700] text-[0.875rem] uppercase pb-[.3rem]">{t(`${employment.title}`)}</p>
                                    <p className="text-[0.875rem] text-[#999999] pb-[.3rem]">{t(`${employment.period}`)}</p>
                                    <div className="text-[1rem]" dangerouslySetInnerHTML={{__html: t(`${employment.responsibilities}`).split('<p>').join('<p class="mb-[1rem] last:mb-[0]">')}} />
                                </div>

                            )
                        })

                    }

                </div>

            </div>

        </div>

    )

}

export default Resume