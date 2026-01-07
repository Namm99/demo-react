import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { chain, values } from "lodash";
import _ from "lodash";
import './DetailQuiz.scss'

const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    // console.log(location)
    // console.log(">>>check params: ", params)
    const quizId = params.id;

    useEffect(() => {
        fetchQuestions()
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log('>>>check questions: ', res)
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image;
                        }
                        answers.push(item.answers);
                        // console.log("item answer: ", item.answers)
                    })
                    // console.log('values: ', value, 'key: ', key);
                    return { questionId: key, answers: answers, questionDescription: questionDescription, image: image }

                })
                .value();
            console.log(data)
        }
    };

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <div className="question">
                        Question 1: How u doing?
                    </div>
                    <div className="answer">
                        <div className="a-child">A. afjlfajf</div>
                        <div className="b-child">B. afjlfajf</div>
                        <div className="c-child">C. afjlfajf</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}

export default DetailQuiz;