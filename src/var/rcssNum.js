import pnum from "./pnum"

export default  new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

