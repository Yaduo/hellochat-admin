import React, { useEffect, useState } from "react";
import axios from "axios";
import configs from "src/config";
import Datatable from "src/components/Common/Datatable/Datatable";
import { useSelector } from "src/store/hooks";
import { columns } from "./datatableConfigs";
import PaymentTypeDropdown, { PaymentType } from "./PaymentTypeDropdown";

const PurchaseOrdersList = ({ user }) => {
  const access_token = useSelector((s) => s.user.token);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [paymentType, setPaymentType] = useState<PaymentType>("wallet");

  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async (
    page = 0,
    size = 10,
    paymentType: PaymentType = "wallet"
  ) => {
    setLoading(true);

    let url = `${configs.BASE_API_URL}/proxy/hellochat/payment-orders/${user.hellochatId}?page=${page}&size=${size}`;
    if (paymentType || paymentType != "wallet") {
      url = url + `&paymentType=${paymentType}`;
    }
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    setOrders(data.content);
    setPaymentType(paymentType);
    setTotalElements(data.totalElements);
    setTotalPages(data.totalPages);
    setCurrentPage(page);
    setPageSize(size);
    setLoading(false);
  };

  return (
    <div className="container-fluid">
      <div>
        <PaymentTypeDropdown
          currentPaymentType={paymentType}
          types={["wallet", "alipay", "wechatpay", "stripe", "bambora"]}
          onTypeChange={(type) => {
            getOrders(0, pageSize, type);
          }}
        />
      </div>
      <Datatable
        loading={loading}
        data={orders}
        columns={columns}
        pagination={{
          currentPage,
          totalElements,
          totalPages,
          pageSize,
        }}
        onPageChange={(page) => {
          getOrders(page, pageSize, paymentType);
        }}
        onSizeChange={(size) => {
          getOrders(0, size, paymentType);
        }}
        onRowClick={(row, rowIndex) => {
          //   history.push(`/hellochat-users/${row.hellochatId}`);
        }}
      />
    </div>
  );
};

export default PurchaseOrdersList;
