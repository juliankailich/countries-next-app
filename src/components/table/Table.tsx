import React, { useState } from "react";
import { Column } from "@/shared/model/table/table.model";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export const CountriesTable = ({ columns, rows }: any) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const handleChangePage = (event: unknown, newPage: number) =>
    setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer style={{ maxWidth: "50vw", borderRadius: 12 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ height: "100%" }}
        >
          <TableHead sx={{ backgroundColor: "#424242" }}>
            <TableRow>
              {columns.map((column: Column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.width,
                    color: "white",
                    backgroundColor: "#424242",
                  }}
                  align={column.align}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ overflow: "scroll", height: "100%" }}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column: any) => {
                      const value =
                        column.field === "continent"
                          ? row[column.field].name
                          : row[column.field];
                      return (
                        <TableCell
                          key={column.field}
                          style={{ color: "white" }}
                          align={column.align}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            backgroundColor: "#424242",
            color: "white",
            position: "sticky",
            bottom: "0",
          }}
        />
      </TableContainer>
    </>
  );
};
