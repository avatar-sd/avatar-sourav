import * as React from "react";
import DashboardLayout from "../../sharedComponents/dashboardLayout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledOr } from "./style";
import InsideAuthApi from "../../services/inSideAuth";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    InsideAuthApi()
      .userListApi()
      .then((data) => {
        let varData = [];
        data?.data?.map((x) => {
          varData.push(
            createData(
              x.name,
              x.user?.email,
              x.metaId,
              <Button onClick={() => navigate("/avatar_list")}>View</Button>
            )
          );
        });
        setRows(varData);
      })
      .catch((e) => {});
  }, []);

  function createData(name, email, metaId, button) {
    return { name, email, metaId, button };
  }

  return (
    <DashboardLayout title="hii">
      <div style={{ width: "100%", height: "100%", marginTop: "40px" }}>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Meta ID</TableCell>
                <TableCell>Action</TableCell>
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
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.metaId}</TableCell>
                  <TableCell>{row.button}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </DashboardLayout>
  );
}

export default UserList;
