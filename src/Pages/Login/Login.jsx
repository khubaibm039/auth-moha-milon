import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="hero min-h-[92.9vh] bg-base-200">
            <div className="hero-content grid">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="text-center mb-4">
                        {" "}
                        <p>
                            New here please{" "}
                            <Link className=" btn-link" to={"/register"}>
                                register
                            </Link>
                        </p>
                    </div>
                    <p>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-ghost"
                        >
                            Google
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
