import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import deviceService from '../services/deviceService';
import Navbar from '../components/Navbar';

export default function EditDevice() {
  let navigate = useNavigate();
  const { id } = useParams();

  // Initialisez le state avec des valeurs par défaut ou vides si nécessaire
  const [device, setDevice] = useState({
    title: '',
    description: '',
    price: '',
  });

  const { title, description, price } = device;

  const onInputChange = (e) => {
    setDevice({ ...device, [e.target.name]: e.target.value });
  };

  const loadDevice = async () => {
    try {
      const result = await deviceService.getDeviceById(id, device);

      if (result && result.data) {
        setDevice(result.data);
      } else {
        console.error('data not defined:', result);
      }
    } catch (error) {
      console.error('error while loading device:', error);
    }
  };

  useEffect(() => {
    loadDevice();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await deviceService.editDevice(id, device);
    navigate('/Home');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit Device</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Title" className="form-label">
                  Title
                </label>
                <input
                  type={'text'}
                  className="form-control"
                  name="title"
                  value={title}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <input
                  type={'text'}
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type={'text'}
                  className="form-control"
                  name="price"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/Home">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
