const WindRecommendation = (props: { windSpeed: number }) => {
  const windSpeed = props.windSpeed;
  let windRecommendation = "";

  switch (true) {
    case windSpeed <= 0:
      windRecommendation = "There is no wind.";
      break;
    case windSpeed <= 2:
      windRecommendation = "The wind is calm, enjoy the weather outside.";
      break;
    case windSpeed <= 5:
      windRecommendation =
        "The wind is light, it's a good time for outdoor activities.";
      break;
    case windSpeed <= 10:
      windRecommendation =
        "The wind is moderate, you may want to stay indoors if you're sensitive to the wind.";
      break;
    case windSpeed <= 15:
      windRecommendation =
        "The wind is fresh, be careful if you're cycling or doing other outdoor activities.";
      break;
    case windSpeed <= 20:
      windRecommendation =
        "The wind is strong, it's better to avoid outdoor activities.";
      break;
    case windSpeed <= 25:
      windRecommendation =
        "The wind is very strong, avoid outdoor activities and take necessary precautions.";
      break;
    case windSpeed <= 32:
      windRecommendation =
        "The wind is a gale, stay indoors and secure any loose objects outside.";
      break;
    case windSpeed > 32:
      windRecommendation =
        "The wind is a storm, stay inside and take all necessary precautions.";
      break;
    default:
      console.log("Invalid wind speed value.");
  }
  return (
    <div className="flex flex-row space-x-0 w-full items-start text-slate-300 text-xs">
      <p>{windRecommendation}</p>
    </div>
  );
};

export default WindRecommendation;