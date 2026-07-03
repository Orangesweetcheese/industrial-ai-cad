import { colors } from "../../lib/colors";

export default function Page({ params }: any) {
  const color = colors.find((c) => c.id === params.id);

  if (!color) {
    return (
      <div style={{ padding: 40, color: "white", background: "#0b0f19" }}>
        <h1>未找到色卡</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, color: "white", background: "#0b0f19" }}>
      
      {/* 返回 */}
      <a href="/" style={{ color: "#888" }}>← 返回首页</a>

      {/* 标题 */}
      <h1 style={{ marginTop: 20 }}>{color.name}</h1>

      {/* 色块 */}
      <div
        style={{
          width: 200,
          height: 120,
          background: color.hex,
          borderRadius: 10,
          marginTop: 20,
        }}
      />

      {/* 信息 */}
      <div style={{ marginTop: 20 }}>
        <p><b>编号：</b> {color.id}</p>
        <p><b>类别：</b> {color.category}</p>
        <p><b>HEX：</b> {color.hex}</p>
      </div>

      {/* 工业说明 */}
      <div style={{ marginTop: 30, color: "#aaa" }}>
        <h3>工业应用</h3>
        <p>适用于建筑 / 工厂 / 机械 / 钢结构等工业场景</p>
      </div>
    </div>
  );
}