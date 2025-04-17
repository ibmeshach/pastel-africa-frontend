"use client";
import React from "react";
import Create from "./Create";
import Jumpstart from "./Jumpstart";

const CreateOrJumpstart = () => {
  return (
    <div>
      <div className="relative h-full">
        <Create />
      </div>
      <div className="relative min-h-screen">
        <Jumpstart />
      </div>
    </div>
  );
};

export default CreateOrJumpstart;
