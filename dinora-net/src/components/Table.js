import React, {useState} from "react";
import { useFilters, useTable } from "react-table";
import styled from 'styled-components';

// Styles for Table
const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: match-parent;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border: none;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table

  // Create a state
    const [filterInput, setFilterInput] = useState("");
    const [filterInput2, setFilterInput2] = useState("");


    // Update the state when input changes
    const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
    };

    const handleFilterChangeLang = e => {
        const value = e.target.value || undefined;
        setFilter("show.language", value); 
        // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput2(value);
    };


  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter // Added for filter
  } = useTable({
    columns,
    data
  }, // ADD HOOKS
    useFilters
  );

  /* 
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
  */
  return (
    <>
        
        <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
        />
        <input
        value={filterInput2}
        onChange={handleFilterChangeLang}
        placeholder={"Search language"}
        />

        <Styles>
            <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                    </tr>
                );
                })}
            </tbody>
            </table>
        </Styles>
    </>
  );
}