import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const Table = () => {


  const user=useSelector((state)=>state.user?.user || [])
  const url = process.env.REACT_APP_SERVER_DOMAIN
  console.log("user", user)



 
 useEffect(()=>{

  const transactionData=async()=>{
    try{
       const response=await axios.get(`${url}/api/get_transaction_history/page/1`,{
        headers: {
          "Authorization":`Bearer${user?.accessToken}`
        
        }
      });
      console.log(response.data)
    }
    catch(error){
       toast.error(error.message)
    }
    
  }
  transactionData()
 // eslint-disable-next-line
 },[user])
  const tableData = [
    {
      id: 1,
      TransactionId: "202",
      Name: "Asad Javaid",
      Email: "Asadjavaid.com.au",
      Account: "0.2",
      Card: true,
      Location: "12 Sutherland Rd, Cheltenham NSW 2119, Austrailia",
      PaymentMethod: "Apple Pay",
    },
    {
      id: 2,
      TransactionId: "203",
      Name: "syed Hammad",
      Email: "syedhammad@gmail.com",
      Account: "0.2",
      Card: false,
      Location: "Gulshan-e-ravi, Lahore",
      PaymentMethod: "Apple Pay",
    },
    {
      id: 3,
      TransactionId: "204",
      Name: "Asad Javaid",
      Email: "Asadjavaid.com.au",
      Account: "0.2",
      Card: true,
      Location: "12 Sutherland Rd, Cheltenham NSW 2119, Austrailia",
      PaymentMethod: "Apple Pay",
    },
    {
      id: 4,
      TransactionId: "205",
      Name: "Khizar Abbas",
      Email: "Asadjavaid.com.au",
      Account: "0.1",
      Card: false,
      Location: "12 Sutherland Rd, Cheltenham NSW 2119, Austrailia",
      PaymentMethod: "Apple Pay",
    },
  ];

  const [searchTerms, setSearchTerms] = useState({
    TransactionId: "",
    Name: "",
    Email: "",
    Account: "",
    Card: "",
    Location: "",
    PaymentMethod: "",
  });

  // const filterData = tableData.filter((item) => {
  //   return (
  //     item.TransactionId.toLowerCase().includes(
  //       searchTerms.TransactionId.toLowerCase()
  //     ) &&
  //     item.Name.toLowerCase().includes(searchTerms.Name.toLowerCase()) &&
  //     item.Email.toLowerCase().includes(searchTerms.Email.toLowerCase()) &&
  //     item.Account.toLowerCase().includes(searchTerms.Account.toLowerCase()) &&
  //     (item.Card ? "credit" : "debit")
  //       .toLowerCase()
  //       .includes(searchTerms.Card.toLowerCase()) &&
  //     item.Location.toLowerCase().includes(
  //       searchTerms.Location.toLowerCase()
  //     ) &&
  //     item.PaymentMethod.toLowerCase().includes(
  //       searchTerms.PaymentMethod.toLowerCase()
  //     )
  //   );
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchTerms((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleExportCSV = () => {
    const csvContent = tableData
      .map((item) => Object.values(item).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  // const rowCount = filterData?.length;
  
  return (
    <div>
      <div className="card">
        <div className="card-datatable pt-0">
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <div className="card-header header-flex d-flex justify-content-between p-3">
              <div className="head-label d-flex align-items-center">
                <h5 className="card-title mb-0">Transaction List</h5>
              </div>
              <div className="dt-action-buttons text-end pt-3 pt-md-0">
                <div className="dt-buttons">
                  <button
                    className="dt-button buttons-collection  btn btn-label-primary me-2 waves-effect waves-light"
                    aria-controls="DataTables_Table_0"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    onClick={handleExportCSV}
                  >
                    <span>
                      <i className="ti ti-upload me-1 ti-xs"></i>
                      <span className="d-none d-sm-inline-block">Export</span>
                    </span>
                  </button>
                  <button
                    className="dt-button create-new btn btn-primary waves-effect waves-light"
                    aria-controls="DataTables_Table_0"
                    type="button"
                  >
                    <span>
                      <i className="menu-icon tf-icons ti ti-calendar"></i>
                      <span className="d-none d-sm-inline-block">
                        Search By Dates
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="table table-responsive">
              <table className="table table-striped">
                <thead className="border-bottom table-bg text-center">
                  <tr>
                    <th>Transaction ID</th>
                    <th style={{ width: "10%" }}>Name</th>
                    <th>Email/Phone</th>
                    <th>Account</th>
                    <th>Debit/Credit</th>
                    <th style={{ width: "17%" }}>Location</th>
                    <th>Payment Method</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0 table-striped text-center">
                  <tr>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="TransactionId"
                          placeholder="Transaction..."
                          value={searchTerms.TransactionId}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          placeholder="Name..."
                          value={searchTerms.Name}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Email"
                          placeholder="Email/Phone..."
                          value={searchTerms.Email}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Account"
                          placeholder="Account..."
                          value={searchTerms.Account}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <select
                        className="form-select rounded"
                        name="Card"
                        value={searchTerms.Card}
                        onChange={handleChange}
                      >
                        <option value="">Accounts</option>
                        <option value="Debit">Debit</option>
                        <option value="Credit">Credit</option>
                      </select>
                    </td>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="Location"
                          placeholder="Location..."
                          value={searchTerms.Location}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="input-group input-group-merge">
                        <span
                          className="input-group-text p-2"
                          id={`basic-addon-search}`}
                        >
                          <i className="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="PaymentMethod"
                          placeholder="Payment Method..."
                          value={searchTerms.PaymentMethod}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                  </tr>
                  {/* {slicedData.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <small>{item.TransactionId}</small>
                      </td>
                      <td>
                        <small>{item.Name}</small>
                      </td>
                      <td>
                        <small>{item.Email}</small>
                      </td>
                      <td>
                        <small>{item.Account}</small>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            item.Card === true
                              ? "bg-label-success"
                              : "bg-label-danger"
                          }`}
                        >
                          {item.Card === true ? "Credit" : "Debit"}
                        </span>
                      </td>
                      <td className="">
                        <small>{item.Location}</small>
                      </td>
                      <td>
                        <small>{item.PaymentMethod}</small>
                      </td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn p-0"
                            type="button"
                            id="earningReportsId"
                            data-bs-toggle="dropdown"
                          >
                            <i className="ti ti-dots-vertical ti-sm text-muted"></i>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end py-2 px-4 rounded bg-label-primary text-center  ">
                            <button className="dropdown-item p-0 m-0 w-auto text-primary d-flex align-items-center">
                              <i className="ti ti-currency-dollar ti-sm"></i>
                              Refund
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-lg-9 col-md-6 col-sm-12 d-flex align-items-center justify-content-lg-end justify-content-end ">
                <div
                  className="dataTables_paginate paging_simple_numbers d-flex align-items-center"
                  id="DataTables_Table_0_paginate"
                >
                  <p className="m-0">1-10 of 15 </p>
                  <span className="p-2">
                    <i className="fas fa-angle-left text-muted cursor-pointer"></i>
                  </span>
                  <span className="p-2">
                    <i className="fas fa-angle-right cursor-pointer"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
