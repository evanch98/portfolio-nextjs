interface AlertProps {
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ children }) => {
  return <div className="w-full bg-[#FCA5A5] rounded-2xl p-5">{children}</div>;
};

export default Alert;
