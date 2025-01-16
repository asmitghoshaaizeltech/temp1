import React, { FC, useState } from "react";
import { Table } from "reactstrap"

const Metmessage: FC = () => {
  const [filters, setFilters] = useState({
    from_date: '',
    to_date: '',
    device_id: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="from_date">From Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="from_date" 
                    name="from_date"
                    value={filters.from_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="to_date">To Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="to_date" 
                    name="to_date"
                    value={filters.to_date}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="device_id">Device ID</label>
                  <select 
                    className="form-control" 
                    id="device_id" 
                    name="device_id"
                    value={filters.device_id}
                    onChange={handleChange}
                  >
                    <option value="">Select Device</option>
                    <option value="1">Device 1</option>
                    <option value="2">Device 2</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="col-md - 3">
                  <button className="btn btn-primary mt-4" onClick={() => console.log(filters)}>
                    Filter
                  </button>
                </div>
              </div>
              <Table className="mt-4">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Device ID</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metmessage;