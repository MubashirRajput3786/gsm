import React from "react";
import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <RingLoader color="#e11d48" size={80} />
    </div>
  );
}
