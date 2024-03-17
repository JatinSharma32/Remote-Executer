import { Link } from "react-router-dom";

const Courses = ({ url }) => {
    const TotalImages = 4;
    const style = `py-4 my-6 rounded-2xl flex flex-col items-center shadow-md justify-center w-80 h-72 bg-gradient-to-br bg-[length:350px_210px] bg-no-repeat  hover:shadow-xl overflow-hidden`;
    return (
        <div className="overflow-hidden max-h-96 p-7">
            <div
                className={style}
                style={{
                    backgroundImage: `url('/Homepage/${Math.floor(
                        Math.random() * TotalImages
                    )}.png')`,
                }}
            >
                <div className="relative w-full px-4 py-1 font-semibold drop-shadow-lg text-white text-4xl bottom-8">
                    Course Name
                </div>
                <div className="w-full  text-center flex h-24 bg-white relative items-start justify-start pl-6 pt-2 shadow-inner top-20">
                    <div className="p-2">
                        <h3 className="text-2xl font-semibold">
                            {Math.ceil(Math.random() * 20)}
                        </h3>
                        <p className="text-sm text-gray-500 font-light">
                            Total Chapters
                        </p>
                    </div>
                </div>
            </div>
            <Link
                to={`/course/${url}`}
                className="h-16 rounded-full w-16 bg-white border-4 border-slate-300 flex items-center drop-shadow-xl justify-center cursor-pointer  hover:scale-105 bottom-36 left-56 relative z-10"
            >
                {" "}
                View
            </Link>
        </div>
    );
};

export default Courses;
