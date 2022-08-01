import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Head from "./components/head";
import Investors from "./components/investors";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Cheese from "./assets/cheesea.jpg";
import * as React from "react";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="investment">
              <Tab label="Investors" value="investors" />
              <Tab label="Mission Statement" value="missionStatement" />
              <Tab label="Investment Strategy" value="investmentStrategy" />
            </TabList>
            <TabPanel
              sx={{
                minHeight: 200,
                width: "40%",
              }}
              value="investors"
            >
              <Investors />
            </TabPanel>
            <TabPanel value="missionStatement">
              <Typography sx={{ textAlign: "left", width: "40%" }}>
                Web3 will be a major disruptive force over the next decade and
                presents wealth creation opportunities that are equivalent, if
                not greater than the Web2 revolution. As NFTs and broader DeFi
                products see further mainstream adoption, trillions of dollars
                of incremental value will be created and accrue significant
                wealth for early adopters / builders. Our mission is resolute.
                Generate profits at scale by leveraging the collective
                experience, pattern recognition, network, technology stack, and
                knowledge of our core group of experienced web3 investors. Click{" "}
                <a href="https://cobalt-buttercup-537.notion.site/Mission-Statement-9ff83ca6df3e42e49c7dd3b19c2f2b89">
                  here
                </a>{" "}
                to read more about our commitment
              </Typography>
            </TabPanel>
            <TabPanel value="investmentStrategy">Investment Strategy</TabPanel>
          </Box>
        </TabContext>
      </Box>

      <header className="App-header">
        <h1> team info </h1>
        {/* <img src={Cheese} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
