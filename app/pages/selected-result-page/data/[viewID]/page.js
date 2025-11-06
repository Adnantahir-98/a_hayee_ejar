"use client";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "next/navigation";

export default function SelectedResultPage() {
  const { viewID } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // simulate data fetching
    setTimeout(() => {
      setData({ id: viewID, name: "Villa in Sabah Al Salem" });
      setLoading(false);
    }, 2000);
  }, [viewID]);

  if (loading) {
    return (
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
        <p className="mt-3 fw-semibold text-muted">
          Loading data for view ID {viewID}...
        </p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <h1>{data.name}</h1>
      <p>ID: {data.id}</p>
    </div>
  );
}
