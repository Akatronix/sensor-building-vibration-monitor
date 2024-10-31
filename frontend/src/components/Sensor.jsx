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

  const date = new Date(mydate);
  const update = date.toString()

  
  async function deleteSensor(id) {
    try {
      await axios.delete(`https://sensor-building-vibration-monitor.vercel.app/sensor/delete/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

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
    <div className="lg:w-[300px] w-[90%] mx-auto md:w-[380px] bg-white md:h-[220px] h-[300px] m-1 my-4 p-3 rounded-md">
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
      <p className="md:text-sm text-lg text-gray-500 my-4" >Date: {update}</p>
      <div className="w-full flex items-center justify-between px-3">
        <MdDelete
          className="text-5xl md:text-2xl text-gray-500 hover:text-red-500 cursor-pointer"
          onClick={() => deleteSensor(id)}
        />
{/*         <HiFolderDownload
          className="text-5xl md:text-3xl text-gray-500 hover:text-black cursor-pointer"
          onClick={() => downloadFile(id, info)}
        /> */}
      
      </div>
    </div>
  );
};

export default Sensor;
