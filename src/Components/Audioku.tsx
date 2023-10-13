function Audioku({ audi }: any) {
  return (
    <div style={{ textAlign: "center" }}>
      <audio controls src={audi["05"]} />
    </div>
  );
}

export default Audioku;
