// app/pages/page.js
import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const BrowserDataPage = React.lazy(() => import("./inner/page"));
//const BrowserDataPage = React.lazy(() => import("./propertyTypes/[viewID]"));

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
          <p className="mt-3 fw-semibold text-muted">Loading Villas...</p>
        </div>
      }
    >
      <BrowserDataPage />
    </React.Suspense>
  );
}
