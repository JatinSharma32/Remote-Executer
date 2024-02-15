import { useSearchParams } from "react-router-dom";
import {
    FilterButton,
    ChangePageButton,
} from "../components/PracticePageButtons";
import QuestionRow from "../components/QuestionRow";
import Axios from "axios";
import { useEffect, useState } from "react";

const Diffculity = new Map();

Diffculity.set("HARD", "text-red-400");
Diffculity.set("MEDIUM", "text-yellow-400");
Diffculity.set("EASY", "text-green-400");

Object.freeze(Diffculity);

const Practise = () => {
    const [searchParams] = useSearchParams();
    const [questions, setQuestions] = useState(null);

    useEffect(() => {
        Axios({
            url: `http://localhost:4000/practise?size=${
                searchParams.get("size") || 10
            }&pageSet=${searchParams.get("pageSet") || 0}`,
        }).then((data) => {
            setQuestions(data.data.data);
        });
    }, [searchParams]);

    return (
        <div className="flex flex-col h-full">
            <div className="text-gray-500  font-medium text-2xl flex flex-shrink-0 flex-grow-0 items-center justify-start my-2 py-2">
                <FilterButton
                    size={50}
                    pageSet={searchParams.get("pageSet") ?? 0}
                >
                    Large Page
                </FilterButton>
                <FilterButton
                    size={25}
                    pageSet={searchParams.get("pageSet") ?? 0}
                >
                    Medium Page
                </FilterButton>
                <FilterButton
                    size={10}
                    pageSet={searchParams.get("pageSet") ?? 0}
                >
                    Small Page
                </FilterButton>
            </div>
            <div className="text-gray-500  font-medium text-2xl flex flex-shrink-0 flex-grow-0 justify-center my-2 py-2">
                <h2 className=" text-gray-500 w-full font-medium text-xl flex flex-col">
                    Questions
                </h2>
            </div>
            <div className="flex flex-col w-full flex-shrink-0 flex-grow items-center justify-start my-2 py-2">
                <h2 className=" text-gray-500  w-full font-medium text-xl flex flex-col">
                    Problems
                </h2>
                <table className=" flex flex-col w-full text-left ">
                    <thead className="border-b border-b-slate-20 w-full">
                        <tr>
                            <th className="p-3 text-gray-500 font-light w-52">
                                Number
                            </th>
                            <th className="p-3 text-gray-500 font-light w-1/2">
                                Title
                            </th>
                            <th className="p-3 text-gray-500 font-light w-52">
                                Solution
                            </th>
                            <th className="p-3 text-gray-500 font-light w-52">
                                Diffculity
                            </th>
                            <th className="p-3 text-gray-500 font-light w-52">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-black font-normal text-sm">
                        {/* Try adding shimmer effect to the questions */}
                        {questions &&
                            questions.map((data, i) => {
                                const diffculity = {
                                    text: data.diffculity,
                                    color: Diffculity.get(data.diffculity),
                                };
                                return (
                                    <QuestionRow
                                        key={i}
                                        diffculity={diffculity}
                                        data={data}
                                        index={i}
                                    />
                                );
                            })}
                    </tbody>
                    {/* how to manage the Column width */}
                </table>
            </div>
            <div className="text-gray-500  font-medium text-2xl flex flex-shrink-0 flex-grow-0 items-center justify-between my-2 py-2">
                {/* pageSet is the last index of pervious request, if null then 0 will be set */}
                <ChangePageButton
                    size={searchParams.get("size") ?? 10}
                    pageSet={searchParams.get("pageSet") ?? 0}
                    move={"backward"}
                >
                    Previous Page
                </ChangePageButton>
                <ChangePageButton
                    size={searchParams.get("size") ?? 10}
                    pageSet={searchParams.get("pageSet") ?? 0}
                    move={"forward"}
                >
                    Next Page
                </ChangePageButton>
            </div>
        </div>
    );
};
export default Practise;
