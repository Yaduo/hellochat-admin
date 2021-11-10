import React, { useEffect, useState } from "react";
import axios from "axios";
import configs from "src/config";
import { Datatable } from "src/components/Common/Datatable/Datatable";
import { useSelector } from "src/store/hooks";
import { columns } from "./datatableConfigs";

const WalletTransactionList = ({ user }) => {
  const access_token = useSelector((s) => s.user.token);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async (page = 0, size = 10) => {
    setLoading(true);
    // get wallet
    const { data: walletData } = await axios.get(
      `${configs.BASE_API_URL}/proxy/hellochat/wallets/by-member-id/${user.memberId}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    if (walletData == null) {
      return;
    }
    // get wallet transactions
    const { data: transactionsData } = await axios.get(
      `${configs.BASE_API_URL}/proxy/hellochat/wallets/${walletData[0].walletId}/transactions?page=${page}&size=${size}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    setTransactions(transactionsData.content);
    setTotalElements(transactionsData.totalElements);
    setTotalPages(transactionsData.totalPages);
    setCurrentPage(page);
    setPageSize(size);
    setLoading(false);
  };

  return (
    <div className="container-fluid">
      <Datatable
        loading={loading}
        data={transactions}
        columns={columns}
        pagination={{
          currentPage,
          totalElements,
          totalPages,
          pageSize,
        }}
        onPageChange={(page) => {
          getTransactions(page, pageSize);
        }}
        onSizeChange={(size) => {
          getTransactions(0, size);
        }}
        onRowClick={(row, rowIndex) => {
          //   history.push(`/hellochat-users/${row.hellochatId}`);
        }}
      />
    </div>
  );
};

export default WalletTransactionList;
