import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bac44229-6d89-4751-9bb8-e457dc22d531'
    }
})
export const usersAPI={
    getUsers(pageNumber = 1, pageSize = 10){
        return instance.get(`users?page=${pageNumber}&
        count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => response.data)
    }
}

