export const registerUserService = async ({user_name, email, password}) => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user_name, email, password})
    });


    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }
};






export const loginUserService = async ({email, password}) => {
    const response = await fetch(`${import.meta.env.VITE_URL_API}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });


    const json = await response.json();

    if(!response.ok) {
        throw new Error(json.message);
    }

    return json.data;  

};