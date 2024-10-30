import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import deviceService from '../services/deviceService';
import Navbar from '../components/Navbar';

export default function ViewDevice() {
  const [device, setDevice] = useState({
    title: '',
    description: '',
    price: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadDevice();
  }, []);

  const loadDevice = async () => {
    const devicessData = await deviceService.getDeviceById(id);
    setDevice(devicessData.data);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Device Details</h2>

            <div className="card">
              <div className="card-header">
                Details of Device id : {device.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Title:</b>
                    {device.title}
                  </li>

                  <li className="list-group-item">
                    <b>Description:</b>
                    {device.description}
                  </li>

                  <li className="list-group-item">
                    <b>Price:</b>
                    {device.price}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-primary my-2" to={'/Home'}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
