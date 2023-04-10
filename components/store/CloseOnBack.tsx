import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type CloseOnBackProps = {
  children: React.ReactNode;
  toggleState: boolean;
  setToggleState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CloseOnBack({
  children,
  toggleState,
  setToggleState,
}: CloseOnBackProps) {
  useEffect(() => {
    if (toggleState) {
      const handlePopstate = (event: any) => {
        setToggleState((prev) => false);
      };
      
      window.addEventListener("popstate", handlePopstate);

      return () => {
        window.removeEventListener("popstate", handlePopstate);
      };
    }
  }, [toggleState, setToggleState]);

  return <>{children}</>;
}
