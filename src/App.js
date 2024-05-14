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

  const Colors = ["orange", "amber", "cyan", "pink", "purple", "teal", "red"];

  const imageRef = useRef();
  const [width, setWidth] = useState(700);
  const [height, setHeight] = useState();
  const [bgColor, setBgColor] = useState("teal");
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
    console.log(`${data.index} btn is clicked`);
    setActive(data.index);
  };
  const handleBgColor = () => {
    // random number genrator
    const randomNumber = Math.floor(Math.random() * Colors.length);
    console.log(Colors[randomNumber]);
    setBgColor(Colors[randomNumber]);
  };

  return (
    <div className="flex" style={{ height: "717px", width: "100%" }}>
      <div className="w-1/2  mt-10 mb-10 ml-9 mr-9  bg-slate-100 flex flex-col flex-center justify-center items-center ">
        <h1 className="text-2xl font-bold mb-10">Photo Retouch</h1>
        <div className="mb-4">
          <label htmlFor="width" className="block font-medium mb-1">
            Width:
          </label>
          <input
            type="number"
            id="width"
            value={width}
            onChange={handleWidthChange}
            className="border border-gray-300 rounded px-2 py-1"
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
            className="border border-gray-300 rounded px-2 py-1 mb-4"
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
            className="rounded w-4/1 p-1 border-2 border-slate-700 bg-red-900 font-serif font-bold"
          >
            Random Color
          </button>
        </div>
      </div>
      <hr className="border-2 border-white" />
      <div className=" w-1/2  mt-10 mb-10 ml-9 mr-9 flex flex-grow items-center justify-center overflow-hidden ">
        <div
          ref={imageRef}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`flex bg-${bgColor}-600 image  items-center justify-center  max-h-full max-w-full`}
        >
          <img src="flat.png" alt="Sample" className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
