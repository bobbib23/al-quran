function Audioku({ audi }: any) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <audio controls src={audi["05"]} />
    </div>
  );
}

export default Audioku;
