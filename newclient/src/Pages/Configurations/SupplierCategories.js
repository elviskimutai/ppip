import React, { useEffect, useState } from "react";
import Table from "../../Components/Table";
import useSave from "../../Hooks/useSave";
import useDelete from "../../Hooks/useDelete";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import useValidateRole from "../../Hooks/useValidateRole";
import ReactExport from "react-data-export";
const SupplierCategories = (props) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [view, setview] = useState(false);
  const [update, setUpdate] = useState(false);
  const [PageRole, setPageRole] = useState("Supplier Categories");
  const [state, setState] = useState([]);
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const url = process.env.REACT_APP_BASE_URL + "/api/SupplierCategories";
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

  const handleOpenModal = (event) => {
    //event.persist();
    setInputs({});
    setOpen(true);
  };
  const handleShowRolesPoupdropdown = (k) => {
    setInputs({});
    setInputs(k);

    setOpen(false);
    setUpdate(false);
  };

  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleEdit = (k) => {
    setInputs({});
    setInputs(k);
    setOpen(true);
    setUpdate(true);
    setview(false);
  };
  const handleEditold = (k) => {
    setOpen(true);
    setUpdate(true);
    setview(false);
  };
  const handleView = (k) => {
    //console.log("View", k);
    setInputs({});
    setInputs(k);
    setview(true);
    setUpdate(false);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setInputs({});
    setOpen(false);
    setview(false);
    setUpdate(false);
  };
  const HandleSave = () => {
    let data = {
      name: inputs.name,
      description: inputs.description,
      user: window.sessionStorage.getItem("UserName"),
    };
    useSave(url, data);
    fetchData();
  };
  const HandleUpdate = () => {
    let data = {
      name: inputs.name,
      description: inputs.description,
      user: window.sessionStorage.getItem("UserName"),
    };
    useUpdate(url + "/" + inputs.id_suppliercategories, data);
    fetchData();
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (update) {
      HandleUpdate();
    } else {
      HandleSave();
    }
  };
  const CallDeletehook = (id_suppliercategories) => {
    useDelete(
      url +
        "/" +
        id_suppliercategories +
        "/" +
        window.sessionStorage.getItem("UserName")
    );
    fetchData();
  };
  const HandelDelete = (k) => {
    CallDeletehook(k.id_suppliercategories);
  };

  const ColumnData = [
    {
      label: "Name",
      field: "name",
      sort: "asc",
    },
    {
      label: "Description",
      field: "description",
      sort: "asc",
    },
    {
      label: "Actions",
      field: "Actions",
      sort: "asc",
    },
  ];
  const MoreActions = (props) => {
    return (
      <span>
        <a
          class="btn btn-primary btn-sm dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          More Actions
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          {useValidateRole(PageRole, "View") ? (
            <a
              style={{ cursor: "pointer" }}
              class="dropdown-item "
              onClick={(e) => handleView(props.selecteditem, e)}
            >
              View
            </a>
          ) : null}
          {useValidateRole(PageRole, "Edit") ? (
            <a
              style={{ cursor: "pointer" }}
              class="dropdown-item"
              onClick={(e) => handleEdit(props.selecteditem, e)}
            >
              Edit
            </a>
          ) : null}
          {useValidateRole(PageRole, "Remove") ? (
            <a
              style={{ cursor: "pointer" }}
              class="dropdown-item"
              onClick={(e) => HandelDelete(props.selecteditem, e)}
            >
              Delete
            </a>
          ) : null}
        </div>
      </span>
    );
  };
  let Rowdata1 = [];
  // const rows = state;
  if (state.length > 0) {
    state.forEach((k) => {
      const Rowdata = {
        // clickEvent: () => handleSelect(k),
        name: k.name,
        description: k.description,
        Actions: <MoreActions selecteditem={k} />,
      };
      Rowdata1.push(Rowdata);
    });
  }

  const ActionsBtn = () => {
    return (
      <div>
        {useValidateRole(PageRole, "Edit") ? (
          <button
            onClick={handleEditold}
            className="btn btn-info p-2"
            type="button"
          >
            &nbsp; Edit &nbsp;
          </button>
        ) : null}
        &nbsp; &nbsp;
        <button
          className="btn btn-warning p-2"
          type="button"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    );
  };
  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          {" "}
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">Supplier Categories</li>
      </ol>
      <h1 class="page-header mb-3">Supplier Categories</h1>
      <div style={{ backgroundColor: "white" }}>
        <div className="row">
          <div class="col-sm-12 d-flex flex-row float-right">
            &nbsp; &nbsp; &nbsp;
            {useValidateRole(PageRole, "AddNew") ? (
              <button
                onClick={handleOpenModal}
                className="btn btn-primary p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; New &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "Export") ? (
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
                <ExcelSheet data={state} name="Supplier Categories">
                  <ExcelColumn label="Name" value="name" />
                  <ExcelColumn label="Description" value="description" />
                </ExcelSheet>
              </ExcelFile>
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Table Rows={Rowdata1} columns={ColumnData} />
          </div>
        </div>
      </div>

      <Modal visible={open} width="40%" height="40%" effect="fadeInUp">
        <div style={{ "overflow-y": "auto", height: "100%" }}>
          <a className="close" onClick={() => handleCloseModal()}>
            &times;
          </a>
          <div className="row">
            <div className="col-sm-5"></div>
            {view ? null : (
              <div className="col-sm-4 fontWeight-bold text-blue">
                Supplier Categories
              </div>
            )}
          </div>
          <div className="container-fluid">
            <div className="col-sm-12">
              <div className="ibox-content">
                <br />

                {view ? (
                  <div>
                    <h3>Supplier Categories</h3>
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Name:</td>
                          <td>{inputs.name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Description:</td>
                          <td>{inputs.description}</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <div
                      style={{ display: "flex", "justify-content": "flex-end" }}
                    >
                      <ActionsBtn />
                    </div>
                    <br />
                  </div>
                ) : (
                  <form className="form-horizontal" onSubmit={HandleSubmit}>
                    <div className=" row">
                      <div className="col-sm">
                        <div className="form-group">
                          <label
                            htmlFor="Datereceived"
                            className="fontWeight-bold"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            required
                            value={inputs.name}
                            onChange={handleInputChange}
                            // defaultvalue={inputs.name}
                          />
                        </div>
                      </div>
                    </div>
                    <div className=" row">
                      <div className="col-sm">
                        <div className="form-group">
                          <label
                            htmlFor="Datereceived"
                            className="fontWeight-bold"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="description"
                            required
                            value={inputs.description}
                            onChange={handleInputChange}
                            // defaultvalue={inputs.name}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", "justify-content": "flex-end" }}
                    >
                      <div class="d-flex flex-row">
                        {update ? (
                          <button className="btn btn-primary p-2" type="submit">
                            Update
                          </button>
                        ) : (
                          <button className="btn btn-primary p-2" type="submit">
                            Submit
                          </button>
                        )}
                        &nbsp;
                        <button
                          className="btn btn-warning p-2"
                          type="button"
                          onClick={handleCloseModal}
                        >
                          Close
                        </button>
                      </div>
                      <br />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default SupplierCategories;
