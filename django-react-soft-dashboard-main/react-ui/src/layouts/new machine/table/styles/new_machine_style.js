import { makeStyles } from "@mui/styles";

export default makeStyles(({ functions }) => {
  const { pxToRem } = functions;
  return {
    title_table_row_style: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      textAlign: "center",
      // border: "1px solid black",
      padding: "0 1rem",
      backgroundColor: "#f5f5f5",
    },
    table_row_style: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      textAlign: "center",
      padding: "0 1rem",
      transition: "background-color 0.1s ease",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
    line_form_style: {
      display: "flex",
      alignItems: "center",
      marginBottom: "14px",
      color: "#000000",
      fontSize: "18px",
    },
    title_checkbox_style: {
      width: pxToRem(10),
      textAlign: "center",
      fontSize: pxToRem(16),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    title_platform_style: {
      width: pxToRem(200),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_phase_style: {
      width: pxToRem(120),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_target_style: {
      width: pxToRem(80),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_group_style: {
      width: pxToRem(130),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_cycle_style: {
      width: pxToRem(90),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_sku_style: {
      width: pxToRem(60),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_sn_style: {
      width: pxToRem(150),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_position_style: {
      width: pxToRem(100),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_remark_style: {
      width: pxToRem(100),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    title_acquirer_style: {
      width: pxToRem(200),
      textAlign: "center",
      fontSize: pxToRem(17),
      wordWrap: "break-word",
      borderBottom: "none !important",
      fontWeight: 900,
      color: "#333333",
    },
    checkbox_style: {
      width: pxToRem(10),
      textAlign: "center",
      fontSize: pxToRem(16),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    platform_style: {
      width: pxToRem(200),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    phase_style: {
      width: pxToRem(120),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    target_style: {
      width: pxToRem(80),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    group_style: {
      width: pxToRem(130),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    cycle_style: {
      width: pxToRem(90),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    sku_style: {
      width: pxToRem(60),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    sn_style: {
      width: pxToRem(150),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    borrower_style: {
      width: pxToRem(100),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    position_style: {
      width: pxToRem(100),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    remark_style: {
      width: pxToRem(100),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
    acquirer_style: {
      width: pxToRem(200),
      textAlign: "center",
      fontSize: pxToRem(14),
      wordWrap: "break-word",
      borderBottom: "none !important",
    },
  };
});
