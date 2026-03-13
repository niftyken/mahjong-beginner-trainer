import React from "react";
import { getTileMeta } from "../domain/tiles/tileCatalog.js";
import Tile from "./Tile.jsx";

export default function FullTile({ code }) {
  if (!code) {
    return <div>Unknown tile.</div>;
  }

  let meta = null;

  try {
    meta = getTileMeta(code);
  } catch {
    meta = null;
  }

  if (!meta) {
    return <div>Unknown tile.</div>;
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <Tile code={code} />
      <div>
        <div>{meta.labelEn}</div>
        <div>{meta.labelZh}</div>
        <div>{meta.jyutping}</div>
      </div>
    </div>
  );
}