import { useDispatch, useSelector } from "react-redux";
import IndividualUser from "./IndividualUser";
import { Table, TableHead } from "../assets/StyledComponents/Components";
import { useEffect } from "react";
import { getUsers } from "../redux/store/usersSlice";
import { useUsers } from "../hooks/useusers";

function TableCrud() {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()
    const { usersData } = useUsers()

    useEffect(() => {
        if (usersData.data) {
            dispatch(getUsers(usersData.data))
        }
    }, [usersData.data])
    return (
        <Table>
            <thead>
                <tr>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Buttons</TableHead>
                </tr>
            </thead>
            {users && users.map(user => <IndividualUser key={user.id} user={user} />)}
        </Table>);
}

export default TableCrud;