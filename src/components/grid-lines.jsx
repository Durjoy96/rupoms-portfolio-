"use client";
import React from "react";
import GridLines from "react-gridlines";

export default function GridLine() {
  return (
    <>
      {/* Grid lines Background */}
      <div className="absolute -top-2 left-0 right-0 z-0 bg-fixed">
        <GridLines
          className="grid-area"
          cellWidth={180}
          strokeWidth={1}
          strokeWidth2={1}
          cellWidth2={36}
          lineColor="#dfe5eb"
          lineColor2="#dfe5eb"
        >
          <div className="h-screen"></div>
        </GridLines>
      </div>
    </>
  );
}
