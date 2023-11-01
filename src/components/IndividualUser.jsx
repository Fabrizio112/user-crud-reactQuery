import { useDispatch } from "react-redux";
import { ButtonAction, TableData } from "../assets/StyledComponents/Components";
import { editForm } from "../redux/store/formSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserData } from "../helpers/fetchActions";

function IndividualUser({ user }) {
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: deleteUserData,
        onSuccess: () => {
            queryClient.invalidateQueries("users")
        }
    })

    const handleDelete = (user) => {
        mutate(user.id)

    }
    const handleEdit = (user) => {
        dispatch(editForm(user))
    }

    return (
        <tbody>
            <tr key={user.id}>
                <TableData>{user.id}</TableData>
                <TableData>{user.name}</TableData>
                <TableData>{user.username}</TableData>
                <TableData>{user.email}</TableData>
                <TableData><ButtonAction onClick={() => handleEdit(user)}>Edit</ButtonAction><ButtonAction onClick={() => handleDelete(user)}>Delete</ButtonAction></TableData>
            </tr>
        </tbody>);
}

export default IndividualUser;