import React, { useEffect, useState } from "react";
import Table from "./../../Components/Table";
import ReactExport from "react-data-export";
import { Link } from "react-router-dom";

const Counties = (props) => {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const url = process.env.REACT_APP_BASE_URL + "/api/counties";
  const [state, setState] = useState([]);
  const fetchData = () => {
    setState([]);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
    })
      .then((res) => res.json())
      .then((Data) => {
        if (Data.length > 0) {
          setState(Data);
        } else {
          //  dispatch({ type: "FETCH_ERROR", payload: Data.error });
        }
      })
      .catch((err) => {
        // dispatch({ type: "FETCH_ERROR", payload: err.message });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const ColumnData = [
    {
      label: "Name",
      field: "name",
      sort: "asc",
    },

    {
      label: "Capital",
      field: "capital",
      sort: "asc",
    },
  ];
  let Rowdata1 = [];
  const rows = state;
  if (rows.length > 0) {
    rows.forEach((k) => {
      const Rowdata = {
        name: k.name,
        code: k.code,
        capital: k.capital,
      };
      Rowdata1.push(Rowdata);
    });
  }

  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          {" "}
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">Roles</li>
      </ol>
      <h1 class="page-header mb-3">Roles</h1>
      <div style={{ backgroundColor: "white" }}>
        <div className="row">
          <div class="col-sm-12 d-flex flex-row float-right">
            &nbsp; &nbsp; &nbsp;
            <ExcelFile
              element={
                <button
                  type="button"
                  className="btn btn-success p-2"
                  style={{ marginRight: 5, marginTop: 5 }}
                >
                  &nbsp; Export to Excel &nbsp;
                </button>
              }
            >
              <ExcelSheet data={rows} name="Roles">
                <ExcelColumn label="Name" value="name" />
                <ExcelColumn label="Capita" value="capital" />
                <ExcelColumn label="Code" value="code" />
              </ExcelSheet>
            </ExcelFile>
            {/* <button
              // onClick={handleView}
              className="btn btn-success p-2"
              style={{ marginRight: 5, marginTop: 5 }}
            >
              Export
            </button> */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Table Rows={Rowdata1} columns={ColumnData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counties;
