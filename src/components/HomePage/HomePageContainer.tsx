const HomePageContainer = (props: {children: React.ReactNode}) => {
    return <div className="w-screen h-full min-h-screen flex flex-col space-y-6 justify-left bg-slate-200 dark:bg-slate-900">{props.children}</div>;
}

export default HomePageContainer;