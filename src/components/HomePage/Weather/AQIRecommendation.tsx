const AQIRecommendation = (props: { aqi: number }) => {
  const aqi = props.aqi;
  let aqiRecommendation = "";
  switch (aqi) {
    case 1:
      aqiRecommendation =
        "Enjoy outdoor activities and open windows to let fresh air in";
      break;
    case 2:
      aqiRecommendation =
        "Reduce outdoor activities if you are particularly sensitive to air pollution";
      break;
    case 3:
      aqiRecommendation =
        "Avoid prolonged outdoor activities if you have respiratory or heart problems";
      break;
    case 4:
      aqiRecommendation =
        "Everyone should reduce prolonged outdoor activities and limit exposure to pollutants by closing windows and using air filters";
      break;
    case 5:
      aqiRecommendation =
        "Stay indoors as much as possible and avoid outdoor activities to protect your health";
      break;
    default:
      aqiRecommendation = "Invalid Value";
  }

  return (
    <div className="flex flex-row space-x-0 w-full items-start text-slate-100 text-sm font-light">
      <p>{aqiRecommendation}</p>
    </div>
  );
};

export default AQIRecommendation;
