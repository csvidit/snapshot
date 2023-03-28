const NewsContainer = (props: {children: React.ReactNode}) => {
    return <div className="flex flex-col space-y-1 mt-4 rounded-xl col-span-2 font-light h-max">{props.children}</div>
};

export default NewsContainer;