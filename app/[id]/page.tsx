import { colors } from "../../../lib/colors";

export default function ColorDetail({
  params,
}: {
  params: { id: string };
}) {
  const color = colors.find((c) => c.id === params.id);

  if (!color) {
    return (
      <div style={{ padding: 40, color: "white", background: "#0b0f19" }}>
        未找到该色卡
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 40,
        background: "#0b0f19",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* 返回按钮 */}
      <a
        href="/"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: 20,
        }}
      >
        ← 返回色卡库
      </a>

      {/* 标题 */}
      <h1 style={{ fontSize: 32 }}>🎨 {color.name}</h1>

      {/* 主色块（升级版） */}
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 16,
          background: `linear-gradient(135deg, ${color.hex}, #000)`,
          marginTop: 20,
          border: "1px solid #333",
        }}
      />

      {/* 信息卡片 */}
      <div
        style={{
          marginTop: 20,
          padding: 20,
          background: "#111827",
          borderRadius: 12,
        }}
      >
        <p>🆔 编号：{color.id}</p>
        <p>🏷 分类：{color.category}</p>
        <p>🎨 HEX：{color.hex}</p>
      </div>

      {/* 按钮区 */}
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <button
          onClick={() => navigator.clipboard.writeText(color.hex)}
          style={{
            padding: "10px 15px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          复制 HEX
        </button>

        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `${color.id} / ${color.hex} / ${color.name}`
            )
          }
          style={{
            padding: "10px 15px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          复制完整信息
        </button>
      </div>

      {/* 工业应用标签 */}
      <div style={{ marginTop: 30 }}>
        <h3>🏭 工业应用</h3>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <span style={tag}>建筑涂装</span>
          <span style={tag}>工业设备</span>
          <span style={tag}>桥梁工程</span>
          <span style={tag}>机械制造</span>
        </div>
      </div>
    </div>
  );
}

const tag = {
  padding: "6px 10px",
  background: "#1f2937",
  borderRadius: 8,
  fontSize: 12,
};