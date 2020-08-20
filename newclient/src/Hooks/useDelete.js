import swal from "sweetalert";
const useDelete = (url = ``) => {
  swal({
    text: "Are you sure that you want to remove this record?",
    icon: "warning",
    dangerMode: true,
    buttons: true,
  }).then((willDelete) => {
    if (willDelete) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": window.sessionStorage.getItem("xtoken"),
        },
      })
        .then((response) =>
          response.json().then((data) => {
            if (data.success) {
              swal("", "Deleted successfully", "success");
            } else {
              swal("", data.message, "error");
            }
          })
        )
        .catch((err) => {
          swal("", "Failed", "error");
        });
    }
  });
};

export default useDelete;
