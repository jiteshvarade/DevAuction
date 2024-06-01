import React from "react";

export default function FeatureTile({ featureIcon, featureDetails }) {
  return (
    <div
      className="w-80 sm:aspect-video overflow-hidden flex flex-col gap-4 p-6 justify-center items-center bg-red-400 rounded-2xl text-white max-w-full"
      style={{
        border: "1px solid rgba(255, 255, 255, .1)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(15px)",
      }}
    >
      <div className="icon w-fit">{featureIcon}</div>
      <div className="details text-center">
        <div className="heading text-xl font-semibold">
          {featureDetails.heading}
        </div>
        <div className="description">{featureDetails.description}</div>
      </div>
    </div>
  );
}
