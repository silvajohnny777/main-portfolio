/*
import Simbi from '../assets/images/simbi.webp'
import Audit from '../assets/images/simbiose-auditoria.webp'
import Venvoir from '../assets/images/venvoir.webp'
import VirtualLH from '../assets/images/virtuallh.webp'
*/
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export interface MeTypes {
    name: string
    nickName: string
    birthDate: string
    birthYear: number
    address: string
    mail: string
    currentCompanyName: string
    currentCompanyURL: string
    social: socialTypes[]
    projects: projectsTypes[]
    resume: {
        education: educationTypes[]
        employment: employmentTypes[]
    }
}

export interface socialTypes {
    id: number
    mediaName: string
    icon: any
    link: string
}

export interface projectsTypes {
    id: number
    title: string
    link: string
    backgroundLink: string
    description: string
}

export interface educationTypes {
    id: number
    title: string
    period: string
    course: string
}

export interface employmentTypes {
    id: number
    title: string
    period: string
    responsibilities: string
}

export const Me: MeTypes = {
    name: 'Jonatha Silva',
    nickName: 'Johnny',
    birthDate: '1998-5-20',
    birthYear: 1998,
    address: 'Porto, Portugal',
    mail: 'silvajonatha777@gmail.com',
    currentCompanyName: 'Aubay',
    currentCompanyURL: 'https://www.aubay.pt/',
    resume: {
        education: [
            {
                id: 0,
                title: 'WEBSITE_TEXT_FMU',
                period: 'WEBSITE_TEXT_FMU_TIME',
                course: 'WEBSITE_TEXT_FMU_COURSE',
            },
            {
                id: 1,
                title: 'WEBSITE_TEXT_FATEC',
                period: 'WEBSITE_TEXT_FATEC_TIME',
                course: 'WEBSITE_TEXT_FATEC_COURSE',
            },
        ],
        employment: [
            {
                id: 0,
                title: 'WEBSITE_TEXT_AUBAY',
                period: 'WEBSITE_TEXT_AUBAY_TIME',
                responsibilities: 'WEBSITE_TEXT_AUBAY_CONTENT',
            },
            {
                id: 1,
                title: 'WEBSITE_TEXT_CRITICAL',
                period: 'WEBSITE_TEXT_CRITICAL_TIME',
                responsibilities: 'WEBSITE_TEXT_CRITICAL_CONTENT',
            },
            {
                id: 2,
                title: 'WEBSITE_TEXT_SIMBIOSE',
                period: 'WEBSITE_TEXT_SIMBIOSE_TIME',
                responsibilities: 'WEBSITE_TEXT_SIMBIOSE_CONTENT',
            },
            {
                id: 3,
                title: 'WEBSITE_TEXT_VIRTUALLH',
                period: 'WEBSITE_TEXT_VIRTUALLH_TIME',
                responsibilities: 'WEBSITE_TEXT_VIRTUALLH_CONTENT',
            },
            /*
                {
                    id: 4,
                    title: 'WEBSITE_TEXT_VENVOIR',
                    period: 'WEBSITE_TEXT_VENVOIR_TIME',
                    responsibilities: 'WEBSITE_TEXT_VENVOIR_CONTENT',
                },
            */
        ],
    },
    social: [
        {
            id: 0,
            mediaName: 'Linkedin',
            icon: <FaLinkedin className="mx-2" />,
            link: 'https://www.linkedin.com/in/silvajohnny777/',
        },
        {
            id: 1,
            mediaName: 'Github',
            icon: <FaGithub className="mx-2" />,
            link: 'https://github.com/silvajohnny777',
        },
        {
            id: 2,
            mediaName: 'Facebook',
            icon: <FaFacebook className="mx-2" />,
            link: 'https://www.facebook.com/silvajohnny777/',
        },
        {
            id: 3,
            mediaName: 'Instagram',
            icon: <FaInstagram className="mx-2" />,
            link: 'https://www.instagram.com/silvajohnny777/',
        },
    ],
    projects: [
        {
            id: 0,
            title: 'WEBSITE_TEXT_SIMBIOSE_LANDING_PAGE',
            link: 'https://simbiose.social',
            backgroundLink: 'https://raw.githubusercontent.com/silvajohnny777/static-helpers/master/simbi.webp',
            description: 'WEBSITE_TEXT_SIMBIOSE_LANDING_PAGE_DESCRIPTION',
        },
        /*
        {
            id: 1,
            title: 'WEBSITE_TEXT_SIMBIOSE_AUDITION_PAGE',
            link: 'https://analise.simbiose.social',
            backgroundLink: 'https://raw.githubusercontent.com/silvajohnny777/static-helpers/master/simbiose-auditoria.webp',
            description: 'WEBSITE_TEXT_SIMBIOSE_AUDITION_PAGE_DESCRIPTION',
        },
        */
        {
            id: 1,
            title: 'WEBSITE_TEXT_VENVOIR_HOMEPAGE',
            link: 'https://venvoir.com',
            backgroundLink: 'https://raw.githubusercontent.com/silvajohnny777/static-helpers/master/venvoir.webp',
            description: 'WEBSITE_TEXT_VENVOIR_HOMEPAGE_DESCRIPTION',
        },
        {
            id: 2,
            title: 'WEBSITE_TEXT_VIRTUALLH_WEBSITE',
            link: 'https://virtuallh.com',
            backgroundLink: 'https://raw.githubusercontent.com/silvajohnny777/static-helpers/master/virtuallh.webp',
            description: 'WEBSITE_TEXT_VIRTUALLH_WEBSITE_DESCRIPTION',
        },
    ],
}