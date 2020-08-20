import React, { useEffect, useState } from "react";
import Table from "./../../Components/Table";
import useFetch from "../../Hooks/useFetch";
import useSave from "../../Hooks/useSave";
import useDelete from "../../Hooks/useDelete";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import useValidateRole from "../../Hooks/useValidateRole";
import Select from "react-select";
const Towns = (props) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [view, setview] = useState(false);
  const [update, setUpdate] = useState(false);
  const [PageRole, setPageRole] = useState("Towns");
  const url = "api/Towns";
  const [state, setState] = useState([]);
  const fetchData = () => {
    setState([]);
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.sessionStorage.getItem("xtoken"),
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
  const handleOpenModal = (event) => {
    //event.persist();
    setInputs({});
    setOpen(true);
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

  const handleEdit = () => {
    if (inputs.id) {
      setOpen(true);
      setUpdate(true);
      setview(false);
    } else {
      alert("Select a record to edit");
    }
  };
  const handleView = () => {
    if (inputs.id) {
      setview(true);
      setUpdate(false);
      setOpen(true);
    } else {
      alert("Select a record to veiw");
    }
  };
  const handleSelect = (k, event) => {
    setInputs({});
    setInputs(k);
  };
  const handleCloseModal = () => {
    setInputs({});
    setOpen(false);
    setview(false);
    setUpdate(false);
  };
  const HandleSave = () => {
    useSave(url, inputs);
    fetchData();
  };
  const HandleUpdate = () => {
    useUpdate(url + "/" + inputs.id, inputs);
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
    useDelete(url + "/" + inputs.id);
    fetchData();
  };
  const HandelDelete = () => {
    if (inputs.id) {
      CallDeletehook();
    } else {
      alert("Select a record to delete");
    }
  };
  const ColumnData = [
    {
      label: "Names",
      field: "name",
      sort: "asc",
    },
    {
      label: "status",
      field: "status",
      sort: "asc",
    },
  ];
  let Rowdata1 = [];
  const rows = state;

  if (rows.length > 0) {
    rows.forEach((k) => {
      const Rowdata = {
        clickEvent: () => handleSelect(k),
        status: k.status,
        name: k.name,
      };
      Rowdata1.push(Rowdata);
    });
  }

  const ActionsBtn = () => {
    return (
      <div>
        {useValidateRole(PageRole, "Edit") ? (
          <button
            className="btn btn-primary p-2"
            type="button"
            onClick={handleEdit}
          >
            Update
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
  let statusOptions = [
    {
      value: "Municipality",
      label: "Municipality",
    },
    {
      value: "Town Council",
      label: "Town Council",
    },
    {
      value: "Other Centre",
      label: "Other Centre",
    },
    {
      value: "City",
      label: "City",
    },
  ];
  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          {" "}
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">Towns</li>
      </ol>
      <h1 class="page-header mb-3">Towns</h1>
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
            {useValidateRole(PageRole, "View") ? (
              <button
                onClick={handleView}
                className="btn btn-success p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; View &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "Edit") ? (
              <button
                onClick={handleEdit}
                className="btn btn-info p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; Edit &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "Remove") ? (
              <button
                onClick={HandelDelete}
                className="btn btn-danger p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; Delete &nbsp;
              </button>
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
              <div className="col-sm-4 fontWeight-bold text-blue">Towns</div>
            )}
          </div>
          <div className="container-fluid">
            <div className="col-sm-12">
              <div className="ibox-content">
                <br />

                {view ? (
                  <div>
                    <h3>Towns</h3>
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Name:</td>
                          <td>{inputs.name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Status:</td>
                          <td>{inputs.status}</td>
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
                            Status
                          </label>
                          <Select
                            name="status"
                            value={statusOptions.filter(
                              (option) => option.value === inputs.status
                            )}
                            //defaultInputValue={inputs.securityGroupId}
                            onChange={handleSelectChange}
                            options={statusOptions}
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
export default Towns;
