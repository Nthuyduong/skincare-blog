const LANGUAGE = 'language';
const THEME = 'theme';

export const getLanguage = () => {
    if (typeof window !== 'undefined') {
        const language = localStorage.getItem(LANGUAGE);
        if (language) {
            return JSON.parse(language);
        }
    }
    return 'en';
}

export const setLanguage = (language) => {
    localStorage.setItem(LANGUAGE, JSON.stringify(language));
}

export const getTheme = () => {
    if (typeof window !== 'undefined') {
        const theme = localStorage.getItem(THEME);
        if (theme) {
            return theme;
        }
    }
    return 'light';
}

export const setTheme = (theme) => {
    localStorage.setItem(THEME, JSON.stringify(theme));
}

export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

export const getUser = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
    }
    return {};
}

export const removeUser = () => {
    localStorage.removeItem('user');
}

export const saveUserComment = (user) => {
    localStorage.setItem('userComment', JSON.stringify(user));
}

export const getUserComment = () => {
    if (typeof window !== 'undefined') {
        const user = localStorage.getItem('userComment');
        if (user) {
            return JSON.parse(user);
        }
    }
    return null;
}

export const removeUserComment = () => {
    localStorage.removeItem('userComment');
}