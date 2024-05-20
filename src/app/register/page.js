import React from 'react';
import FrameComponent3 from "../../components/frame-component3";
import GroupComponent from "../../components/group-component";
import Main from "../../components/main";
import FrameComponent from "../../components/FrameComponent";

const Register = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FrameComponent3 />
      <GroupComponent />
      <Main />
      <FrameComponent />
    </div>
  );
};

export default Register;
