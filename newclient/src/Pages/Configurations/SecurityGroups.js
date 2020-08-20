import React, { useEffect, useState } from "react";
import Table from "./../../Components/Table";
import useSave from "../../Hooks/useSave";
import useDelete from "../../Hooks/useDelete";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import useValidateRole from "../../Hooks/useValidateRole";
import ReactExport from "react-data-export";
const SecurityGroups = (props) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [view, setview] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showRolesPoup, setshowRolesPoup] = useState(false);
  const [PageRole, setPageRole] = useState("Security Groups");
  const [Roles, setRoles] = useState([]);
  const [state, setState] = useState([]);
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const url = process.env.REACT_APP_BASE_URL + "/api/usergroups";
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
  const Fetchroles = (id) => {
    fetch(process.env.REACT_APP_BASE_URL + "/api/GroupAccess/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
    })
      .then((res) => res.json())
      .then((Data) => {
        // console.log(Data);
        if (Data.length > 0) {
          setRoles(Data);
        } else {
        }
      })
      .catch((err) => {});
  };

  const handleOpenModal = (event) => {
    //event.persist();
    setInputs({});
    setOpen(true);
  };
  const handleShowRolesPoupdropdown = (k) => {
    setInputs({});
    setInputs(k);
    Fetchroles(k.UserGroupID);
    setOpen(false);
    setUpdate(false);
    setshowRolesPoup(true);
  };
  const handleShowRolesPoup = () => {
    setOpen(false);
    setUpdate(false);
    setshowRolesPoup(true);
  };
  const closeRolesPoup = () => {
    setUpdate(false);
    setshowRolesPoup(false);
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
    Fetchroles(k.UserGroupID);
    setview(true);
    setUpdate(false);
    setOpen(true);
  };

  const handleCloseModal = () => {
    setInputs({});
    setOpen(false);
    setview(false);
    setUpdate(false);
    setshowRolesPoup(false);
  };
  const HandleSave = () => {
    useSave(url, inputs);
    fetchData();
  };
  const HandleUpdate = () => {
    let data = {
      Name: inputs.Name,
      Description: inputs.Description,
    };
    useUpdate(url + "/" + inputs.UserGroupID, data);
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
  const CallDeletehook = () => {
    useDelete(url + "/" + inputs.UserGroupID);
    fetchData();
  };
  const HandelDelete = () => {
    if (inputs.UserGroupID) {
      CallDeletehook();
    } else {
      alert("Select a record to delete");
    }
  };

  const ColumnData = [
    {
      label: "Name",
      field: "Name",
      sort: "asc",
    },
    {
      label: "Description",
      field: "Description",
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
          {useValidateRole("Assign Group Access", "Edit") ? (
            <a
              style={{ cursor: "pointer" }}
              class="dropdown-item"
              onClick={(e) =>
                handleShowRolesPoupdropdown(props.selecteditem, e)
              }
            >
              Security Roles
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
        Name: k.Name,
        Description: k.Description,
        Actions: <MoreActions selecteditem={k} />,
      };
      Rowdata1.push(Rowdata);
    });
  }
  const HandleRolesUpdate = (puturl, data = {}) => {
    useUpdate(puturl, data);
  };
  const handleCheckBoxChange = (Role, e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let data = {
      UserGroup: inputs.UserGroupID,
      Role: Role.RoleID,
      Status: value,
      Name: name,
    };
    HandleRolesUpdate(
      process.env.REACT_APP_BASE_URL + "/api/GroupAccess",
      data
    );
  };
  const RolesPoup = () => {
    let tablestyle = {
      width: "60%",
    };
    let Menus = [];
    let UserManagement = [];
    let Configurations = [];
    let InstituitionManagement = [];
    let Reports = [];
    if (Roles.length > 0) {
      console.log("roles", Roles);
      let MenusCategory = Roles.filter((option) => option.Category === "Menus");

      let UserManagementCategory = Roles.filter(
        (option) => option.Category === "User Management"
      );

      let ConfigurationsCategory = Roles.filter(
        (option) => option.Category === "Configurations"
      );

      let ReportsCategory = Roles.filter(
        (option) => option.Category === "Reports"
      );
      if (ReportsCategory.length > 0) {
        Reports.push(ReportsCategory);
      }

      if (UserManagementCategory.length > 0) {
        UserManagement.push(UserManagementCategory);
      }
      if (MenusCategory.length > 0) {
        Menus.push(MenusCategory);
      }
      if (ConfigurationsCategory.length > 0) {
        Configurations.push(ConfigurationsCategory);
      }
    }

    return (
      <Modal visible={showRolesPoup} width="70%" height="90%" effect="fadeInUp">
        <div style={{ "overflow-y": "auto", height: "100%" }}>
          <a className="close" onClick={closeRolesPoup}>
            &times;
          </a>
          <div className="text-center">
            <b>{inputs.name}</b>{" "}
          </div>

          <form>
            <table className="table">
              <thead className="table-success">
                <th scope="col" style={tablestyle}>
                  Role
                </th>
                <th>Create</th>
                <th>View</th>
                <th>Delete</th>
                <th>Update</th>
                <th>Export</th>
              </thead>
              {Menus.length > 0 ? (
                <tbody style={{ marginLeft: "30px" }}>
                  <h5 style={{ marginLeft: "10px" }} className="text-blue">
                    Menus
                  </h5>
                  {Menus[0].map((role, i) => {
                    return (
                      <tr id={i}>
                        <td>{role.RoleName}</td>
                        <td>
                          <input
                            className="checkbox"
                            id={i}
                            type="checkbox"
                            name="Create"
                            defaultChecked={role.AddNew}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 1}
                            type="checkbox"
                            name="View"
                            defaultChecked={role.View}
                            //   value=""
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 2}
                            type="checkbox"
                            name="Delete"
                            defaultChecked={role.Remove}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Update"
                            defaultChecked={role.Edit}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Export"
                            defaultChecked={role.Export}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
              {UserManagement.length > 0 ? (
                <tbody style={{ marginLeft: "30px" }}>
                  <h5 style={{ marginLeft: "10px" }} className="text-blue">
                    User Management
                  </h5>
                  {UserManagement[0].map((role, i) => {
                    return (
                      <tr id={i}>
                        <td>{role.RoleName}</td>
                        <td>
                          <input
                            className="checkbox"
                            id={i}
                            type="checkbox"
                            name="Create"
                            defaultChecked={role.AddNew}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 1}
                            type="checkbox"
                            name="View"
                            defaultChecked={role.View}
                            //   value=""
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 2}
                            type="checkbox"
                            name="Delete"
                            defaultChecked={role.Remove}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Update"
                            defaultChecked={role.Edit}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Export"
                            defaultChecked={role.Export}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}

              {Configurations.length > 0 ? (
                <tbody style={{ marginLeft: "30px" }}>
                  <h5 style={{ marginLeft: "10px" }} className="text-blue">
                    Configurations
                  </h5>
                  {Configurations[0].map((role, i) => {
                    return (
                      <tr id={i}>
                        <td>{role.RoleName}</td>
                        <td>
                          <input
                            className="checkbox"
                            id={i}
                            type="checkbox"
                            name="Create"
                            defaultChecked={role.AddNew}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 1}
                            type="checkbox"
                            name="View"
                            defaultChecked={role.View}
                            //   value=""
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 2}
                            type="checkbox"
                            name="Delete"
                            defaultChecked={role.Remove}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Update"
                            defaultChecked={role.Edit}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Export"
                            defaultChecked={role.Export}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
              {InstituitionManagement.length > 0 ? (
                <tbody style={{ marginLeft: "30px" }}>
                  <h5 style={{ marginLeft: "10px" }} className="text-blue">
                    Instituition Management
                  </h5>
                  {InstituitionManagement[0].map((role, i) => {
                    return (
                      <tr id={i}>
                        <td>{role.RoleName}</td>
                        <td>
                          <input
                            className="checkbox"
                            id={i}
                            type="checkbox"
                            name="Create"
                            defaultChecked={role.AddNew}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 1}
                            type="checkbox"
                            name="View"
                            defaultChecked={role.View}
                            //   value=""
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 2}
                            type="checkbox"
                            name="Delete"
                            defaultChecked={role.Remove}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Update"
                            defaultChecked={role.Edit}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Export"
                            defaultChecked={role.Export}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
              {Reports.length > 0 ? (
                <tbody style={{ marginLeft: "30px" }}>
                  <h5 style={{ marginLeft: "10px" }} className="text-blue">
                    Reports
                  </h5>
                  {Reports[0].map((role, i) => {
                    return (
                      <tr id={i}>
                        <td>{role.RoleName}</td>
                        <td>
                          <input
                            className="checkbox"
                            id={i}
                            type="checkbox"
                            name="Create"
                            defaultChecked={role.AddNew}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 1}
                            type="checkbox"
                            name="View"
                            defaultChecked={role.View}
                            //   value=""
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 2}
                            type="checkbox"
                            name="Delete"
                            defaultChecked={role.Remove}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Update"
                            defaultChecked={role.Edit}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                        <td>
                          <input
                            className="checkbox"
                            id={i + 3}
                            type="checkbox"
                            name="Export"
                            defaultChecked={role.Export}
                            onChange={(e) => handleCheckBoxChange(role, e)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
            </table>

            <br />
            <div style={{ display: "flex", "justify-content": "flex-end" }}>
              <div class="d-flex flex-row ">
                <button
                  className="btn btn-primary p-2 float-right"
                  type="button"
                  onClick={closeRolesPoup}
                >
                  Done
                </button>
                &nbsp;
                <button
                  className="btn btn-warning p-2"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </div>
            </div>
            <br />
          </form>
        </div>
      </Modal>
    );
  };
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
        &nbsp;
        {useValidateRole("Assign Group Access", "AddNew") ? (
          <button
            className="btn btn-secondary p-2"
            type="button"
            onClick={handleShowRolesPoup}
          >
            Roles
          </button>
        ) : null}
        &nbsp;
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
        <li class="breadcrumb-item active">SecurityGroups</li>
      </ol>
      <h1 class="page-header mb-3">Security Groups</h1>
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
                <ExcelSheet data={state} name="Security Groups">
                  <ExcelColumn label="Name" value="Name" />
                  <ExcelColumn label="Description" value="Description" />
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
                Security Group
              </div>
            )}
          </div>
          <div className="container-fluid">
            <div className="col-sm-12">
              <div className="ibox-content">
                <br />

                {view ? (
                  <div>
                    <h3>Security Group</h3>
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Name:</td>
                          <td>{inputs.Name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Description:</td>
                          <td>{inputs.Description}</td>
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
                            name="Name"
                            required
                            value={inputs.Name}
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
                            name="Description"
                            required
                            value={inputs.Description}
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
      <RolesPoup />
    </div>
  );
};
export default SecurityGroups;
