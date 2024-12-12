import { useLocation } from "react-router-dom";
const PromoteAdminPage = () => {
    const location = useLocation();
    const users = location.state?.users;
    console.log(users);
    return (
        users &&(
        <section>
            <h1>Welcome to promote admin page</h1>
            <h2>User Lists</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                { users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><button>PROMOTE</button></td>
                    </tr>        
                    ))
                }
                
            </table>
            
        </section>
        )
    );
}

export default PromoteAdminPage;