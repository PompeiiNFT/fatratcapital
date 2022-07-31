import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Head from "./components/head";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Cheese from "./assets/cheesea.jpg";
function App() {
  return (
    <div className="App">
      <Head />
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            justifyContent: "center",
            flexDirection: "reverse",
            flexWrap: "wrap",
            width: "100%",
            height: 300,
            backgroundColor: "#EBEB91",
            padding: 2,
          },
        }}
      >
        <Card variant="outlined">
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Investors
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
        <Card variant="outlined">
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Mission Statement
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
        <Card variant="outlined">
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Strategy
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Card>
      </Box>
      <header className="App-header">
        <h1> team info </h1>
        {/* <img src={Cheese} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
