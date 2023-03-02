export const fetcher = async ({url, method, body, json = true}) => {
    const res = await fetch(url, {
        method,
        // body: body && JSON.stringify(body),
        ...(body && {body: JSON.stringify(body)}), // if body exists, spread it
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if(!res.ok) {
        console.log('res: ', res);
        throw new Error("API ERROR");
    }

    if (json) {
        const data = await res.json()
        return data.data
    }
}

export const register = (user) => {
    return fetcher({url: '/api/register', method: 'post', body: user})
}

export const signin = (user) => {
    return fetcher({url: '/api/signin', method: 'post', body: user})
}