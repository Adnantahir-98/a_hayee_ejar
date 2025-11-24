// app/pages/page.js
"use client";

import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BrowserDataPage = React.lazy(() => import("./data/page"));

export default function Page() {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f8f9fa",
            flexDirection: "column",
          }}
        >
          <Spinner animation="border" variant="primary" />
          <p className="mt-3 fw-semibold text-muted">Loading Selected page result...</p>
        </div>
      }
    >
      <BrowserDataPage />
    </React.Suspense>
  );
}
