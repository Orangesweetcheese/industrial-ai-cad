<a
  href={`/${color.id}`}
  key={color.id}
  style={{ textDecoration: "none", color: "inherit" }}
>
  <div
    style={{
      background: "#111827",
      padding: 15,
      borderRadius: 10,
      border: "1px solid #222",
      cursor: "pointer",
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
    <p style={{ fontSize: 12, color: "#777" }}>
      {color.id}
    </p>
  </div>
</a>