import { Heading } from "../Others/Heading";
import Lang from "./Lang";

const Tools = () => {
  return (
    <div className="">
      <Heading head="TOOLS" position="left" />
      <ul className="
      list-none w-full m-auto text-center h-full min-h-[350px] flex flex-wrap justify-center items-center gap-0
      ">

        {/* {list-none bg-red-500 mt-10 w-full m-auto text-center h-full min-h-[350px] grid grid-rows-3  grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] p-3 items-center justify-center} */}
        <Lang>HTML</Lang>
        <Lang>CSS/SASS</Lang>
        <Lang>Tailwind</Lang>
        <Lang>JavaScript</Lang>
        <Lang>TypeScript</Lang>
        <Lang>React</Lang>
        <Lang>Redux-Toolkit</Lang>
        <Lang>Firebase</Lang>
        <Lang>Sanity CMS</Lang>
        <Lang>Framer-Motion</Lang>
        <Lang>NodeJS/Express</Lang>
        <Lang>MongoDB</Lang>
      </ul>
    </div>
  );
};

export default Tools;
