
export const getTokenFromLS = () => {
    const token = localStorage.getItem("jwt-token");
    if (token)
        return token;
    else
        return '';
};