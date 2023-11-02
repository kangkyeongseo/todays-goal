interface SpanProp {
  text: string;
}

function Span({ text }: SpanProp) {
  return <span>{text}</span>;
}

export default Span;
