import swal from "sweetalert";
const useUpdate = (url = ``, inputs = {}) => {
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": window.sessionStorage.getItem("xtoken"),
    },
    body: JSON.stringify(inputs),
  })
    .then((response) =>
      response.json().then((data) => {
        if (data.success) {
          swal("", "Updated successfully", "success");
        } else {
          swal("", data.message, "error");
        }
      })
    )
    .catch((err) => {
      swal("", "Failed", "error");
    });
};
export default useUpdate;
