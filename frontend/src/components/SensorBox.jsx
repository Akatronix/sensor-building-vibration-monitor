import { useEffect, useState } from "react";
import Sensor from "./Sensor";

const SensorBox = () => {
  const [myValue, setMyValues] = useState([]);


  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://sensor-building-vibration-monitor.vercel.app/sensor");
        const json = await response.json();
        setMyValues(json.data);
      } catch (error) {
        console.log(error);
      }
    }

    const intervalId = setInterval(getData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-zinc-100 flex-1 h-full py-6 flex items-start justify-center">
      <div className="flex flex-wrap lg:w-[1240px] md:w-[780px]">
        {myValue.map((value, index) => (
          <Sensor
            x={value.x}
            y={value.y}
            z={value.z}
            id={value._id}
            key={index}
            name={value.name}
            info={value.info}
            mydate={value.date}
          />
        ))}
      </div>
    </div>
  );
};

export default SensorBox;
