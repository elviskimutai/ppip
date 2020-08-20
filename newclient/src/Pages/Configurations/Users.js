import React, { useEffect, useState } from "react";
import Table from "./../../Components/Table";
import useSave from "../../Hooks/useSave";
import useDelete from "../../Hooks/useDelete";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import Select from "react-select";
import useValidateRole from "../../Hooks/useValidateRole";
import useFetchData from "../../Hooks/useFetchData";
import ReactExport from "react-data-export";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const Users = (props) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [view, setview] = useState(false);
  const [update, setUpdate] = useState(false);
  const [showRolesPoup, setshowRolesPoup] = useState(false);
  const [Roles, setRoles] = useState([]);
  const [PageRole, setPageRole] = useState("System Users");
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
  const SecurityGroups = useFetchData("/api/usergroups");
  const url = process.env.REACT_APP_BASE_URL + "/api/users";
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
          setState([]);
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
    fetch(process.env.REACT_APP_BASE_URL + "/api/UserAccess/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": window.sessionStorage.getItem("xtoken"),
      },
    })
      .then((res) => res.json())
      .then((Data) => {
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

  const handleShowRolesPoup = () => {
    setOpen(false);
    setUpdate(false);
    setshowRolesPoup(true);
  };

  const closeRolesPoup = () => {
    setshowRolesPoup(false);
    setUpdate(false);
  };

  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs((inputs) => ({ ...inputs, [actionMeta.name]: UserGroup.value }));
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
  const handleShowRolesPoupdropdown = (k) => {
    setInputs({});
    setInputs(k);
    Fetchroles(k.Username);
    setOpen(false);
    setUpdate(false);
    setshowRolesPoup(true);
  };
  const handleView = (k) => {
    setInputs({});
    setInputs(k);
    Fetchroles(k.Username);
    setview(true);
    setUpdate(false);
    setOpen(true);
  };

  const handleCloseModal = () => {
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
      Phone: inputs.Phone,
      UserGroupID: inputs.UserGroupID,
      Username: inputs.Username,
      Password: inputs.Password,
      Email: inputs.Email,
      Gender: inputs.Gender,
      IdNumber: inputs.IdNumber,
      IsActive: !!inputs.IsActive,
    };
    useUpdate(url + "/" + inputs.Username, data);
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
    useDelete(url + "/" + inputs.Username);
    fetchData();
  };
  const HandelDelete = () => {
    if (inputs.Username) {
      CallDeletehook();
    } else {
      alert("Select a record to delete");
    }
  };
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
          {useValidateRole("Assign User Access", "Edit") ? (
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
  const ColumnData = [
    {
      label: "UserName",
      field: "userName",
      sort: "asc",
    },
    {
      label: "Name",
      field: "name",
      sort: "asc",
    },
    {
      label: "Mobile",
      field: "mobile",
      sort: "asc",
    },
    {
      label: "Email",
      field: "email",
      sort: "asc",
    },
    {
      label: "Status",
      field: "status",
      sort: "asc",
    },
    {
      label: "Usergroup",
      field: "Usergroup",
      sort: "asc",
    },
    {
      label: "Actions",
      field: "Actions",
      sort: "asc",
    },
  ];
  let Rowdata1 = [];
  const rows = state;
  if (rows.length > 0) {
    rows.forEach((k) => {
      const Rowdata = {
        userName: k.Username,
        mobile: k.Phone,
        Usergroup: k.Usergroup,
        status: k.IsActive.toString() === "true" ? "Active" : "In Active",
        email: k.Email,
        name: k.Name,
        Actions: <MoreActions selecteditem={k} />,
      };
      Rowdata1.push(Rowdata);
    });
  }
  const RolesSelect = () => {
    const CategoryOptions = [];
    if (SecurityGroups.response) {
      SecurityGroups.response.map((k, i) => {
        let col = {
          value: k.UserGroupID,
          label: k.Name,
        };
        CategoryOptions.push(col);
      });
    }

    return (
      <Select
        name="UserGroupID"
        value={CategoryOptions.filter(
          (option) => option.value === inputs.UserGroupID
        )}
        //defaultInputValue={inputs.securityGroupId}
        onChange={handleSelectChange}
        options={CategoryOptions}
      />
    );
  };
  const HandleRolesUpdate = (puturl, data = {}) => {
    useUpdate(puturl, data);
  };
  const handleCheckBoxChange = (Role, e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    let data = {
      UserName: Role.Username,
      Role: Role.RoleID,
      Status: value,
      Name: name,
    };
    HandleRolesUpdate(process.env.REACT_APP_BASE_URL + "/api/UserAccess", data);
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
                </button>{" "}
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
            className="btn btn-primary p-2"
            type="button"
            onClick={handleEditold}
          >
            Update
          </button>
        ) : null}
        &nbsp;
        {useValidateRole("Assign User Access", "AddNew") ? (
          <button
            className="btn btn-info p-2"
            type="button"
            onClick={handleShowRolesPoup}
          >
            Roles
          </button>
        ) : null}
        &nbsp; &nbsp;
        {useValidateRole(PageRole, "Remove") ? (
          <button onClick={HandelDelete} className="btn btn-danger p-2">
            Delete
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
        <li class="breadcrumb-item active">Users</li>
      </ol>
      <h1 class="page-header mb-3">Users</h1>
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
                &nbsp; New User&nbsp;&nbsp;
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
                <ExcelSheet data={state} name="Users">
                  <ExcelColumn label="Name" value="Name" />
                  <ExcelColumn label="Username" value="Username" />
                  <ExcelColumn label="Phone" value="Phone" />
                  <ExcelColumn label="Usergroup" value="Usergroup" />
                  <ExcelColumn label="Email" value="Email" />
                  <ExcelColumn label="IsActive" value="IsActive" />
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
      <Modal visible={open} width="70%" height="60%" effect="fadeInUp">
        <div style={{ "overflow-y": "auto", height: "100%" }}>
          <a className="close" onClick={() => handleCloseModal()}>
            &times;
          </a>

          <div className="row">
            <div className="col-sm-5"></div>
          </div>
          <div
            className="row"
            style={{
              background: "",
            }}
          >
            <div class="col-xs-12 center-block text-center">
              {view ? (
                <h3 className="text-center font-weight-bold">{inputs.Name}</h3>
              ) : (
                <h3 className="text-center font-weight-bold">System User</h3>
              )}
            </div>
          </div>
          <div className="container-fluid">
            <div className="col-sm-12">
              <div className="ibox-content">
                {view ? (
                  <img
                    src={
                      process.env.REACT_APP_BASE_URL +
                      "/profilepics/" +
                      inputs.Photo
                    }
                    alt="Smiley face"
                    height="100"
                    width="100"
                  />
                ) : null}

                {view ? (
                  <div>
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                          <td
                            className="font-weight-bold"
                            style={{ width: "20%" }}
                          >
                            Name:
                          </td>
                          <td>{inputs.Name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">UserName:</td>
                          <td>{inputs.Username}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Email:</td>
                          <td>{inputs.Email}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Mobile:</td>
                          <td>{inputs.Phone}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Security Group:</td>
                          <td>{inputs.Usergroup}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div
                      style={{ display: "flex", "justify-content": "flex-end" }}
                    >
                      <ActionsBtn />
                    </div>
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
                            value={inputs.Name || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="form-group">
                          <label
                            htmlFor="Datereceived"
                            className="fontWeight-bold"
                          >
                            UserName
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="Username"
                            required
                            value={inputs.Username || ""}
                            onChange={handleInputChange}
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
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="Email"
                            required
                            value={inputs.Email || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="form-group">
                          <label
                            htmlFor="Datereceived"
                            className="fontWeight-bold"
                          >
                            Security group
                          </label>
                          <RolesSelect />
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
                            Mobile
                          </label>
                          <PhoneInput
                            country={"KE"}
                            //international
                            regions={"africa"}
                            defaultCountry={"KE"}
                            value={inputs.Phone}
                            onChange={(Phone) =>
                              setInputs({ ...inputs, ["Phone"]: Phone })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-sm">
                        <div className="row">
                          {update ? null : (
                            <div className="col-sm">
                              <div className="form-group">
                                <label
                                  htmlFor="Datereceived"
                                  className="fontWeight-bold"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="Password"
                                  required
                                  value={inputs.Password || ""}
                                  onChange={handleInputChange}
                                  // defaultvalue={inputs.name}
                                />
                              </div>
                            </div>
                          )}

                          <div className="col-sm">
                            <div className="form-check">
                              <br />
                              <br />
                              <input
                                type="checkbox"
                                onChange={handleInputChange}
                                className="form-check-input"
                                name="IsActive"
                                defaultChecked={inputs.IsActive}
                                id="exampleCheck1"
                              />
                              <label className="form-check-label">
                                Is Active
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          "justify-content": "flex-end",
                        }}
                      >
                        <div class="d-flex flex-row">
                          {update ? (
                            <button
                              className="btn btn-primary p-2"
                              type="submit"
                            >
                              Update
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary p-2"
                              type="submit"
                            >
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
export default Users;
