// eslint-disable-next-line
import React, { useMemo, useState, useEffect } from "react";
import './Body.css';
import Table from "./Table";
// eslint-disable-next-line
import axios from 'axios';
import MOCK_DATA from './TempServer.json'

function Body() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  // TO TRANSFER OVER TO AN ONLINE DB, UNCOMMENT FOLLOWING LINE
  //const [data, setData] = useState([]);


  // Using useEffect to call the API once mounted and set the data
  // TO TRANSFER OVER TO AN ONLINE DB, UNCOMMENT LINES 14-21
  // useEffect(() => {
  //   getData();
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     console.log(result);
  //     setData(result.data);
  //   })();
  // }, []);

  /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
    const columns = useMemo(
      () => [
        {
          // first group - TV Show
          Header: "Matches",
          // First group columns
          columns: [
            {
              Header: "Pic",
              accessor: "entry.pic"
            },
            {
              Header: "Name",
              accessor: "entry.name"
            },
            {
              Header: "City From",
              accessor: "entry.cityfrom"
            }
          ]
        },
        {
          // Second group - Details
          Header: "Info",
          // Second group columns
          columns: [
            {
              Header: "City To",
              accessor: "entry.cityto"
            },
            {
              Header: "Offering",
              accessor: "entry.money1"
            },
            {
              Header: "Requesting",
              accessor: "entry.money2"
            },
            {
              Header: "Type",
              accessor: "entry.type"
            }
          ]
        }
      ],
      []
    );
    
    // Used for LOCAL DATA
    const data = useMemo(() => MOCK_DATA, []);


  return (
    <div className="container">
      <div className="Body">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

export default Body;