import { useState } from "react";
import Button from "./Button";

type Props = {
  children: string;
};

export default function TextExpander({ children }: Props) {
  const [isFullDispalay, setIsFullDisplay] = useState<boolean>(false);

  return (
    <>
      <p className="mb-9 text-xl text-gray-200">
        {!isFullDispalay ? `${children?.slice(0, 54)}...` : children}
      </p>

      <Button handleOnClick={() => setIsFullDisplay((prev) => !prev)}>
        {!isFullDispalay ? "More details" : "Less details"}
      </Button>
    </>
  );
}
