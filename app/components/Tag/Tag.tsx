"use client";
import { useEffect, useState } from "react";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  className,
  size,
  color,
  children,
  ...props
}: TagProps) => {
  const [up, setUp] = useState<number>(0);

  const handlerClick = () => {
    setUp((prev) => prev + 1);
  };

  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.green]: color === "green",
        [styles.gray]: color === "gray",
        [styles.black]: color === "black",
      })}
      {...props}
      onClick={handlerClick}
    >
      {up}
    </div>
  );
};
