"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import NavbarProvider from "./navbar";
import AlertProvider from "./alert";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <FontProvider>
        {children}

        <AlertProvider />
        <NavbarProvider />
      </FontProvider>
    </html>
  );
}
