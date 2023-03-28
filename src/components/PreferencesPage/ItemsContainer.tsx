const ItemsContainer = (props: {children: React.ReactNode}) =>
{
    return(<div className="h-full w-3/4 self-center">{props.children}</div>);
}

export default ItemsContainer;