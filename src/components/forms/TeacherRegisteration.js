import React, { useState } from "react";
const TeacherRegisterarion = () => {
  const [cnic, setCnic] = useState("");
  // React Select Styles

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="shadow p-3  bg-body rounded">
              <div className="card-header">
                <h3>Teacher Registeration</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group my-2">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="">Gender</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label>Phone Number</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">
                          +92
                        </span>
                      </div>
                      <input
                        name="shareholder_percent"
                        className="form-control undefined"
                        id="phone_number"
                        placeholder="Enter Phone Number"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="city">City</label>
                    <input
                      className="form-control"
                      name="city"
                      type="text"
                      placeholder="Enter City Name"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="age">Age</label>
                    <input
                      className="form-control"
                      name="age"
                      type="number"
                      placeholder="Enter Teacher Age"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Enter Description"
                    />
                  </div>
                  <div className="form-group my-2">
                    <input type="submit" className="btn btn-dark w-100 my-4" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegisterarion;
