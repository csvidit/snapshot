import NewsSourceButton from "./NewsSourceButton";

const NewsSourceButtonGroup = (props: {setSource: any}) => {
  return (
    <div className="flex flex-row space-x-2">
      <NewsSourceButton onClick={props.setSource}>bbc news</NewsSourceButton>
      <NewsSourceButton onClick={props.setSource}>reuters</NewsSourceButton>
    </div>
  );
};

export default NewsSourceButtonGroup;
