import * as React from "react";
import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

type CardLinkProps = LinkProps & {
  className?: string;
};

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<CardLinkProps>
>(({ className, href, children, ...props }, ref) => (
  <Link
    ref={ref}
    href={href}
    className={cn(
      "border rounded-sm sm:rounded-lg bg-card text-card-foreground shadow group max-w-full flex flex-col w-64 h-64", // default card styles
      "text-left cursor-pointer hover:ring-2 hover:ring-ring hover:ring-offset-2 hover:ring-offset-background hover:border-border-hover transition-all duration-300",
      className
    )}
    {...props}
  >
    {children}
  </Link>
));
CardLink.displayName = "CardLink";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "border sm:rounded-lg bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1 p-3 w-full", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "scroll-m-20 text-2xl tracking-tight leading-tight font-caprasimo",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardLink,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
