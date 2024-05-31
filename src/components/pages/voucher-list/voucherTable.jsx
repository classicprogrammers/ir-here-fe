import  { useEffect, useState } from 'react';
import { TablePagination } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const Table = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Set rows per page to 5
    const user = useSelector((state) => state.user?.user || []);
    const [vocher, setVocher] = useState([]);
    const url = process.env.REACT_APP_SERVER_DOMAIN;
  
    useEffect(() => {
      const fetchVocher = async () => {
        console.log("Fetching users...");
  
        try {
            const response = await axios.post(`${url}/api/get_voucher`, {
            headers: {
            
              "Content-Type": "application/json",
            },
          });
  
          console.log("Response data:", response.data);
     

          setVocher(response?.data);
        } catch (error) {
          toast.error(error.message);
        }
      };
      fetchVocher();
      // eslint-disable-next-line 
    }, [user]);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page number when rows per page changes
    };
    const [searchTerms, setSearchTerms] = useState({
        voucher_code: '',
        date: '',
        valid_date: '',   
    });

    const filteredData = vocher?.filter(item => {
        return (
            item.voucher_code.toLowerCase().includes(searchTerms.voucher_code.toLowerCase()) &&
            item.date.toLowerCase().includes(searchTerms.date.toLowerCase()) &&
            item.valid_date.toLowerCase().includes(searchTerms.valid_date.toLowerCase())
        );
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTerms(predata => ({
            ...predata,
            [name]: value
        }));
    };
    const rowCount = filteredData?.length;
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedData = filteredData?.slice(startIndex, endIndex);

    const handleExportCSV = () => {
        const csvContent = slicedData.map(item => [
            item.voucher_code,
            formatDate(item.date),
            formatDate(item.valid_date),
            item.amount,
            item.is_used ? "Expired" : "Used"
        ].join(',')).join('\n');
    
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'table_data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    
    const formatDate = (dateString) => {
        // Assuming the date string is in format "MM-DD-YY HH:mm:ss"
        const [datePart, timePart] = dateString.split(' ');
        const [month, day, year] = datePart.split('-');
        const [hour, minute, second] = timePart.split(':');
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    };

    
    
    return (
        <div className="card">
            <div className="card-datatable pt-0">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                    <div className="card-header header-flex d-flex justify-content-between p-3">
                        <div className="head-label d-flex align-items-center">
                            <h5 className="card-title mb-0">Vouchers List</h5>
                        </div>
                        <div className="dt-action-buttons text-end pt-3 pt-md-0">
                            <div className="dt-buttons">
                                <button className="dt-button buttons-collection  btn btn-label-primary me-2 waves-effect waves-light"
                                onClick={handleExportCSV} aria-controls="DataTables_Table_0" type="button" aria-haspopup="dialog" aria-expanded="false">
                                    <span>
                                        <i className="ti ti-upload me-1 ti-xs"></i>
                                        <span className="d-none d-sm-inline-block">Export</span>
                                    </span>
                                </button>
                                <button className="dt-button create-new btn btn-primary waves-effect waves-light" aria-controls="DataTables_Table_0" type="button">
                                    <span>
                                        <i className="menu-icon tf-icons ti ti-calendar"></i>
                                        <span className="d-none d-sm-inline-block">Search By Dates</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-striped text-center">
                                <thead className='table-bg'>
                                    <tr>
                                        <th>Voucher Code</th>
                                        <th>Date</th>
                                        <th>Expiry Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="input-group input-group-merge">
                                                <span className="input-group-text p-2" id={`basic-addon-search}`}><i className="ti ti-search"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search by Voucher Code..."
                                                    name="vocher_code"
                                                    value={searchTerms?.voucher_code ||""}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </td>
                                        <td colSpan="3">
                                            <div className="input-group input-group-merge">
                                                <span className="input-group-text p-2" id={`basic-addon-search}`}><i className="ti ti-search"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search by expired & used..."
                                                    name="is_used"
                                                    value={searchTerms?.valid_date ||""}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </td>
                                    </tr>

                                    {slicedData.map(item => (
                                        <tr key={item.voucher_code}>
                                            <td><small>{item?.voucher_code || ""}</small></td>
                                            <td><small>{item?.date || ""}</small></td>
                                            <td><small>{item?.valid_date ||" "}</small></td>
                                            <td><small>{item.amount || ""}</small></td>
                                            <td>
                                       
                                                    <span className={`badge ${item.status ? "bg-label-danger" : "bg-label-success"}`}>
                                                        {item.is_used? "Expired" : "Used"}
                                                    </span>
                                              
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="row mt-3 mb-3">
                        <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rowCount}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;