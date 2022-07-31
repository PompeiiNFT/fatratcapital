import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import fatRat from "../assets/fatRat.png";
import discord from "../assets/discordIcon.png";
import twitter from "../assets/twitterIcon.png";
import opensea from "../assets/openseaIcon.png";

function Head() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={fatRat} className="logo" alt="fatrat" />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Fat Rat Capital
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ flexGrow: 4 }}
        ></Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <a href="https://www.w3schools.com">
            <img src={twitter} className="links" alt="twitter" />
          </a>
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <a href="https://www.opensea.com">
            <img src={opensea} className="links" alt="opensea" />
          </a>
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <a href="https://www.discord.com">
            <img src={discord} className="links" alt="discord" />
          </a>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Head;
