import swal from "sweetalert";
const useSave = (url = ``, inputs = {}) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": window.sessionStorage.getItem("xtoken"),
    },
    body: JSON.stringify(inputs),
  })
    .then((response) =>
      response.json().then((data) => {
        if (data.success) {
          swal("", "Saved successfully", "success");
        } else {
          swal("", "Could not be saved", "error");
        }
      })
    )
    .catch((err) => {
      swal("", "Failed", "error");
    });
};
export default useSave;
