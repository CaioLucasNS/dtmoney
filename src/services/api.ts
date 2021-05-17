import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

// baseURL -> É o endereço que se repete em todas as requests
// headers -> cabeçalhos pra colocar algum token de autenticação ou coisas do tipo