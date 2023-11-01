import { useQuery } from "@tanstack/react-query"
import { getUsersData } from "../helpers/fetchActions"


export const useUsers = () => {

    const usersData = useQuery({
        queryKey: ["users"],
        queryFn: () => getUsersData()
    })

    return {
        usersData
    }
}