import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateExamDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: '',
      studentId: '',
      code: '',
      module_code: '',
      exam_date: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/exams/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, exam: res.data})
        this.setState({
          studentName: res.data.studentName,
          studentId: res.data.studentId,
          code: res.data.code,
          module_code: res.data.module_code,
          exam_date: res.data.exam_date
        })
      })
      .catch(err => {
        console.log("Error from UpdateExamDetails");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      studentName: this.state.studentName,
      studentId: this.state.studentId,
      code: this.state.code,
      module_code: this.state.module_code,
      exam_date: this.state.exam_date
    };

    axios
      .put('http://localhost:8082/api/exams/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-exam/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateExamDetails!");
      })
  };


  render() {
    return (
      <div className="UpdateExamDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Exam List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Exam</h1>
              <p className="lead text-center">
                  Update Exam's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="studentName">Student Name</label>
              <input
                type='text'
                placeholder='Student Name'
                name='studentName'
                className='form-control'
                value={this.state.studentName}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="studentId">Student Id</label>
              <input
                type='text'
                placeholder='Student Id'
                name='studentId'
                className='form-control'
                value={this.state.studentId}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="code">Exam Code</label>
              <input
                type='text'
                placeholder='Exam Code'
                name='code'
                className='form-control'
                value={this.state.code}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="module_code">Module Code</label>
              <input
                type='text'
                placeholder='Module Code'
                name='module_code'
                className='form-control'
                value={this.state.module_code}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="exam_date">Exam Date</label>
              <input
                type='date'
                placeholder='exam_date'
                name='exam_date'
                className='form-control'
                value={this.state.exam_date}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Exam</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateExamDetails;
