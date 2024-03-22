import React, { DetailedHTMLProps } from "react";
import classNames from "classnames";

type TitleProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export function Title({ className, ...rest }: TitleProps) {
  return (
    <h2
      className={classNames(
        "font-bold leading-normal text-defBlack",
        className
      )}
      {...rest}
    />
  );
}

export function SubTitle({ className, ...rest }: TitleProps) {
  return (
    <h5
      className={classNames("font-medium text-defBlack", className)}
      {...rest}
    />
  );
}

export function BodyText({ className, ...rest }: TitleProps) {
  return (
    <p className={classNames("text-sm text-defBlack", className)} {...rest} />
  );
}
