import React from "react";

export default function Storyboard({ storyboard }) {
  return (
    <div key={storyboard._id} className="mb-2">
      <h3 className="text-md text-gray-50 mb-2 text-center">
        {storyboard.title}
      </h3>
      <p className="rounded-sm text-gray-50 text-left mt-2">
        {storyboard.problem || "No description provided"}
      </p>
      {storyboard.concepts && (
        <ul className="text-gray-50 text-xs text-left mt-2 list-disc list-inside">
          {storyboard.concepts.map((concept, index) => (
            <li key={index} className="py-1">
              {concept}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
