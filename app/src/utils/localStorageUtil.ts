
export const getTokenFromLS = () => {
    const token = localStorage.getItem("jwt-token");
    if (token)
        return token;
    else
        return '';
};

export const removeTokenFromLS = () => {
    try {
        localStorage.removeItem("jwt-token");
    } catch {
        return;
    }
}
