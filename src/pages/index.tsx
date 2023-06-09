import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Homepage from './homepage'

export default function Home() {
  return (
    <Homepage />
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'resume', 'projects']))
  }
});