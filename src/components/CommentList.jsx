import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import ClientService from "../API/ClientService";
import AaLoader from "./UI/loader/AaLoader";
import AaButton from "./UI/button/AaButton";
import AaModal from "./UI/modal/AaModal";
import CommentForm from "./CommentForm";

const CommentList = ({clientId}) => {
    const [comments, setComments] = useState([])
    const [fetchComments, isCommentLoading, commentError] = useFetching(async () => {
        const response = await ClientService.getComments(clientId);
        setComments(response.data['hydra:member'])
    })
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchComments()
    }, [])

    const createComment = async (content) => {
        await ClientService.createComment(content, clientId)
        fetchComments()
        setModal(false)
    }

    return (
        <div className="client__comments">
            <div className="client__bar-head">
                <h2>Комментарии:</h2>
                <AaButton onClick={() => setModal(true)}><i className="bi bi-chat-text"></i></AaButton>
            </div>
            {commentError &&
                <h1>Произошла ошибка ${commentError}</h1>
            }
            {isCommentLoading
                ? <AaLoader/>
                :
                comments.map(comment =>
                    <div className="client__bar-item" key={comment.id}>
                        <div className="client__comments-date">{new Date(comment.publicationDate).toLocaleDateString()}</div>
                        <p>{comment.content}</p>
                    </div>
                )
            }
            <AaModal visible={modal} setVisible={setModal}>
                <CommentForm createComment={createComment}/>
            </AaModal>
        </div>
    );
};

export default CommentList;