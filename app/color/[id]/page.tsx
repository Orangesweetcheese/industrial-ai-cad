import { colors } from "../../../../lib/colors";

export default function Page({ params }: any) {
  const color = colors.find(
    (c) => c.id.toLowerCase() === params.id
  );

  if (!color) {
    return <div style={{ padding: 40 }}>Not Found</div>;
  }

  return (
    <div style={{ padding: 40, background: "#0b0f19", color: "white" }}>
      <h1>{color.name}</h1>
      <div style={{ width: 200, height: 120, background: color.hex }} />
      <p>{color.id}</p>
      <p>{color.category}</p>
    </div>
  );
}