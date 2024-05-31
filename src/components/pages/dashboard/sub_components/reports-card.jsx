import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const Reportscharts = () => {

  const data = [
    { name: 'Jan', uv: 50, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 30, pv: 2400, amt: 2400 },
    { name: 'Mar', uv: 20, pv: 2400, amt: 2400 },
    { name: 'Apr', uv: 40, pv: 2400, amt: 2400 },
    { name: 'May', uv: 70, pv: 2400, amt: 2400 },
    { name: 'Jun', uv: 50, pv: 2400, amt: 2400 },
    { name: 'Jul', uv: 30, pv: 2400, amt: 2400 },
    { name: 'Aug', uv: 20, pv: 2400, amt: 2400 },
    { name: 'Sep', uv: 10, pv: 2400, amt: 2400 },
  ];

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value}k`}</text>;
  };

  return (
    <>
      <div className="card h-100">
        <div className="card-header d-flex justify-content-between">
          <div className="card-title mb-0">
            <h5 className="m-0 me-2">Earning Reports</h5>
            <small className="text-muted">Weekly Earnings Overview</small>
          </div>

          <div className="dropdown">
            <button className="btn p-0" type="button" id="earningReports" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="ti ti-dots-vertical ti-sm text-muted"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="earningReports">
              <Link className="dropdown-item" to="">Download</Link>
              <Link className="dropdown-item" to="">Refresh</Link>
              <Link className="dropdown-item" to="">Share</Link>
            </div>
          </div>

        </div>

        <div className="card-body chart">
          <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="name" stroke='' />
            <YAxis stroke='' />
            <Bar dataKey="uv" barSize={30} fill="#5C81E4 " label={renderCustomBarLabel} />
          </BarChart>
        </div>

      </div>
    </>
  );
};

export default Reportscharts;
