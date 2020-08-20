import React, { useEffect, useState } from "react";
import Table from "./../../Components/Table";
import useSave from "../../Hooks/useSave";
import useDelete from "../../Hooks/useDelete";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import Modal from "react-awesome-modal";
import useValidateRole from "../../Hooks/useValidateRole";
const Smtp = (props) => {
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [view, setview] = useState(false);
  const [update, setUpdate] = useState(false);
  const [PageRole, setPageRole] = useState("Smtp");
  const url = "api/Smtp";
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
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const handleOpenModal = (event) => {
    //event.persist();
    setInputs({});
    setOpen(true);
  };
  const handleSelectChange = (UserGroup, actionMeta) => {
    setInputs((inputs) => ({ ...inputs, [actionMeta.Host]: UserGroup.value }));
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const Host = target.Host;
    setInputs((inputs) => ({ ...inputs, [Host]: value }));
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
  const HandleSave = async () => {
    useSave(url, inputs);
    await sleep(2000);
    fetchData();
  };
  const HandleUpdate = async () => {
    useUpdate(url + "/" + inputs.id, inputs);
    await sleep(2000);
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
  const CallDeletehook = async () => {
    useDelete(url + "/" + inputs.id);
    await sleep(2000);
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
      label: "Sender",
      field: "sender",
      sort: "asc",
    },
    {
      label: "Host",
      field: "host",
      sort: "asc",
    },
    {
      label: "Password",
      field: "password",
      sort: "asc",
    },
  ];
  let Rowdata1 = [];
  const rows = state;

  if (rows.length > 0) {
    rows.forEach((k) => {
      const Rowdata = {
        clickEvent: () => handleSelect(k),
        Sender: k.sender,
        Host: k.host,
        Password: k.password,
      };
      Rowdata1.push(Rowdata);
    });
  }

  const ActionsBtn = () => {
    return (
      <div>
        {useValidateRole(PageRole, "Edit") ? (
          <button
            classHost="btn btn-primary p-2"
            type="button"
            onClick={handleEdit}
          >
            Update
          </button>
        ) : null}
        &nbsp; &nbsp;
        {useValidateRole(PageRole, "Remove") ? (
          <button onClick={HandelDelete} classHost="btn btn-danger p-2">
            Delete
          </button>
        ) : null}
        &nbsp;
        <button
          classHost="btn btn-warning p-2"
          type="button"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    );
  };
  return (
    <div id="content" classHost="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          {" "}
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">Smtp</li>
      </ol>
      <h1 class="page-header mb-3">Smtp</h1>
      <div style={{ backgroundColor: "white" }}>
        <div classHost="row">
          <div class="col-sm-12 d-flex flex-row float-right">
            &nbsp; &nbsp; &nbsp;
            {useValidateRole(PageRole, "AddNew") ? (
              <button
                onClick={handleOpenModal}
                classHost="btn btn-primary p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; New &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "View") ? (
              <button
                onClick={handleView}
                classHost="btn btn-success p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; View &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "Edit") ? (
              <button
                onClick={handleEdit}
                classHost="btn btn-info p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; Edit &nbsp;
              </button>
            ) : null}
            {useValidateRole(PageRole, "Remove") ? (
              <button
                onClick={HandelDelete}
                classHost="btn btn-danger p-2"
                style={{ marginRight: 5, marginTop: 5 }}
              >
                &nbsp; Delete &nbsp;
              </button>
            ) : null}
          </div>
        </div>
        <div classHost="row">
          <div classHost="col-sm-12">
            <Table Rows={Rowdata1} columns={ColumnData} />
          </div>
        </div>
      </div>

      <Modal visible={open} width="60%" height="40%" effect="fadeInUp">
        <div style={{ "overflow-y": "auto", height: "100%" }}>
          <a classHost="close" onClick={() => handleCloseModal()}>
            &times;
          </a>

          <div classHost="row">
            <div classHost="col-sm-5"></div>
            {view ? null : (
              <div classHost="col-sm-4 fontWeight-bold text-blue">Smtp</div>
            )}
          </div>
          <div classHost="container-fluid">
            <div classHost="col-sm-12">
              <div classHost="ibox-content">
                <br />

                {view ? (
                  <div>
                    <h3>Smtp</h3>
                    <table classHost="table table-sm">
                      <tbody>
                        <tr>
                          <td classHost="font-weight-bold">Sender:</td>
                          <td>{inputs.sender}</td>
                        </tr>
                        <tr>
                          <td classHost="font-weight-bold">Host:</td>
                          <td>{inputs.host}</td>
                        </tr>
                        <tr>
                          <td classHost="font-weight-bold">Password:</td>
                          <td>{inputs.password}</td>
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
                  <form classHost="form-horizontal" onSubmit={HandleSubmit}>
                    <div classHost=" row">
                      <div classHost="col-sm">
                        <div classHost="form-group">
                          <label
                            htmlFor="Datereceived"
                            classHost="fontWeight-bold"
                          >
                            Sender
                          </label>
                          <input
                            type="text"
                            classHost="form-control"
                            name="sender"
                            required
                            value={inputs.sender}
                            onChange={handleInputChange}
                            // defaultvalue={inputs.Host}
                          />
                        </div>
                      </div>
                      <div classHost="col-sm">
                        <div classHost="form-group"></div>
                      </div>
                    </div>
                    <div classHost=" row">
                      <div classHost="col-sm">
                        <div classHost="form-group">
                          <label
                            htmlFor="Datereceived"
                            classHost="fontWeight-bold"
                          >
                            Host
                          </label>
                          <input
                            type="text"
                            classHost="form-control"
                            name="host"
                            required
                            value={inputs.host}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div classHost="col-sm">
                        <div classHost="form-group">
                          <label
                            htmlFor="Datereceived"
                            classHost="fontWeight-bold"
                          >
                            Password
                          </label>
                          <input
                            type="text"
                            classHost="form-control"
                            name="password"
                            required
                            value={inputs.Password}
                            onChange={handleInputChange}
                            // defaultvalue={inputs.Host}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", "justify-content": "flex-end" }}
                    >
                      <div class="d-flex flex-row">
                        {update ? (
                          <button classHost="btn btn-primary p-2" type="submit">
                            Update
                          </button>
                        ) : (
                          <button classHost="btn btn-primary p-2" type="submit">
                            Submit
                          </button>
                        )}
                        &nbsp;
                        <button
                          classHost="btn btn-warning p-2"
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
export default Smtp;
