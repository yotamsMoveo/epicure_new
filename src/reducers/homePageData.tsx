const homePageReducer = (state = null, action:any) => {
    switch (action.type) {
      case "GET_HOME_PAGE_DATA":
        return "home page data";
      default:
        return "";
    }
  };
  export default homePageReducer;