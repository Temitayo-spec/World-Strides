import { makeStyles } from "@material-ui/core/styles";

export const sidebarStyles = makeStyles((theme) => ({
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
    width: "100%",
  },
  container: {
    padding: "25px",
    width: "100%",
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)",
  },
  marginBottom: {
    marginBottom: "20px",
  },
  formControl: {
    color: "#f5f5f5",
    margin: theme.spacing(2),
    minWidth: 120,
    marginBottom: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  list: {
    height: "55vh",
    overflow: "auto",
    color: "#f5f5f5",

    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
  },
  select: {
    color: "#1e1e1e",
  },
}));
