import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';




class showBookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: {}
    };
  }



  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/exams/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          exam: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowExamDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/exams/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowBookDetails_deleteClick");
      })
  };

  print(){
    window.print();
  }

  render() {

    const exam = this.state.exam;
    let StudentItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Student Name</td>
            <td>{ exam.studentName }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Exam Code</td>
            <td>{ exam.code }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Student Id</td>
            <td>{ exam.studentId }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Exam Date</td>
            <td>{ exam.exam_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Module code</td>
            <td>{ exam.module_code }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowExamDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left SEDB1">
                  Show Exam List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Exam's Record</h1>
              <p className="lead text-center">
                  View Exam's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { StudentItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block SEDB1" onClick={this.onDeleteClick.bind(this,exam._id)}>Delete Exam</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-exam/${exam._id}`} className="btn btn-outline-info btn-lg btn-block SEDB1">
                    Edit Exam
              </Link>
              <br />
            </div>

            <button className="btn btn-info SEDB1 mt-2" onClick={this.print}>Print Report</button>

            <div className= "SEDB2"><h1>2022.05.25</h1></div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Exam</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Exam</button> */}

        </div>
      </div>
    );
  }
}

export default showBookDetails;
