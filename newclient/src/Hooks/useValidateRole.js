import useFetch from "../Hooks/useFetchData";
const useValidateRole = (rolename, action) => {
  const Roles = useFetch("/api/UserAccess");
   if (Roles.isLoading) {
    let role = Roles.response.find((obj) => obj.RoleName === rolename);
    if (role) {
      if (action === "AddNew") {
        if (role.AddNew) {
          return true;
        } else {
          return false;
        }
      } else if (action === "View") {
        if (role.View) {
          return true;
        } else {
          return false;
        }
      } else if (action === "Edit") {
        if (role.Edit) {
          return true;
        } else {
          return false;
        }
      } else if (action === "Export") {
        if (role.Export) {
          return true;
        } else {
          return false;
        }
      } else if (action == "Remove") {
        if (role.Remove) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export default useValidateRole;
