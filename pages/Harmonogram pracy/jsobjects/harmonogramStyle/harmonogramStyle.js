export default {
  bg(value) {
    if (value !== "" && value !== null && value !== undefined && !isNaN(Number(value))) {
      return "#64748b";
    }

    return {
      "B": "#CFEFFF",
      "PZ-H": "#00AEEF",
      "PZ-O": "#00AEEF",
      "UW": "#8CE000",
      "UŻ": "#8CE000",
      "CH": "#F26A4F",
			"CHOP": "#F26A4F",
			"S": "#fde047",
      "Ś": "#E64699",
      "DW": "#E64699",
      "W5": "#E64699",
      "N": "#E64699"
    }[value] || "#FFFFFF";
  },

  color(value) {
    return value !== "" && value !== null && value !== undefined && !isNaN(Number(value))
      ? "#f8fafc"
      : "#000000";
  }
}