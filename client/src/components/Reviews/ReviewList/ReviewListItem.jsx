import React, { useState, useEffect }from 'react';
import Photo from './Photo.jsx';
import Stars from '../Styles.jsx';
import axios from 'axios';
import TOKEN from '../../../../../config.js';
import styled from 'styled-components';
import moment from 'moment';

const ReviewItem_Container = styled.div `
  display:flex;
  flex-direction: column;
  margin: 0.5em 1em;
  padding: 0.5em 1em;
  gap: 20px;
  background: palegrey;
  border-radius: 3px;
  border: 2px solid grey;
`;
const Paragraph_Container = styled.div `
  display:flex;
  flex-direction: column;
  margin: 0.1em .5em;
  padding: 0.1em .1em;
  gap: 20px;
  background: white;

`;
const reviewerNameStyle = {
  fontSize: '18px',
  color: 'teal'
}
const summaryStyle = {
  fontSize: '13px',
  color: 'grey'
}


const ReviewListItem = (props) => {
  const [id, setId] = useState(0);
  const [starRating, setStars] = useState(5);
  const [date, setDate] = useState(0);
  const [reviewSummary, setSummary] = useState('heyo');
  const [reviewBody, setRevBod] = useState('wat');
  const [photos, setPhotos] = useState([]);
  const [recommended, setReco] = useState(true);
  const [reviewerName, setName] = useState('user');
  const [response, setResponse] = useState('response');
  const [helpfulness, setHelpful] = useState(0);
  const [voted, setVotes] = useState(false);

  useEffect(() => {
    setParams();
  }, []);

  const setParams = () => {
    setId(props.review.review_id);
    setStars(props.review.rating);
    setDate(props.review.date);
    setSummary(props.review.summary);
    setPhotos(props.review.photos);
    setReco(props.review.recommend);
    setName(props.review.reviewer_name);
    setResponse(props.review.response);
    setHelpful(props.review.helpfulness);
    setRevBod(props.review.body);
  }
    return (
      <ReviewItem_Container>
      <div>

        <h1 style={reviewerNameStyle}>{reviewerName}</h1>
        <Paragraph_Container>
          <h2 style={summaryStyle}>-- {reviewSummary}</h2>
          <p>-- {reviewBody}</p>
        </Paragraph_Container>
      </div>
      </ReviewItem_Container>
    )
}


export default ReviewListItem;