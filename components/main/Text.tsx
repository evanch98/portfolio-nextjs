"use client";

interface TextProps {
  text: string;
}

const text: React.FC<TextProps> = ({ text }) => {
  return <div>{text}</div>;
};

export default text;
