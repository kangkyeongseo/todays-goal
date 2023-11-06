interface SpanProp {
  text: string;
  isChecked: boolean;
}

function Span({ text, isChecked }: SpanProp) {
  return (
    <span style={{ textDecoration: `${isChecked ? "line-through" : "none"}` }}>
      {text}
    </span>
  );
}

export default Span;
