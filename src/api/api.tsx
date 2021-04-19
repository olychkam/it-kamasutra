import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'bac44229-6d89-4751-9bb8-e457dc22d531'
    }
})
export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&
        count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.post(`follow/${userId}`, {},)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string|null, password: string|null, rememberMe = false) {
        debugger
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})

    }
}


