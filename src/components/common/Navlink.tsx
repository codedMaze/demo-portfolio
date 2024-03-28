import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Navlink = ({ href, children, className }: Props) => {
  return (
    <Link href={href} className={classNames(className, "px-4 py-3")}>
      {children}
    </Link>
  );
};

export default Navlink;
