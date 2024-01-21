import { useRouter } from 'next/router'
import en from '../../public/lang/en.js'
import vi from '../../public/lang/vi.js'

export const useTrans = () => {
    const { locale } = useRouter()

    const trans = locale === 'vi' ? vi : en

    return trans
}

export const changeLanguage = (lang) => {
    const { pathname, query } = useRouter()

    const regex = /\/(vi|en)/

    const path = pathname.replace(regex, `/${lang}`)

    return { path, query }
}
