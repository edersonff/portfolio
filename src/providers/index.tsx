"use client";

import React from "react";
import FontProvider from "./font";
import "../app/globals.css";
import NavbarProvider from "./navbar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <FontProvider>
        {children}

        <NavbarProvider />
      </FontProvider>
    </html>
  );
}
