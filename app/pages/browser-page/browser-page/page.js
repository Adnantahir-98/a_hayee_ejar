import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BrowserDataPage() {
  const desktopHeight = 346; // fixed desktop card height

  return (
    <>
      <div className="mt-30 mb-10 my-5 p-3">
        <h1 className="font-bold text-3xl mb-4 text-center pt-10 w-75 mx-auto" style={{ borderBottom: '2px solid yellow' }}>
          Villa
        </h1>
        <div>
          {/* Desktop layout */}
          <div className="d-none d-lg-flex border-0" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <div style={{ flex: 1, maxWidth: "100%", height: desktopHeight }}>
              <Carousel fade indicators={false} controls={true} style={{ height: "100%" }}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
                    alt="Villa"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=874"
                    alt="Villa 2"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Carousel>
            </div>

            <div style={{ flex: 1, backgroundColor: "#fcfcfcff", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "12px", color: "#FF5A5F" }}>📍 Street Name, City</p>
                <h6 className="fw-semibold" style={{ color: "#111111ff" }}>2 Floor Sabah Al Salem</h6>
                <p className="small" style={{ color: "#8f8f8fff" }}>
                  Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold" style={{ color: "#fff" }}>1200 KWD</h4>
                <Button variant="success">More here →</Button>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="d-lg-none position-relative" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
              alt="Villa"
              className="card-img"
              style={{ height: "346px", objectFit: "cover", opacity: 0.85 }}
            />
            <div
              className="position-absolute w-100 h-100"
              style={{
                top: 0,
                left: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0))",
              }}
            ></div>
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={{ zIndex: 2 }}>
              <h4 className="fw-bold mb-1">1200 KWD</h4>
              <h6 className="fw-semibold mb-1">2 Floor Sabah Al Salem</h6>
              <p className="small mb-2">
                Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-center">
                  <span style={{ fontSize: "10px", color: "white" }}>● ● ● ●</span>
                </div>
                <Button variant="link" className="text-warning text-decoration-none p-0">
                  More here →
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* Desktop layout */}
          <div className="d-none d-lg-flex border-0" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <div style={{ flex: 1, maxWidth: "100%", height: desktopHeight }}>
              <Carousel fade indicators={false} controls={true} style={{ height: "100%" }}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
                    alt="Villa"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=874"
                    alt="Villa 2"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Carousel>
            </div>

            <div style={{ flex: 1, backgroundColor: "#fcfcfcff", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "12px", color: "#FF5A5F" }}>📍 Street Name, City</p>
                <h6 className="fw-semibold" style={{ color: "#111111ff" }}>2 Floor Sabah Al Salem</h6>
                <p className="small" style={{ color: "#8f8f8fff" }}>
                  Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold" style={{ color: "#fff" }}>1200 KWD</h4>
                <Button variant="success">More here →</Button>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="d-lg-none position-relative" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
              alt="Villa"
              className="card-img"
              style={{ height: "346px", objectFit: "cover", opacity: 0.85 }}
            />
            <div
              className="position-absolute w-100 h-100"
              style={{
                top: 0,
                left: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0))",
              }}
            ></div>
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={{ zIndex: 2 }}>
              <h4 className="fw-bold mb-1">1200 KWD</h4>
              <h6 className="fw-semibold mb-1">2 Floor Sabah Al Salem</h6>
              <p className="small mb-2">
                Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-center">
                  <span style={{ fontSize: "10px", color: "white" }}>● ● ● ●</span>
                </div>
                <Button variant="link" className="text-warning text-decoration-none p-0">
                  More here →
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {/* Desktop layout */}
          <div className="d-none d-lg-flex border-0" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <div style={{ flex: 1, maxWidth: "100%", height: desktopHeight }}>
              <Carousel fade indicators={false} controls={true} style={{ height: "100%" }}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
                    alt="Villa"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=874"
                    alt="Villa 2"
                    className="d-block w-100"
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
              </Carousel>
            </div>

            <div style={{ flex: 1, backgroundColor: "#fcfcfcff", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontSize: "12px", color: "#FF5A5F" }}>📍 Street Name, City</p>
                <h6 className="fw-semibold" style={{ color: "#111111ff" }}>2 Floor Sabah Al Salem</h6>
                <p className="small" style={{ color: "#8f8f8fff" }}>
                  Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold" style={{ color: "#fff" }}>1200 KWD</h4>
                <Button variant="success">More here →</Button>
              </div>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="d-lg-none position-relative" style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800"
              alt="Villa"
              className="card-img"
              style={{ height: "346px", objectFit: "cover", opacity: 0.85 }}
            />
            <div
              className="position-absolute w-100 h-100"
              style={{
                top: 0,
                left: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0))",
              }}
            ></div>
            <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={{ zIndex: 2 }}>
              <h4 className="fw-bold mb-1">1200 KWD</h4>
              <h6 className="fw-semibold mb-1">2 Floor Sabah Al Salem</h6>
              <p className="small mb-2">
                Villa in Sabah Al Salim with a pool, 2 floors, and a garden.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="text-center">
                  <span style={{ fontSize: "10px", color: "white" }}>● ● ● ●</span>
                </div>
                <Button variant="link" className="text-warning text-decoration-none p-0">
                  More here →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
