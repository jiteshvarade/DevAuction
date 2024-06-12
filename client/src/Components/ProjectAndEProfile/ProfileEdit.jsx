import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import "./project.css";
import GradientBtn from "../Buttons/GradientBtn";

function ProfileEdit(e) {
  const skills = [];
  function skillpush() {
    document.querySelectorAll(".skills").forEach((e) => skills.push(e.value));
    console.log(skills);
  }

  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2016/11/22/21/26/asian-girl-1850617_1280.jpg"
  );
  function handelImageUpload(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  const [proImg, setProImg] = useState(
    '"https://i.pinimg.com/236x/fe/af/94/feaf944be5749d956396ebc4662ca39e.jpg"'
  );
  return (
    <>
      <div className="border-2 bg-[#0f1325]  border-red-400   w-[100%] text-white">
        <div id="content-box" className="w-full md:px-20 py-10">
          <div className="flex w-full lg:w-[40%] self-start items-center text-lg md:text-2xl pl-10 gap-6 mb-5">
            <div onClick={() => {}} className="text-2xl md:text-4xl" id="">
              <FaLongArrowAltLeft />
            </div>
            <h2 className="font-semibold">Edit Profile</h2>
          </div>

          <div>
            <div className="flex-wrap-reverse md:flex-nowrap flex items-center w-full gap-3">
              <div className="w-full lg:w-[80%] min-w-[300px]">
                <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[10%] py-3 mb-4">
                  <p className="font-semibold text-xl">Title</p>
                  <input
                    type="text"
                    name=""
                    placeholder="Jyoti Tyagi"
                    className="w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]"
                    id=""
                  />
                </div>

                <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[10%] py-3 mb-4">
                  <p className="font-semibold text-xl">Gendar</p>
                  <input
                    type="text"
                    name=""
                    placeholder="Male or Female"
                    className="w-full rounded-full px-4 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]"
                    id=""
                  />
                </div>
              </div>
              <div className="mx-auto w-fit md:w-[20%] md:mx-0 mb-4 relative">
                <div>
                  <img
                    src={image}
                    className="max-h-[200px] rounded-lg mx-auto"
                    alt=""
                  />
                  <div className="absolute bottom-[30px]  right-[-10%] lg:right-[15%] ">
                    <div className="flex w-[50px] ">
                      <div className="">
                        <div className="bg-white absolute top-0 w-[30px] h-[30px] flex  justify-center items-center  rounded-full">
                          <span className="text-black text-2xl">
                            {/* {"sourceCodeFile" || 'Upload Source Code'} */}
                            <MdModeEditOutline />
                          </span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handelImageUpload}
                          // ref={fileref}
                          className="absolute  inset-0 border-none outline-none rounded-full  w-[30px] h-[30px] opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[10%] py-2 mb-2">
              <p className="font-semibold text-xl">Bio</p>
              <textarea
                name=""
                className="w-full resize-none rounded-full px-6 py-1 border-none outline-none bg-[#062c4a] shadow-[inset_0_0_5px_white]"
                id=""
              ></textarea>
            </div>
            <div>
              <div className="w-full px-4 rounded-xl bg-[#0CA3E7] bg-opacity-[7%] py-2 mb-2">
                <p className="font-semibold text-xl">Skills</p>
                <div id="skill" className="py-2 flex flex-wrap gap-2">
                  {/* <input placeholder='Html' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='Css' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='JavaScript' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' />
                                    <input placeholder='Phython' type="text" className='w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]' /> */}
                  <span
                    onClick={() => {
                      const inputText = document.createElement("input");
                      inputText.setAttribute("type", "text");
                      inputText.setAttribute(
                        "Class",
                        "skills w-[120px] px-4 rounded-xl border-none outline-none bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white]"
                      );
                      document.querySelector("#skill").appendChild(inputText);
                    }}
                    className="px-3 rounded-xl cursor-pointer bg-[#0CA3E7] bg-opacity-[7%] py-1 shadow-[inset_0_0_5px_white] font-bold text-xl"
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <GradientBtn placeholder="Reset" />
              <GradientBtn placeholder="Save" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;

// bg-[#0f1325]
