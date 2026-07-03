"use client";

import { useState } from "react";
import { colors } from "../lib/colors";

export default function Home() {
  const [search, setSearch] = useState("");

  // ✅ 稳定搜索（工业级写法）
  const filteredColors = colors.filter((color) => {
    const s = search.trim().toLowerCase();

    const text = (
      color.name +
      " " +
      color.id +
      " " +
      color.category
    ).toLowerCase();

    return text.includes(s);
  });

  return (
    <div style={{ background: "#0b0f19", minHeight: "100vh", color: "white", padding: 40 }}>
      
      {/* 标题 */}
      <h1>🎨 工业AI色卡系统</h1>

      {/* 搜索框 */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="搜索：工厂 / 工业 / RAL / 桥梁..."
        style={{
          width: "100%",
          marginTop: 20,
          padding: 12,
          borderRadius: 8,
          border: "1px solid #333",
          background: "#111827",
          color: "white",
        }}
      />

      {/* 结果区 */}
      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 15,
        }}
      >
        {filteredColors.length === 0 ? (
          <p>没有找到匹配结果</p>
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