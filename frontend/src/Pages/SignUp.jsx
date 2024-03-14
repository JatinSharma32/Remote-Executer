import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Event: ", e);
    };
    return (
        <div className="h-full flex flex-col justify-evenly items-center w-2/5 mx-auto  shadow-md px-10 py-8">
            <div className="flex flex-col items-center">
                <img src="/Design.png" className="w-20" alt="Logo" />
                <h3 className="mt-2 text-lg font-medium san">
                    Remote Executer
                </h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full my-2">
                <span>
                    <input
                        type="text"
                        name="Username"
                        placeholder="Username"
                        className="w-full my-2"
                    />
                </span>
                <span>
                    <input
                        type="text"
                        name="Password"
                        placeholder="Password"
                        className="w-full my-2"
                    />
                </span>
                <span>
                    <input
                        type="text"
                        name="Email"
                        placeholder="E-mail address"
                        className="w-full my-2"
                    />
                </span>
                <span>
                    <button className="w-full my-2">Sign Up</button>
                </span>
            </form>
            <div>
                <p className="text-sm text-gray-400 font-light">
                    Have an account?
                    <Link to="/login" className="text-blue-900 text-base">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default SignUp;
