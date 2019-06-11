import axios from 'axios';

const post = (url: string, data: any) => axios.post(url, data).then(res => console.log('res.data', res.data));

export { post };