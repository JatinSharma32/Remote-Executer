/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FilterButton = ({ size, children }) => {
    return (
        <Link
            to={`?size=${size}`}
            className="text-sm font-light text-black bg-slate-100 py-2 px-4 mx-2 cursor-pointer rounded-3xl"
        >
            {children}
        </Link>
    );
};
const ChangePageButton = ({ size, pageSet, move, children }) => {
    if (move === "forward") {
        pageSet = parseInt(pageSet) + parseInt(size);
    } else if (move === "backward") {
        // here we are blocking the page from going negative
        pageSet =
            parseInt(pageSet) - parseInt(size) < 0
                ? 0
                : parseInt(pageSet) - parseInt(size);
    }
    return (
        <Link
            to={`?size=${size}&pageSet=${pageSet}`}
            className="text-sm font-light text-black bg-slate-100 py-2 px-4 mx-2 cursor-pointer rounded-3xl"
        >
            {children}
        </Link>
    );
};

export { FilterButton, ChangePageButton };
