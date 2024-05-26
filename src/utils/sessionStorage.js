export const setUserLetter = (letter) => {
    sessionStorage.setItem('userLetter', letter);
}

export const getUserLetter = () => {
    if (typeof window !== 'undefined') {
        const userLetter = sessionStorage.getItem('userLetter');
        if (userLetter) {
            return userLetter;
        }
    }
    return '';
}