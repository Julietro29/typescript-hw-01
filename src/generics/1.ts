import axios, { AxiosResponse } from 'axios';

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response: AxiosResponse<T> = await axios.get<T>(url);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
    }
}

interface IFetchedTodos {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

fetchData<IFetchedTodos[]>('https://jsonplaceholder.typicode.com/todos')
    .then((results) => {
        console.log('Received data:', results);
})
    .catch((error) => {
        console.error('Error fetching data:', error.message);
});