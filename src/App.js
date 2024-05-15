import { exportComponentAsPNG } from "react-component-export-image";
import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("");

  const ProportionList = [
    {
      index: 0,
      proportion: "1:1",
      width: 700,
      height: 700,
    },
    {
      index: 1,
      proportion: "16:9",
      width: 700,
      height: 394,
    },
    {
      index: 2,
      proportion: "9:16",
      width: 700,
      height: 1244,
    },
    {
      index: 3,
      proportion: "4:3",
      width: 700,
      height: 525,
    },
  ];

  const Colors = [
    "orange",
    "amber",
    "cyan",
    "pink",
    "#af58afdb", //purple
    "teal",
    "#bc5353", //red
    "gray",
  ];

  const imageRef = useRef();
  const [count, setCount] = useState(false);
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState();
  const [bgColor, setBgColor] = useState("gray");
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleBtn = (data) => {
    console.log(data);
    setHeight(data.height);
    setWidth(data.width);
    setActive(data.index);
  };

  const handleBgColor = () => {
    // random number genrator
    const randomNumber = Math.floor(Math.random() * Colors.length);
    setCount(true);
    setBgColor(Colors[randomNumber]);
    console.log(bgColor);
  };

  return (
    <div
      className="flex text-white bg-main ml-4"
      style={{ height: "717px", width: "100%" }}
    >
      <div className="w-1/2  mt-10 mb-10 ml-9 mr-9   flex flex-col flex-center justify-center items-start ">
        <h1 className="text-2xl font-bold mb-6 ">Photo Retouch</h1>
        <p className="mb-6 font-mono text-balance">
          Our user-friendly app allows you to quickly and accurately resize your
          images while preserving the original aspect ratio, ensuring your
          photos look flawless at any size.
        </p>
        <hr className="border-2 border-white dark:border-2 dark:border-slate-200  w-1/3 mb-2" />
        <div className="mb-4">
          <label htmlFor="width" className="block font-medium mb-1">
            Width:
          </label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={handleWidthChange}
            className="border-4 text-gray-500 font-bold font-serif border-purple-200 dark:border-2 dark:border-slate-400  rounded px-2 py-1 mb-4"
          />
        </div>
        <div>
          <label htmlFor="height" className="block font-medium mb-1">
            Height:
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={handleHeightChange}
            className="border-4 text-gray-500 font-bold font-serif border-purple-200 dark:border-2 dark:border-slate-400 rounded px-2 py-1 mb-4"
          />
          <h1>Proportion</h1>
          <div className="rowBtn flex flex-row space-x-4 mb-4">
            {ProportionList.map((item) => (
              <button
                key={item.index}
                data-active={active === item.index ? "true" : "false"}
                onClick={() => handleBtn(item)}
                className="rounded w-4/1 p-1 border-2 border-slate-700 data-[active=true]:bg-blue-500"
              >
                {item.proportion}
              </button>
            ))}
          </div>
          <button
            onClick={handleBgColor}
            className="rounded w-4/1 p-2 border-4  border-white bg-slate-900 text-white font-serif font-bold"
          >
            Random Color
          </button>
        </div>
      </div>
      <div className=" w-1/2  mt-10 mb-10 ml-9 mr-9 flex flex-grow items-center justify-center overflow-hidden ">
        <div
          ref={imageRef}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: `${bgColor}`,
          }}
          className={`flex image  items-center justify-center  max-h-full max-w-full`}
        >
          <img src="flat.png" alt="Sample" className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
