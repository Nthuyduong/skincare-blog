import { useRouter } from 'next/router'
import en from '../../public/lang/en.js'
import vi from '../../public/lang/vi.js'

export const useTrans = () => {
    const { locale } = useRouter()

    const trans = locale === 'vi' ? vi : en

    return trans
}

export const changeLanguage = (nextLocale) => {
    const router = useRouter()
    const { pathname, asPath, query } = router

    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: nextLocale })
}
