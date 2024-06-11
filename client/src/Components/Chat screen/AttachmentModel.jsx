import React, { useState } from "react";
import { GoFileSubmodule } from "react-icons/go";
import { MdChangeCircle } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function AttachmentModel({ className }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedFile({
          name: file.name,
          type: file.type,
          src: e.target.result,
        });
      };

      if (file.type.startsWith("image/")) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    }
  };

  const handleDelete = () => {
    setSelectedFile(null);
  };

  return (
    <div
      className={
        "absolute transition-all duration-500 max-w-full bg-white p-4 rounded-xl gap-4 " +
        className
      }
      style={{
        backgroundColor: "rgba(7, 38, 67, 1)",
        boxShadow: "0 2.93px 3.67px 1.47px rgba(121, 197, 239, 0.38)",
      }}
    >
      {selectedFile ? (
        <div className="w-64 h-fit overflow-hidden">
          {selectedFile && (
            <div className="file-item">
              {selectedFile.type.startsWith("image/") ? (
                <img
                  src={selectedFile.src}
                  alt={selectedFile.name}
                  className="h-36 object-cover w-full"
                />
              ) : (
                <div className="file-icon">
                  {/* <span>{selectedFile.name}</span> */}
                </div>
              )}
              <span className="file-name flex gap-2 items-center justify-between">{selectedFile.name} <MdDelete size="2.2rem" onClick={handleDelete} className="cursor-pointer"  /></span>
            </div>
          )}
        </div>
      ) : (
        <label className="flex items-center gap-2" htmlFor="fileSelect">
          <GoFileSubmodule size="1.5rem" />
          <div>Select file</div>
          <input
            type="file"
            multiple
            id="fileSelect"
            className="absolute left-0 opacity-0"
            onChange={handleFileChange}
          />
        </label>
      )}
    </div>
  );
}
