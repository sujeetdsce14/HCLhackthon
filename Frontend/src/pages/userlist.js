import React,{useEffect,useState} from "react";
import axios from "axios";

// Example static data, replace with props or API data as needed
const users = [
  { id: 1, email: "john@example.com", role: "Doctor", shiftPreference: "Morning", contact: "1234567890" },
  { id: 2, email: "jane@example.com", role: "Nurse", shiftPreference: "Afternoon", contact: "9876543210" },
  { id: 3, email: "bob@example.com", role: "Technician", shiftPreference: "Night", contact: "5555555555" },
];


function UserList() {

    // const [users, setUsers] = useState([]);
//      const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/v1/staff');
//                 console.log("Fetched users:", response);
//                 // setUsers(response.data.users);

//             } catch (error) {
//                 console.error("Error fetching user data:", error);
//             }
//         };
//  useEffect(() => {
//         fetchUsers();
//     }, []);
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-primary">User List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped align-middle">
          <thead className="table-primary">
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Shift Preference</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.shiftPreference}</td>
                <td>{user.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
