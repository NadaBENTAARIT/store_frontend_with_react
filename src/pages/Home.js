import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import deviceService from '../services/deviceService';
import Navbar from '../components/Navbar';

export default function Home() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      const devicesData = await deviceService.loadDevice();
      setDevices(devicesData);
    } catch (error) {
      console.error('Erreur lors du chargement des tutoriels:', error);
    }
  };

  const deleteDevices = async (id) => {
    const devicesData = await deviceService.deleteDevice(id);
    loadDevices();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="py-4">
          {devices.length === 0 ? (
            <p>No devices to display.</p>
          ) : (
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((device) => (
                  <tr key={device.id}>
                    <td>{device.id}</td>
                    <td>{device.title}</td>
                    <td>{device.description}</td>
                    <td>{device.price}</td>
                    <td>
                      <Link
                        className="btn btn-primary mx-2"
                        to={`/viewdevice/${device.id}`}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        {' View'}
                      </Link>

                      <Link
                        className="btn btn-outline-primary mx-2"
                        to={`/editdevice/${device.id}`}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                        {' Edit'}
                      </Link>

                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteDevices(device.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                        {' Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
