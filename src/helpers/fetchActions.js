import { usersApiAxios } from "../api/usersApi,"

export const getUsersData = async () => {
    let { data } = await usersApiAxios.get()
    return data
}

export const addUserData = async (user) => {
    let { data } = await usersApiAxios.post("", user)
    return data
}

export const deleteUserData = async (id) => {
    let { data } = await usersApiAxios.delete(`/${id}`)
}

export const editUserData = async (user) => {
    let { data } = await usersApiAxios.put(`/${user.id}`, user)
    return data
}