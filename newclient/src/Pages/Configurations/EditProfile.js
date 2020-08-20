import React, { useEffect, useState } from "react";
import axios from "axios";
import { Progress } from "reactstrap";
import Modal from "react-awesome-modal";
import useUpdate from "../../Hooks/useUpdate";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const EditProfile = (props) => {
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState("");
  const [inputs, setInputs] = useState({});
  const [selectedFile, setselectedFile] = useState("");
  const [loaded, setloaded] = useState("");
  const url = process.env.REACT_APP_BASE_URL + "/api/users";
  const fetchData = () => {
    fetch(
      process.env.REACT_APP_BASE_URL +
        "/api/users/" +
        window.sessionStorage.getItem("UserName"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": window.sessionStorage.getItem("xtoken"),
        },
      }
    )
      .then((res) => res.json())
      .then((Data) => {
        if (Data.length > 0) {
          setInputs(Data[0]);
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

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 1) {
      const msg = "Only One file can be uploaded at a time";
      event.target.value = null;
      setmessage(msg);
      return false;
    }
    return true;
  };

  const onChangeHandler = (event) => {
    //for multiple files
    var files = event.target.files;
    if (maxSelectFile(event)) {
      setselectedFile(files);
      setloaded(0);
    }
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const data = new FormData();
      for (var x = 0; x < selectedFile.length; x++) {
        data.append("file", selectedFile[x]);
      }
      axios
        .post(process.env.REACT_APP_BASE_URL + "/api/Upload", data, {
          // receive two parameter endpoint url ,form data
          onUploadProgress: (ProgressEvent) => {
            setloaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
          },
        })
        .then((res) => {
          if (res.status == "200") {
            setmessage("Uploaded successfully");
            console.log(res);
            setInputs((inputs) => ({ ...inputs, Photo: res.data }));
          }
        })
        .catch((err) => {
          setmessage("upload fail");
        });
    } else {
      setmessage("Select a file to upload");
    }
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
      Photo: inputs.Photo,
    };
    useUpdate(url + "/" + inputs.Username, data);
  };
  const HandleSubmitPassword = () => {
    let data = {
      Username: window.sessionStorage.getItem("UserName"),
      NewPassword: inputs.NewPassword,
    };
    useUpdate(process.env.REACT_APP_BASE_URL + "/api/ResetPassword", data);
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    HandleUpdate();
  };
  const HandleChangePassword = (event) => {
    event.preventDefault();
    HandleSubmitPassword();
  };
  return (
    <div id="content" className="content">
      <ol class="breadcrumb float-xl-right">
        <li class="breadcrumb-item">
          <Modal visible={open} width="40%" height="30%" effect="fadeInUp">
            <div style={{ "overflow-y": "auto", height: "100%" }}>
              <a className="close" onClick={() => handleCloseModal()}>
                &times;
              </a>
              <div className="row">
                <div className="col-sm-5"></div>

                <div className="col-sm-4 fontWeight-bold text-blue">
                  Change Password
                </div>
              </div>
              <div className="container-fluid">
                <div className="col-sm-12">
                  <div className="ibox-content">
                    <form
                      className="form-horizontal"
                      onSubmit={HandleChangePassword}
                    >
                      <div className=" row">
                        <div className="col-sm">
                          <div className="form-group">
                            <label
                              htmlFor="Datereceived"
                              className="fontWeight-bold"
                            >
                              New Password
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="NewPassword"
                              required
                              value={inputs.NewPassword}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          "justify-content": "flex-end",
                        }}
                      >
                        <div class="d-flex flex-row">
                          <button className="btn btn-primary p-2" type="submit">
                            Submit
                          </button>
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
                  </div>
                </div>
              </div>
            </div>
          </Modal>
          <Link to="/">Home </Link>{" "}
        </li>
        <li class="breadcrumb-item active">EditProfile</li>
      </ol>
      <h1 class="page-header mb-3">EditProfile</h1>
      <div style={{ backgroundColor: "white" }}>
        <br />
        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="ibox-content">
              <form className="form-horizontal" onSubmit={HandleSubmit}>
                <div className=" row">
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="Datereceived" className="fontWeight-bold">
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
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="Datereceived" className="fontWeight-bold">
                        UserName
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Username"
                        disabled
                        required
                        value={inputs.Username}
                        onChange={handleInputChange}
                        // defaultvalue={inputs.name}
                      />
                    </div>
                  </div>
                </div>

                <div className=" row">
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="Datereceived" className="fontWeight-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="Email"
                        required
                        value={inputs.Email}
                        onChange={handleInputChange}
                        // defaultvalue={inputs.name}
                      />
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="Datereceived" className="fontWeight-bold">
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
                </div>
                <div className=" row">
                  {/* <div className="col-sm-6"> */}
                  <div className="col-sm">
                    <div className="form-group">
                      <label htmlFor="Datereceived" className="fontWeight-bold">
                        Photo
                      </label>
                      <div className="form-group">
                        <input
                          type="file"
                          className="form-control"
                          name="file"
                          onChange={onChangeHandler}
                          multiple
                        />
                        <div class="form-group">
                          <Progress max="100" color="success" value={loaded}>
                            {Math.round(loaded, 2)}%
                          </Progress>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-success "
                          onClick={onClickHandler}
                        >
                          Upload
                        </button>
                        <span class="upload">{message}</span>
                      </div>
                    </div>
                  </div>
                  {/* </div>   */}
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm">
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm-8"></div>
                      <div className="col-sm-4">
                        <div class="d-flex flex-row float-right">
                          <button className="btn btn-primary p-2" type="submit">
                            Update
                          </button>
                          &nbsp; &nbsp;
                          <button
                            className="btn btn-secondary p-2"
                            type="button"
                            onClick={handleOpenModal}
                          >
                            Change Password
                          </button>
                          &nbsp;&nbsp;
                          <button className="btn btn-warning p-2" type="button">
                            Close
                          </button>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
