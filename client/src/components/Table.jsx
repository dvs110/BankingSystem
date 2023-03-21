import React from "react";
const Table = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    console.log(curUser)
                    const {id, name, myaccount,balance} = curUser;
                    // const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{myaccount}</td>
                            <td>{balance}</td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default Table;