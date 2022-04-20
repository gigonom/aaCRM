import React, {useState} from 'react';
import AaButton from "./UI/button/AaButton";
import AaTextarea from "./UI/textarea/AaTextarea";

const CommentForm = ({createComment}) => {
    const [comment, setComment] = useState('')

    const addNewComment = (e) => {
        e.preventDefault()
        createComment(comment)
        setComment('')
    }

    return (
        <form>
            <label>
                <AaTextarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    type="text"
                    placeholder="Ваш комментарий"/>
                <div className="label">
                    Комментарий
                </div>
            </label>
            <div className="button__row">
                <AaButton onClick={addNewComment}>Создать коммент</AaButton>
            </div>
        </form>
    );
};

export default CommentForm;