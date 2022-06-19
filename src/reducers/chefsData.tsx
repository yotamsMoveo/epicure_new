const chefDataReducer = (state = "", action: any) => {
  switch (action.type) {
    case "GET_CHEF_DATA":
      return (state = "chef data");
    default:
      return "";
  }
};
export default chefDataReducer;
