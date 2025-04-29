import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-6">
        <div className="max-w-full px-4">
          {children}
        </div>
      </div>
    </div>
  );
} 