import { Spin } from "antd";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AppButton = ({
  loading,
  children,
  disabled,
  type = "button",
  onClick,
}: AppButtonProps) => {
  return (
    <button
      className="inline-flex items-center px-10 py-2 text-sm font-medium text-center text-white bg-[#CA5C3B] rounded-full hover:text-white border-none focus:outline-none"
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading ? <Spin /> : ""}
      {children}
    </button>
  );
};