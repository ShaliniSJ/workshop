// "use client";
// import { useState, useEffect } from "react";

// export default function Page() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     setTimeout(() => setMessage("Hello from CSR!"), 2000);
//   }, []);

//   return <h1>{message}</h1>;
// }

// mui example
import Button from "@mui/material/Button";

export default function App() {
  return <Button variant="contained" color="primary">Click Me</Button>;
}
