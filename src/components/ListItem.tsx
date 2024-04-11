import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ListItem = ({ children }: Props) => {
  const [strike, setStrike] = useState("");
  return (
    <div
      className={"select-none " + strike}
      onDoubleClick={() =>
        strike == "strikethrough" ? setStrike("") : setStrike("strikethrough")
      }
    >
      {children}
    </div>
  );
};

export default ListItem;