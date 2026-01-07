import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import { chain, values } from "lodash";
import _ from "lodash";

const DetailQuiz = (props) => {
    const params = useParams();
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
        <div className="detail-quiz-container">DetailQuiz</div>
    )
}

export default DetailQuiz;