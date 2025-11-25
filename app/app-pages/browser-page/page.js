"use client";

import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import dynamic from "next/dynamic";

const BrowserDataPage = dynamic(() => import("./main"), { ssr: false });

export default function Page() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      }
    >
      <BrowserDataPage />
    </Suspense>
  );
}
