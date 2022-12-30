import type { PropsWithChildren } from "react";

type TypographyBaseProps = PropsWithChildren<{
  tagName: keyof HTMLElementTagNameMap;
  className: string;
}>;

function TypographyBase({ children, className, tagName }: TypographyBaseProps) {
  const Tag = tagName;
  return <Tag className={className}>{children}</Tag>;
}

type TypographyProps = PropsWithChildren<{
  tagName?: TypographyBaseProps["tagName"];
}>;

export function H1({ children, tagName = "h1" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-5xl">
      {children}
    </TypographyBase>
  );
}

export function H2({ children, tagName = "h2" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-4xl tracking-wider">
      {children}
    </TypographyBase>
  );
}

export function H4({ children, tagName = "h4" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-xl font-medium">
      {children}
    </TypographyBase>
  );
}

export function Subheader({ children, tagName = "span" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-2xl">
      {children}
    </TypographyBase>
  );
}

export function Body({ children, tagName = "p" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-base tracking-[0.031rem]">
      {children}
    </TypographyBase>
  );
}

export function Body2({ children, tagName = "p" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-sm tracking-wider">
      {children}
    </TypographyBase>
  );
}

export function Caption({ children, tagName = "small" }: TypographyProps) {
  return (
    <TypographyBase tagName={tagName} className="text-xs tracking-widest">
      {children}
    </TypographyBase>
  );
}
