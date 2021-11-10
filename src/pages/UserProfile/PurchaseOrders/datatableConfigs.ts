import moment from "moment";
const format = "YYYY-MM-DD HH:mm:ss";

export const columns = [
  {
    dataField: "id",
    text: "id",
    sort: false,
  },
  {
    dataField: "type",
    text: "type",
    sort: false,
  },
  {
    dataField: "description",
    text: "description",
    sort: false,
  },
  {
    dataField: "amount",
    text: "amount",
    sort: false,
    formatter: (value) => `$${value}CAD`,
  },
  {
    dataField: "createdDate",
    text: "createdDate",
    sort: false,
    formatter: (value) => moment(value).format(format),
  },
  {
    dataField: "finishedDate",
    text: "finishedDate",
    sort: false,
    formatter: (value) => moment(value).format(format),
  },
  {
    dataField: "status",
    text: "status",
    sort: false,
  },
];
