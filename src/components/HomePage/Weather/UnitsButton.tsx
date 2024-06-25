const UnitsButton = (props: { onClick: any, children: string }) => {
  return (
    <button onClick={props.onClick(props.children)} className="p-2 w-20 h-10 text-center rounded-md bg-blue-100 hover:bg-blue-200 text-blue-900 active:bg-blue-900 active:text-blue-300 text-sm font-medium">
      {props.children}
    </button>
  );
};

export default UnitsButton;
