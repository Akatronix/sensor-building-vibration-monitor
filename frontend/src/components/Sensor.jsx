import axios from "axios";
import { MdDelete } from "react-icons/md";
import { HiFolderDownload } from "react-icons/hi";

const Sensor = ({ x, y, z, id, name, info, mydate }) => {

// const timestamp = mydate;
// const date = new Date(timestamp);

// // Extract hours, minutes, and seconds
// const hours = date.getHours().toString().padStart(2, '0');
// const minutes = date.getMinutes().toString().padStart(2, '0');
// const seconds = date.getSeconds().toString().padStart(2, '0');

// // Format the time as HH:MM:SS
// const time24HourFormat = `${hours}:${minutes}:${seconds}`;

  // const date = new Date(mydate);
  // const update = date.toString()


  const date = new Date(mydate);
const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "UTC"  // Adjusts to UTC timezone
};

const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
// console.log(formattedDate); // "25/10/2024, 14:04:51"

  
  

  const downloadFile = async (id, info) => {
    try {
      const response = await fetch(
        `https://sensor-building-vibration-monitor.vercel.app/sensor/download/${id}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to download file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", info); // Specify the file name
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the link and releasing the blob URL
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  return (
    <div className="lg:w-[300px] w-[90%] mx-auto md:w-[380px] bg-white  h-full m-1 my-4 p-3 rounded-md">
      <p className="md:text-base text-xl font-bold text-zinc-500">{name}</p>

      <div className="w-full text-center flex items-center justify-evenly my-9">
        <div className="md:text-xl text-3xl  font-bold">
          <span className=" text-red-400 my-2">X:</span>
          <span> {x}</span>
        </div>
        <div className="md:text-xl text-3xl  font-bold">
          <span className=" text-blue-400 my-2">Y:</span>
          <span> {y}</span>
        </div>
        <div className="md:text-xl text-3xl font-bold">
          <span className=" text-green-400 my-2">Z:</span>
          <span> {z}</span>
        </div>
      </div>
      <p className="md:text-sm text-lg text-gray-500 my-4">ID: {id}</p>
      <p className="md:text-sm text-lg text-gray-500 my-4" >Date and Time: {formattedDate}</p>
      <div className="w-full flex items-center justify-between px-3">
        
{/*         <HiFolderDownload
          className="text-5xl md:text-3xl text-gray-500 hover:text-black cursor-pointer"
          onClick={() => downloadFile(id, info)}
        /> */}
      
      </div>
    </div>
  );
};

export default Sensor;
