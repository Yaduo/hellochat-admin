import React from "react";
import { Row, Col, Button } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import { PageListRenderer } from "./PageListRenderer";
import { SizePerPageRenderer } from "./SizePerPageRenderer";
import "./datatables.scss";

interface Column {
  dataField: any;
  text: any;
  sort: boolean;
}

interface PropsType {
  data: any[];
  columns: Column[];
  isCSVExprotable?: boolean;
  onRowClick?: (row, rowIndex) => void;
  onSizeChange?: (size) => void;
  onPageChange?: (page) => void;
  pagination?: {
    currentPage: number;
    totlaCount: number;
  };
}

const Datatable: React.FC<PropsType> = ({
  data,
  columns,
  isCSVExprotable,
  onRowClick,
  onSizeChange,
  onPageChange,
  pagination,
}) => {
  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;

  const pageOptions: any = {
    custom: true,
    sizePerPage: 10,
    totalSize: pagination ? pagination.totlaCount : data.length,
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      onRowClick && onRowClick(row, rowIndex);
    },
  };

  return (
    <PaginationProvider pagination={paginationFactory(pageOptions)}>
      {({ paginationProps, paginationTableProps }) => (
        <ToolkitProvider
          keyField="id"
          columns={columns}
          data={data}
          search
          exportCSV
        >
          {(toolkitProps) => (
            <React.Fragment>
              <Row className="mb-2">
                <Col md="3">
                  <div className="search-box me-2 mb-2 d-inline-block">
                    <div className="position-relative">
                      <SearchBar {...toolkitProps.searchProps} />
                      <i className="bx bx-search-alt search-icon" />
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <ExportCSVButton {...toolkitProps.csvProps}>
                    Export CSV!!
                  </ExportCSVButton>
                </Col>
              </Row>
              <Row>
                <Col xl="12">
                  <div className="table-responsive">
                    <BootstrapTable
                      rowEvents={rowEvents}
                      bordered={false}
                      striped={false}
                      classes={"table align-middle table-nowrap"}
                      headerWrapperClasses={"thead-light"}
                      {...toolkitProps.baseProps}
                      {...paginationTableProps}
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-md-center mt-30">
                <Col className="inner-custom-pagination d-flex">
                  <div className="d-inline">
                    <SizePerPageRenderer
                      options={[10, 20, 50, 100]}
                      onSizeChange={(size) => {
                        onSizeChange && onSizeChange(size);
                      }}
                    />
                  </div>
                  <div className="text-md-right ms-auto">
                    <PageListRenderer
                      currentPage={1}
                      totlaPage={100}
                      onPageChange={(page) =>
                        onPageChange && onPageChange(page)
                      }
                    />
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          )}
        </ToolkitProvider>
      )}
    </PaginationProvider>
  );
};

export default Datatable;