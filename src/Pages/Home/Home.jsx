import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <h1>this is home for : {authInfo.name}</h1>
        </div>
    );
};

export default Home;
