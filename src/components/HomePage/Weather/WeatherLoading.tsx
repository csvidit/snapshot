import React from "react"
import { Oval } from "react-loader-spinner";

const WeatherLoading = () =>
{
    return (<div className="w-full h-full flex flex-row space-x-1 justify-center items-center text-white">
        <p>Loading</p>
        <Oval
        height={30}
        width={30}
        color="#bae6fd"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#0ea5e9"
        strokeWidth={5}
        strokeWidthSecondary={5}/>
    </div>);
};

export default WeatherLoading;