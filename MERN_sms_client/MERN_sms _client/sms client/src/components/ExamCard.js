import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ExamCard = (props) => {
    const  exam  = props.exam;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/exams/the-exam-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-exam/${exam._id}`}>
                        { exam.studentName }
                    </Link>
                </h2>
                <h3>{exam.code}</h3>
                <p>{exam.module_code}</p>
            </div>
        </div>
    )
};

export default ExamCard;