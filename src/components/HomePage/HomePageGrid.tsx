const HomePageGrid = (props: {children: React.ReactNode}) => {
    return <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-4 place-content-around">{props.children}</div>
};

export default HomePageGrid;