import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Price Page",
  description: "This page show price",
};
function PricePage() {
  return (
    <>
      <span className="text-5xl">Price Page</span>
    </>
  );
}

export default PricePage;
