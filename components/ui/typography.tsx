import React from "react";

export const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
>(({ children, className, ...props }, ref) => {
  return (
    <h3 ref={ref} className={`scroll-m-20 text-2xl ${className}`} {...props}>
      {children}
    </h3>
  );
});
H3.displayName = "H3";
