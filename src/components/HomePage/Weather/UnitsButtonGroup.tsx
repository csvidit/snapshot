import UnitsButton from "./UnitsButton";

const UnitsButtonGroup = (props: {setUnits: any}) => {
  return (
    <div className="flex flex-row space-x-2">
      <UnitsButton onClick={props.setUnits}>metric</UnitsButton>
      <UnitsButton onClick={props.setUnits}>imperial</UnitsButton>
    </div>
  );
};

export default UnitsButtonGroup;
