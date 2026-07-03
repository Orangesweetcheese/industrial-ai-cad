"use client";

import { useState } from "react";
import { colors } from "../lib/colors";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredColors = colors.filter((color) => {
    const s = search.toLowerCase();

    return (
      color.name.toLowerCase().includes(s) ||
      color.id.toLowerCase().includes(s) ||
      color.category.toLowerCase().includes(s)
    );
  });

  return (
    <div
      style={{
        background: "#0b0f19",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
      }}
    >
      <h1>🎨 工业AI色卡系统</h1>

      {/* 搜索框 */}
      <input
        placeholder="搜索：工厂 / RAL / 工业 / 桥梁..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 20,
          borderRadius: 8,
          background: "#111827",
          color: "white",
          border: "1px solid #333",
        }}
      />

      {/* 结果 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 15,
          marginTop: 30,
        }}
      >
        {filteredColors.length === 0 ? (
          <p>没有找到结果</p>
        ) : (
          filteredColors.map((color) => (
            <div
              key={color.id}
              style={{
                background: "#111827",
                padding: 15,
                borderRadius: 10,
                border: "1px solid #222",
              }}
            >
              <div
                style={{
                  height: 60,
                  borderRadius: 6,
                  background: color.hex,
                }}
              />

              <p>{color.name}</p>
              <p style={{ fontSize: 12, color: "#777" }}>{color.id}</p>
              <p style={{ fontSize: 12, color: "#555" }}>
                {color.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}