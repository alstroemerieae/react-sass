import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  // console.log(data)
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="table">
      <thead className="table-head">
        {headerGroups.map((headerGroup) => (
          <tr className="table-head-row" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="table-head-headercell" {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="table-body" {...getTableBodyProps()}>
        {
          rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className="table-body-row" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                {/* console.log(cell) */}
                return <td className="table-body-datacell" {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;