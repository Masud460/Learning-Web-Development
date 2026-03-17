import useAuth from "../hooks/useAuth";

function Profile() {
    const {user} = useAuth()

    if (!user) return <p>Please login</p>;

    return <h1>Welcome, { user.username }</h1>
}
export default Profile;