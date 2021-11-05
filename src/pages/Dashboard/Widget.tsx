import React from "react";
import { Card, CardBody, Col, Row, Spinner } from "reactstrap";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import classname from "classname";

const options: Object = {
  chart: {
    height: 50,
    type: "line",
    toolbar: { show: false },
  },
  colors: ["#5156be"],
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName: any) {
          return "";
        },
      },
    },
    marker: {
      show: false,
    },
  },
};

interface WidgetData {
  loading;
  title;
  data: Data;
}

interface Data {
  value: any;
  preFix?: any;
  series: any;
  rank: any;
}

const Widget = ({ loading, title, data }: WidgetData) => {
  return (
    <Card className="card-h-100">
      <CardBody>
        {loading ? (
          <Row className="align-items-center">
            <Col xs={6}>
              <span className="text-muted mb-3 lh-1 d-block text-truncate">
                {title}
              </span>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          </Row>
        ) : data == null ? (
          <Row className="align-items-center">
            <Col xs={6}>
              <span className="text-muted mb-3 lh-1 d-block text-truncate">
                {title}
              </span>
              <h4 className="mb-3">
                <span className="counter-value">{"no data available."}</span>
              </h4>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="align-items-center">
              <Col xs={6}>
                <span className="text-muted mb-3 lh-1 d-block text-truncate">
                  {title}
                </span>
                <h4 className="mb-3">
                  <span className="counter-value">
                    {data.preFix}
                    <CountUp start={0} end={data.value} duration={1} />
                  </span>
                </h4>
              </Col>
              <Col xs={6}>
                {data.series && (
                  <ReactApexChart
                    options={options}
                    series={[
                      {
                        data: [...data.series],
                      },
                    ]}
                    type="line"
                    className="apex-charts"
                    dir="ltr"
                  />
                )}
              </Col>
            </Row>
            {data.rank && (
              <div className="text-nowrap">
                <span
                  className={classname("badge", {
                    "badge-soft-success": data.rank > 0,
                    "badge-soft-danger": data.rank < 0,
                    "badge-soft-info": data.rank == 0,
                    "text-success": data.rank > 0,
                    "text-danger": data.rank < 0,
                    "text-info": data.rank == 0,
                  })}
                >
                  {data.rank}
                </span>
                <span className="ms-1 text-muted font-size-13">
                  Since yesterday
                </span>
              </div>
            )}
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default Widget;
