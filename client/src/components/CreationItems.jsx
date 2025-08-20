import React, { useState } from "react";
import Markdown from "react-markdown";

const CreationItems = ({ items }) => {
  const [expended, setExpended] = useState(false);

  return (
    <div
      onClick={() => setExpended(!expended)}
      className=" p-4 max-w-5xl text-sm bg-white border border-gray-300 rounded-lg cursor-pointer "
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{items.prompt}</h2>
          <p className="text-gray-500">
            {items.type} - {new Date(items.created_at).toLocaleDateString()}
          </p>
          <button className="bg-[#EFF6FF] border border-[#BFDBFE] text -[#1E40AF] px-4 py-1 rounded-full">
            {" "}
            {items.type}
          </button>
        </div>
      </div>
      {expended && (
        <div>
          {items.type === "Image" ? (
            <div>
              <img
                src={items.content}
                alt="Image"
                className="mt-3 w-full max-w-md"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw"> 
                <Markdown>{items.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItems;
