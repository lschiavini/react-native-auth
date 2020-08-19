export function signIn() {
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