const Input = (props: {placeholder: string}) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="input input-bordered input-info w-full max-w-xs bg-black focus:bg-neutral-900 text-slate-200 rounded-xl"
      />
    </div>
  );
};

export default Input;
