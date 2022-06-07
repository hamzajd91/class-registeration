import React from "react";
import "./Home.css"
import { app_data } from "../../server/db.json"


const Home = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <h2>
            Display Teachers and Students Currently Learning from them with
            class details and time left for class_period with respect to current
            time
          </h2>

          <header className="header">
            <h2>Classes</h2>
          </header>

          <table>
            <tbody>
              <tr>
                <td>
                  <h5>Subject</h5>
                </td>
                <td>
                  <h4>Start Date</h4>
                </td>
                <td>
                  <h5>Period</h5>
                </td>
                <td>
                  <p>Students</p>
                </td>
              </tr>
            </tbody>
          </table>


          {app_data.classes.map((data, key) => {
            return (
              <table>
                <tbody>
                  <tr>
                    <td>
                      <p>{data.subject}</p>
                    </td>
                    <td>
                      <p>{data.start_date}</p>
                    </td>
                    <td>
                      <p>{data.class_period} Months</p>
                    </td>
                    <td>
                      <p>{data.students.student_name}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            );

          })}



          <br/>

          <header className="header">
            <h2>Teachers</h2>
          </header>

          <table>
            <tbody>
              <tr>
                <td>
                  <h5>teacher_name</h5>
                </td>
                <td>
                  <h4>gender</h4>
                </td>
                <td>
                  <h5>phone_no</h5>
                </td>
                <td>
                  <h5>city</h5>
                </td>
                <td>
                  <h5>age</h5>
                </td>
                <td>
                  <h5>description</h5>
                </td>
              </tr>
            </tbody>
          </table>



        </div>
      </div>
    </div>
  );
};

export default Home;
