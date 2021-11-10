import moment from "moment";
const format = "YYYY-MM-DD HH:mm:ss";

export const columns = [
  {
    dataField: "id",
    text: "id",
    sort: false,
  },
  {
    dataField: "txId",
    text: "txId",
    sort: false,
  },
  {
    dataField: "paymentType",
    text: "paymentType",
    sort: false,
  },
  {
    dataField: "type",
    text: "type",
    sort: false,
  },
  {
    dataField: "counterpartyId",
    text: "counterpartyId",
    sort: false,
  },
  {
    dataField: "counterpartyLabel",
    text: "counterpartyLabel",
    sort: false,
  },
  {
    dataField: "counterpartyUserId",
    text: "counterpartyUserId",
    sort: false,
  },
  {
    dataField: "amount",
    text: "amount",
    sort: false,
    formatter: (value) => `$${value}CAD`
  },
  {
    dataField: "balance",
    text: "balance",
    sort: false,
    formatter: (value) => `$${value}CAD`
  },
  {
    dataField: "description",
    text: "description",
    sort: false,
  },
  {
    dataField: "dateTime",
    text: "dateTime",
    sort: false,
    formatter: (value) => moment(value).format(format),
  },
];
