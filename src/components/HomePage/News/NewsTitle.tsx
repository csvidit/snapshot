import { HiOutlineBolt } from "react-icons/hi2";

const NewsTitle = () => {
  return (
    <div className="flex flex-row space-x-1 items-center text-rose-500 pl-2">
      <HiOutlineBolt size="1.5em"></HiOutlineBolt>
      <p className="text-2xl ">Top Stories</p>
    </div>
  );
};

export default NewsTitle;
