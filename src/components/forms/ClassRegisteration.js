import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { app_data } from "../../server/db.json"

const ClassRegisteration = () => {

  const [ClassID, setClassID] = useState()
  const [subject, setSubject] = useState()
  const [StartDAte, setStartDAte] = useState()
  const [ClassPeriod, setClassPeriod] = useState()
  const [StudentCount, setStudentCount] = useState()


  useEffect(() => {
    console.log(app_data.classes);
    console.log(app_data);
  }, []);
  


  const HandleClass = () => {
    app_data.classes.push({
      "subject": subject,
      "start_date": StartDAte,
      "class_period": ClassPeriod

    })

  }



  
  return (
    <div className="container my-5">
      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="shadow p-3  bg-body rounded">
                <div className="card-header">
                  <h3>Class Registeration</h3>
                </div>
                <div className="card-body">
                  <div className="form-group my-2">
                    <label htmlFor="name">Class ID</label>
                    <input
                      className="form-control"
                      name="name"
                      type="text"
                      placeholder="Enter Class ID"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="subject">Subject</label>
                    <input
                      className="form-control"
                      name="subject"
                      type="text"
                      placeholder="Enter Subject Name"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="start_date">Starting Date</label>
                    <input
                      className="form-control"
                      name="start_date"
                      type="date"
                      value={StartDAte}
                      onChange={(e) => {
                        setStartDAte(e.target.value)
                      }}
                    />
                  </div>
                  <div className="form-group my-2">
                    <label>Class Period</label>
                    <div className="input-group mb-3">
                      <input
                        name="shareholder_percent"
                        className="form-control undefined"
                        id="class_period"
                        placeholder="Enter Class Period in Months"
                        type="number"
                        value={ClassPeriod}
                        onChange={(e) => {
                          setClassPeriod(e.target.value)
                        }}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                          Months
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label htmlFor="no_of_students">No of Students</label>
                    <input
                      className="form-control"
                      name="no_of_students"
                      type="number"
                      placeholder="Enter Number of Students in this class"
                      value={StudentCount}
                      onChange={(e) => {
                        setStudentCount(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header class">
                <h5>Students</h5>
              </div>
              <div className="card-body">
                <div className="w-100">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Student Name</th>
                        <th>Father Name</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Phone</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5>Hint:</h5>
          <ul>
            <li>
              Provide input fields for each row according to the columns execpt
              student id (which is auto generated).
            </li>
            <li>
              No of table rows = no of students entered in the above field
            </li>
          </ul>
        </div>
        <div className="row">
          <input className="btn btn-dark" type="submit" value="Submit" onClick={HandleClass} />
        </div>
      </form>

    </div>
  );
};

export default ClassRegisteration;
