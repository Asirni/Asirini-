import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExamCard from './ExamCard';

class ShowExamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exams: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/exams')
      .then(res => {
        this.setState({
          exams: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowExamList');
      })
  };


  render() {
    const exams = this.state.exams;
    console.log("PrintBook: " + exams);
    let examList;

    if(!exams) {
      examList = "there is no exam recored!";
    } else {
      examList = exams.map((exam, k) =>
        <ExamCard exam={exam} key={k} />
      );
    }

    return (
      <div className="ShowExamList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Exam List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/add-exam" className="btn btn-outline-warning float-right">
                + Add New Exam
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {examList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowExamList;
