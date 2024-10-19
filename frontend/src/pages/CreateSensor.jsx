import React, { useState } from "react";
import axios from "axios";

const CreateSensor = () => {
  const [data, setData] = useState({
    name: "",
    x: "",
    y: "",
    z: "",
    info: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState("");
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, x, y, z, info } = data;
    if (!name || !x || !y || !z || !info)
      return setInfo("please fill in those fields!");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://sensor-building-vibration-monitor.vercel.app/create",
        data
      );

      setTimeout(() => {
        setIsLoading(false);
        setInfo(response.data.message);
      }, 500);

      console.log(info);
    } catch (error) {
      console.error("Error:", error);
      setInfo(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setData({});
      }, 500);
    }
  };
  return (
    <div className="w-full flex-1 h-[80vh] py-6">
      <div className="container mx-auto h-full flex items-center justify-center">
        {isLoading ? (
          <div className="w-[80%] h-[80%] bg-white rounded-md p-4 px-8 flex items-center justify-center relative">
            <div>
              <p className={isLoading ? "loading" : ""}></p>
              <p className="bottom-[35%] left-[47%] absolute z-10 ">
                Loading...
              </p>
            </div>
          </div>
        ) : (
          <div className="w-[80%]  h-full bg-white rounded-md p-4 px-8">
            <h1 className="md:text-xl lg:pl-10 text-2xl font-bold ">
              Create Sensor
            </h1>
            <div className="md:flex w-full items-start justify-center gap-1 flex-wrap">
              <div className="md:w-full lg:w-[480px] w-full">
                <div className="Md:my-4 my-2">
                  <label className="text-md text-gray-500 font-bold">
                    Sensor Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 mt-2 md:w-[80%] w-full mb-4"
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="md:my-4 my-2">
                  <label className="text-md text-gray-500 font-bold">
                    default X value:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 mt-2 md:w-[80%] w-full mb-4"
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        x: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="md:my-4 my-2">
                  <label className="text-md text-gray-500 font-bold">
                    default Y value:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 mt-2 md:w-[80%] w-full mb-4"
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        y: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="lg:w-2/4 w-full">
                <div className="md:my-4 my-2">
                  <label className="text-md text-gray-500 font-bold">
                    default Z value:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 mt-2 md:w-[80%] w-full mb-4"
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        z: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="md:my-4 my-2">
                  <label className="text-md text-gray-500 font-bold">
                    file to save to:
                  </label>
                  <br />
                  <input
                    type="text"
                    className="border-2 rounded-md py-2 px-4 mt-2 md:w-[80%] w-full mb-4"
                    onChange={(e) =>
                      setData((prevData) => ({
                        ...prevData,
                        info: e.target.value,
                      }))
                    }
                  />
                </div>
                <p
                  className={`my-4 ${
                    info == "sensor created successfully..."
                      ? "text-green-500"
                      : "text-red-400"
                  }`}
                >
                  {info}
                </p>
              </div>
            </div>
            <div
              className="bg-blue-400 hover:bg-blue-500 text-white py-3 w-[100%] text-nowrap rounded-md mr-2 text-center"
              onClick={(e) => handleSubmit(e)}
            >
              Create
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateSensor;
