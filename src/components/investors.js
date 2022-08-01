import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, commitment, type, twitter) {
  return { name, commitment, type, twitter };
}

const rows = [
  createData("Pompeii", 10, "Active", "https://twitter.com/brand1345"),
  createData("Eric", 10, "Active", "https://twitter.com/XYFANG1988"),
  createData("MouseDev", 10, "Passive", "https://twitter.com/_MouseDev"),
];

function Investors() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ backgroundColor: "#6472FA" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#232FAD" }}>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Commitment (Eth)
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Type
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Twitter
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.commitment}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">
                <a href={row.twitter}>{row.twitter}</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Investors;
