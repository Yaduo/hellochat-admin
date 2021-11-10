import React from "react";
import { Row, Col, Spinner } from "reactstrap";
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
  loading?: boolean;
  data: any[];
  columns: Column[];
  isCSVExprotable?: boolean;
  onRowClick?: (row, rowIndex) => void;
  onSizeChange?: (size) => void;
  onPageChange?: (page) => void;
  pagination: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
}

export const Datatable: React.FC<PropsType> = ({
  loading,
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
    sizePerPage: pagination.pageSize,
    totalSize: pagination.totalElements,
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      onRowClick && onRowClick(row, rowIndex);
    },
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

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
              {/* <Row className="mb-2">
                <Col md="3">
                  <ExportCSVButton {...toolkitProps.csvProps}>
                    Export CSV!!
                  </ExportCSVButton>
                </Col>
              </Row> */}
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
                      currentSize={pagination.pageSize}
                      onSizeChange={(size) => {
                        onSizeChange && onSizeChange(size);
                      }}
                    />
                  </div>
                  <div className="text-md-right ms-auto">
                    <PageListRenderer
                      currentPage={pagination.currentPage + 1}
                      totlaPage={pagination.totalPages}
                      onPageChange={(page) =>
                        onPageChange && onPageChange(page - 1)
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