import { useState } from "react";
import Axios from "axios";

const Terminal = () => {
    const [code, setCode] = useState("");

    const handleOnChange = (event) => {
        setCode(event.target.value);
    };
    const handleSubmit = () => {
        Axios({
            url: "http://localhost:4000/executor/",
            method: "post",
            data: { code: code },
        })
            .then((data) => {
                console.log("Data sent: ", data);
            })
            .catch((err) => {
                console.log("Error occured: ", err);
            });
    };

    return (
        <div>
            <textarea
                name="CodeEditor"
                cols="30"
                rows="12"
                className="border-gray-300 w-full border-2 rounded-md"
                value={code}
                onChange={handleOnChange}
            ></textarea>
            <button
                onClick={handleSubmit}
                className="w-full my-2 text-white bg-gradient-to-bl from-slate-500 to-slate-800 py-3 px-4 rounded-md"
            >
                Submit
            </button>
        </div>
    );
};
export default Terminal;
