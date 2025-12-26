"use client";

import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import dynamic from "next/dynamic";
import { Spin } from "antd";

const BrowserDataPage = dynamic(() => import("./main"), { ssr: false });

export default function Page() {
  return (
    <Suspense
      fallback={
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
          }}><Spin size="large" /></div>
      }
    >
      <BrowserDataPage />
    </Suspense>
  );
}
