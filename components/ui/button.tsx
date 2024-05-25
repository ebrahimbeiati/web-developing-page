// // Button Component
// import classNames from "classnames";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: "outline";
//   size?: "icon";
// }

// export function Button({ variant, size, children, ...props }: ButtonProps) {
//   const baseStyles = "px-4 py-2 rounded";
//   const variantStyles = variant === "outline" ? "border border-gray-300" : "";
//   const sizeStyles = size === "icon" ? "p-2" : "";

//   return (
//     <button
//       className={classNames(baseStyles, variantStyles, sizeStyles)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
// Button Component
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline";
  size?: "icon";
}

export function Button({ variant, size, children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded";
  const variantStyles = variant === "outline" ? "border border-gray-300" : "";
  const sizeStyles = size === "icon" ? "p-2" : "";

  return (
    <button
      className={classNames(baseStyles, variantStyles, sizeStyles)}
      {...props}
    >
      {children}
    </button>
  );
}