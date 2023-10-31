export const generalRequest = async (url, method = 'GET', body = undefined) => {
    try {
        const objectRequest = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        if ((method !== 'GET' || method !== 'DELETE') && body) {
            objectRequest['body'] = JSON.stringify({ name: form.name.value, email: form.email.value })
        }

        const response = await fetch(url, objectRequest);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}