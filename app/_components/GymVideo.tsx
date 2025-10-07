import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Spinner from "./Spinner";

export default function GymVideo() {
  const [isLoading, setIsLoading] = useState(true);

  // function timeOut() {
  //   return new Promise((_, reject) => {
  //     setTimeout(() => {
  //       reject(new Error("Something went wrong"));
  //     }, 3000);
  //   });
  // }

  return (
    <div className="relative h-[80vh] w-4/5 rounded-lg  shadow-lg ">
      {isLoading && <Spinner status="LOADING" />}

      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=PAQa-S0LDFI"
        controls={true}
        onReady={() => setIsLoading(false)}
      />
    </div>
  );
}

// url="https://www.youtube.com/watch?v=3_-kCoNBarY"
// url="https://www.youtube.com/watch?v=4Cg7JX5fxI0"
