import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class AddExam extends Component {
  constructor() {
    super();
    this.state = {
      studentName: '',
      studentId:'',
      code:'',
      module_code:'',
      exam_date:''
    };
  }

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
      .post('http://localhost:8082/api/exams', data)
      .then(res => {
        this.setState({
          studentName: '',
          studentId:'',
          code:'',
          module_code:'',
          exam_date:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in AddExam!");
      })
  };

  render() {
    return (
      <div className="AddExam">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Exam List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Exam</h1>
              <p className="lead text-center">
                  Create new exam
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='date'
                    placeholder='Exam_date'
                    name='exam_date'
                    className='form-control'
                    value={this.state.exam_date}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddExam;
