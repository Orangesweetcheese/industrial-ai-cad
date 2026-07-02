"use client";

import { useState } from "react";
import { colors } from "../lib/colors";

export default function Home() {
  const [search, setSearch] = useState("");

  const categories = [
    "🏢 建筑涂装",
    "🚧 工业设备",
    "🌉 桥梁工程",
    "⚙️ 机械制造",
    "🏭 工厂环境",
    "🧱 地坪系统",
  ];

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
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        🎨 工业AI色卡系统
      </h1>

      <p style={{ color: "#aaa" }}>
        Industrial Paint Color SaaS Dashboard
      </p>

      {/* 搜索框 */}
      <div style={{ marginTop: 20 }}>
        <input
          placeholder="搜索色卡 / RAL / GB / 应用场景..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 8,
            border: "1px solid #333",
            background: "#111827",
            color: "white",
          }}
        />
      </div>

      {/* 分类 */}
      <h2 style={{ marginTop: 30 }}>📦 应用场景</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {categories.map((c, i) => (
          <div
            key={i}
            style={{
              padding: "10px 14px",
              background: "#1f2937",
              borderRadius: 8,
            }}
          >
            {c}
          </div>
        ))}
      </div>

      {/* 色卡 */}
      <h2 style={{ marginTop: 40 }}>🎨 RAL 色卡库</h2>

      {filteredColors.length === 0 ? (
        <p style={{ color: "#888" }}>没有找到匹配的色卡</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 15,
          }}
        >
          {filteredColors.map((color) => (
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
              <p style={{ marginTop: 10 }}>{color.name}</p>
              <p style={{ fontSize: 12, color: "#777" }}>{color.id}</p>
              <p style={{ fontSize: 12, color: "#555" }}>
                {color.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}