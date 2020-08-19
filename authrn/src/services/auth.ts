interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}


export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'lalallalalalla',
                user: {
                    name: 'Diego',
                    email: 'lucas@gmail.com'
                },
            });
        }, 2000);
    });
}