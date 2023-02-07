import { useState } from "react";
import { Box } from "@mui/material";
import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Container } from "@mui/system";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Box>box material</Box>
      <Container maxWidth="lg">
        <h1>containered</h1>
        <p>soomething</p>
      </Container>
    </div>
  );
}

export default App;
