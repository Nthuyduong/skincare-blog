export const ROUTER = {
    TEST: '/test',
    HOME: '/',
    DESTINATION: '/destination',
    SUBDES: '/sub-des',
    ARTICLE: '/article',
    ABOUT: '/about',
    GALLERY: '/gallery',
    CONTACT: '/contact',
    SEARCH: '/search',
    ADMIN: '/admin',
    ADDASHBOARD: '/admin/dashboard',
    ADPOST: '/admin/posts',
    ADCATEGORY: '/admin/category',
    ADLOGIN: '/admin/login',
    CREATEPOST: '/admin/posts/create',
    SKINTYPE: '/skintype',
    ADSUBCATE: '/admin/sub-category',
    NOTFOUND: '/notfound',
    TESTREVIEW: '/test_review',
    INGREDIENT: '/ingredient',
    INGREDIENTDETAIL: '/ingredients/detail',
    TESTPOST: '/test_post',
    ADINGREDIENT: '/admin/ingredient'

}

export const ADMIN_ROUTER = {
    CATEGORY: '/admin/category',
    INGREDIENT: '/admin/ingredient',
    POSTS: '/admin/posts',
    CREATE_POST: '/admin/posts/create',
    UPDATE_POST: '/admin/posts/[id]',
    SUBCATEGORY: '/admin/sub-category',
    DASHBOARD: '/admin/dashboard',
    LOGIN: '/admin/login',
    HOME: '/admin',
}

export const ADMIN_ROUTER_WITH_AUTH = [
    ADMIN_ROUTER.CATEGORY,
    ADMIN_ROUTER.INGREDIENT,
    ADMIN_ROUTER.POSTS,
    ADMIN_ROUTER.CREATE_POST,
    ADMIN_ROUTER.UPDATE_POST,
    ADMIN_ROUTER.SUBCATEGORY,
    ADMIN_ROUTER.DASHBOARD,
    ADMIN_ROUTER.HOME
]

export const ADMIN_ROUTERS = [
    ADMIN_ROUTER.CATEGORY,
    ADMIN_ROUTER.INGREDIENT,
    ADMIN_ROUTER.POSTS,
    ADMIN_ROUTER.CREATE_POST,
    ADMIN_ROUTER.UPDATE_POST,
    ADMIN_ROUTER.SUBCATEGORY,
    ADMIN_ROUTER.DASHBOARD,
    ADMIN_ROUTER.LOGIN,
    ADMIN_ROUTER.HOME
]