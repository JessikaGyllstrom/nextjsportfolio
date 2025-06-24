import React from "react";
import Layouts from "../../components/Layouts";
import Fieldset from "../../components/Fieldset";
import {
  getDesigns,
  getProjects,
  getStoryboards,
} from "../../lib/sanity.utils";
import Player from "../../components/Player"; // Update the path if necessary
import { getUrlFromId } from "../../lib/sanity";
import Storyboard from "../../components/Storyboard";

export default async function Design() {
  const storyboard = await getStoryboards();
  const design = await getDesigns();
  const layout = await getProjects();

  return (
    <div className="mx-auto flex justify-center w-screen h-full md:mb-24">
      <div className="flex flex-col mt-1 mx-6">
        <Fieldset sectionTitle={"Design"} />
        <div className="flex items-center w-full justify-center">
          <div className="md:w-2/3 lg:w-1/2">
            {design[0].video?.asset?._ref ? (
              <Player url={getUrlFromId(design[0].video.asset._ref)} />
            ) : design[0].video?.asset?.url ? (
              <>
                <h3 className="text-gray-100 text-center pb-4 text-sm md:text-lg">
                  {design[0].title}
                </h3>
                <Player url={design[0].video.asset.url} />
                <p className="text-gray-50 text-xs py-4 px-4">
                  {design[0].name}
                </p>
              </>
            ) : (
              <p className="text-gray-50">
                No video available: {design[0].title}
              </p>
            )}
          </div>
        </div>
        <Fieldset sectionTitle={"Layouts"} />
        <Layouts layout={layout} />
        <Fieldset sectionTitle={"Storyboards"} />
        <div className="flex flex-col mx-auto w-full">
          <div className="max-w-md px-4 items-center">
            {storyboard.map((storyboard) => (
              <div key={storyboard._id} className="mb-2 w-full">
                <Storyboard key={storyboard._id} storyboard={storyboard} />
                {storyboard.images &&
                  storyboard.images
                    .sort((a, b) => b.rating - a.rating)
                    .map((image, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center mt-2"
                      >
                        <img
                          src={image.image.asset.url}
                          alt={image.description || "Storyboard Image"}
                          className=" w-full max-w-md h-auto object-cover"
                        />
                        <p className=" text-gray-50 text-center mt-2">
                          {image.description || "No description provided"}
                        </p>
                      </div>
                    ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
