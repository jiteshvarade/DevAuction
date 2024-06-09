import React from "react";
import ProjectTile from "./ProjectTile";

export default function ProfilePosts({ className }) {
  const projects = [
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
    {
      title: "Wonder kids project",
      imgSrc: "",
      viewCount: 34,
    },
  ];
  return (
    <div className={className}>
      <div
        className={
          "bg-[rgb(5,8,27)] h-fit w-full p-4 xl:columns-sm columns-[190px] gap-8 pt-8 " + ` ${projects.length !== 0 ? "" : "hidden"}`
        }
      >
        {projects?.map((elem, index) => {
          return (
            <ProjectTile
              imgSrc={elem.imgSrc}
              title={elem.title}
              viewsCount={elem.viewCount}
              key={"project " + index}
            />
          );
        })}
      </div>
      <div className={'text-center text-gray-400 w-full p-4 ' + ` ${projects.length == 0 ? "" : "hidden"}`}>Nothing to see here</div>
    </div>
  );
}
