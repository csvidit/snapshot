const LandingPageContainer = (props: {children: React.ReactNode}) => {
    return <div className="w-screen h-screen flex flex-col space-y-6 justify-center bg-slate-200 dark:bg-slate-900">{props.children}</div>;
}
export default LandingPageContainer;