// app/pages/page.js
import React from "react";

const BrowserDataPage = React.lazy(() => import("./browser-page/page"));

export default function Page() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserDataPage />
    </React.Suspense>
  );
}
