import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Homepage from './homepage'

export default function Home() {
  return (
    <Homepage />
  )
}

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header', 'resume', 'projects']))
  }
});