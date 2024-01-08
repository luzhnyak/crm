import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface IProps {
  current?: boolean;
  pathname: string;
  src: string;
  alt: string;
  children: ReactNode;
}
// after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm
const SidebarItem: FC<IProps> = ({ pathname, src, alt, children, current }) => {
  return (
    <li>
      <Link
        className={clsx(
          "flex items-center h-9 mx-1 gap-3.5",
          current &&
            "after:h-full after:ml-auto after:border-2 after:border-purple-200 after:rounded-sm"
        )}
        href={pathname}
      >
        <Image alt={alt} width="18" height="18" className="ml-5" src={src} />
        <span className="font-medium text-zinc-50">{children}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
