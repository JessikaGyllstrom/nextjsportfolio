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
import AnimateL from "../../components/AnimateL";
import AnimateR from "../../components/AnimateR";

export default async function Design() {
  const storyboard = await getStoryboards();
  const design = await getDesigns();
  const layout = await getProjects();

  return (
    <div className="mx-auto flex justify-center w-screen h-full md:mb-24">
      <div className="flex flex-col my-8 mx-6">
        <Fieldset sectionTitle={"Design"} />
        <div className="flex items-center w-full justify-center mb-6">
          <div className="md:w-2/3 lg:w-1/2">
            <AnimateL>
              {design[0].video?.asset?._ref ? (
                <Player url={getUrlFromId(design[0].video.asset._ref)} />
              ) : design[0].video?.asset?.url ? (
                <>
                  <h3 className="text-gray-100 text-center py-4 px-2 text-sm">
                    {design[0].title}
                  </h3>
                  <Player url={design[0].video.asset.url} />
                  <p className="text-gray-50 text-xs py-4 px-4 text-center">
                    {design[0].name}
                  </p>
                </>
              ) : (
                <p className="text-gray-50">No video available</p>
              )}
            </AnimateL>
            <AnimateR>
              <div className="border-t border-gray-700 w-full my-4">
                <h3 className="text-gray-100 text-center py-4 px-2 text-sm">
                  {design[1].title}
                </h3>
                <p className="text-gray-50 text-center mb-4">
                  {design[1].name}
                </p>
                <img
                  src={design[1].image?.asset?.url}
                  alt={design[1].title}
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            </AnimateR>
          </div>
        </div>
        <Fieldset sectionTitle={"Layouts"} />
        <AnimateR>
          <Layouts layout={layout} />
        </AnimateR>
        <AnimateL>
          <Fieldset sectionTitle={"Storyboards"} />
          <div className="flex flex-col mx-auto w-full items-center">
            <div className="max-w-md px-4 items-center">
              {storyboard.map((storyboard) => (
                <div key={storyboard._id}>
                  <Storyboard key={storyboard._id} storyboard={storyboard} />
                  {storyboard.images &&
                    storyboard.images
                      .sort((a, b) => b.rating - a.rating)
                      .map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <img
                            src={image.image.asset.url}
                            alt={image.description || "Storyboard Image"}
                            className=" w-full max-w-md h-auto object-cover"
                          />
                          <p className=" text-gray-50 text-center my-2">
                            {image.description || "No description provided"}
                          </p>
                        </div>
                      ))}
                </div>
              ))}
            </div>
          </div>
        </AnimateL>
      </div>
    </div>
  );
}
