import Header from "./header";
import React, { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children}:LayoutProps ) {
    return (<div>
        <Header/>
        {children}
        </div>)
  }