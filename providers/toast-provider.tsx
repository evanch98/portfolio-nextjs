"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#E5EEFF",
          color: "#212429",
          borderRadius: "1000px",
        },
        success: {
          style: {
            background: "#E5EEFF",
            color: "#212429",
            fontFamily: "sans-serif",
            fontSize: "16px",
            borderRadius: "1000px",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          iconTheme: {
            primary: "#ACED18",
            secondary: "#FFFFFF",
          },
        },
        error: {
          style: {
            background: "#E5EEFF",
            color: "#212429",
            fontFamily: "sans-serif",
            fontSize: "16px",
            borderRadius: "1000px",
            paddingTop: "16px",
            paddingBottom: "16px",
            paddingLeft: "32px",
            paddingRight: "32px",
          },
          iconTheme: {
            primary: "#ED3718",
            secondary: "#FFFFFF",
          },
        },
      }}
    />
  );
};
