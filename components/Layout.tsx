import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return <div>{props.children}</div>;
};
