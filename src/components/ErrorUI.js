const errWrapper = {
  backgroundColor: "rgba(255, 0, 0, 0.4)",
  width: "90%",
  margin: "2.2em auto",
  maxWidth: "640px",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "2px 12px 10px -8px rgba(255, 0, 0, 0.45)",
};

const innerPad = "0.5em 1em";

const h2 = {
  textAlign: "center",
  padding: innerPad,
  borderBottom: "1px solid gray",
};

const p = {
  padding: innerPad,
};

const ErrorUI = ({
  msg = "Özür dileriz, lütfen daha sonra tekrar deneyiniz...",
}) => {
  return (
    <div style={errWrapper}>
      <h2 style={h2}>Bir hata oluştu...</h2>
      <p style={p}>{msg}</p>
    </div>
  );
};

export default ErrorUI;
