import "./globals.css";
import { Inter } from "next/font/google";
import {  ConfigProvider } from "antd";
import Providers from "@/components/Providers";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "School Management System",
  description: "This is an ERP for managing schools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#A25800",
            borderRadius: 8,
            colorBgContainer: "#FFF",
          },
        }}
      >
        <html lang="en">
          <body className={inter.className}>{children}
        
          </body>
        </html>
      </ConfigProvider>
    </Providers>
  );
}
