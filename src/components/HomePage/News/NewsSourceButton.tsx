const NewsSourceButton = (props: { onClick: any, children: string }) => {
    return (
      <button onClick={props.onClick(props.children)} className="p-2 w-20 h-10 text-center rounded-md bg-rose-100 hover:bg-rose-200 text-rose-900 active:bg-rose-900 active:text-rose-300 text-sm font-medium">
        {props.children}
      </button>
    );
  };
  
  export default NewsSourceButton;
  