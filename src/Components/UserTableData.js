import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function UserTableData(props) {
  const { userData, editUser, deleteUser } = props;
  console.log("=======UserTableData", userData);
  return (
    <div>
      {userData && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">mobileNo</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(userData)?.map((key, i) => (
              <tr key={i}>
                <td>{userData[key].firstName}</td>
                <td>{userData[key].lastName}</td>
                <td>{userData[key].mobileNo}</td>
                <td>{userData[key].gender}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      editUser(key);
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      deleteUser(key);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default UserTableData;
