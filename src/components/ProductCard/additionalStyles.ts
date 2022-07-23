export const cardStyles = {
    position: "relative",
    height: "100%",
    maxHeight: "100%",
    transform: "scale(0.98)",
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    transition: "all ease-in 0.2s",
    "&:hover": {
      transform: "scale(1)",
      boxShadow:
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    },
  };


export const cardMediaStyles = {
  height: "50%",
  objectFit: "contain",
}



export const cardContentStyles = {
  width: "100%",
  height: "50%",
  justifyContent: "center",
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
}  