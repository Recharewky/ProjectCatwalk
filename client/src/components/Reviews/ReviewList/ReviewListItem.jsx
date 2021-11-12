import React, { useState, useEffect }from 'react';
import Photo from './Photo.jsx';
import Stars from '../Styles.jsx';
import axios from 'axios';
import TOKEN from '../../../../../config.js';
import styled from 'styled-components';
import moment from 'moment';

const ReviewListItem_Container = styled.div `
display:flex;
flex-direction: column;
gap: 12px;
`;
const Start_Info_Container = styled.div`
padding-top: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between
`;

const Username_Date_Container = styled.div`
color: #777777;
font-size: 16px;
`;

const Summary_div = styled.div`
font-weight: bold;
font-size: 24px;
`;

const ReviewBody_div = styled.div`
font-size: 16px;
`;

const Photo_div = styled.div`
display: flex;
flex-direction: row;
`;

const Recommend_div = styled.div`
font-size: 16px;
`;

const Response_Container = styled.div`
display: flex;
background-color: #d3d3d3;
height:80px;
align-items: center
`;

const ResponseText_Container = styled.div`
padding-left: 20px;
font-size: 16px;
display: flex;
flex-direction: column;
gap: 12px;
`;

const Helpful_div = styled.div`
gap: 12px;
display: flex;
flex-direction: row;
font-size: 16px;
`;

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

  const handleHelpfulPut = (id) => {
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/helpful`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    });
  }

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

  const handleVoteYes = () => {
    if (!voted) {
       setHelpful(true);
      };

    handleHelpfulPut(props.review.review_id);
    return false;
  }

  const handleReport = () => {
    var review_id = props.review.review_id;
    axios({
      method: 'put',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${review_id}/report`,
      headers: {
        'Authorization': TOKEN.TOKEN
      }
    });
  }

  var dateStr = date;
    var formattedDate = moment(dateStr).format('MMM DD, YYYY');
    if (recommend) {
      var recommend = <Recommend_div> <span style={{color: 'blue'}}>&#10003;</span>   I recommended this product</Recommend_div>;
    }
    return (
      <ReviewListItem_Container>
        <Start_Info_Container>
          <Stars rating={`${starRating * 20}%`} />

          <Username_Date_Container>
            <div>{reviewerName}, {formattedDate}</div>
          </Username_Date_Container>
        </Start_Info_Container>

        <Summary_div>
          {reviewSummary}
        </Summary_div>

        <ReviewBody_div>
          {reviewBody}
        </ReviewBody_div>

        <Photo_div>
          {photos.map((photo, index) =>
            <Photo
              key={index}
              photo={photo}
            />
          )}
        </Photo_div>
        {recommend}
        <Response_Container>
          <ResponseText_Container>
            <div>
              <span style={{color: 'black', fontWeight: 'bold'}}>Response:</span>
            </div>
            <div>
              {response} This is a reponse place holder
            </div>
          </ResponseText_Container>

        </Response_Container>

        <Helpful_div>
          <div>Helpful?</div>

          <div>
            <a href="#1" onClick={handleVoteYes}>Yes</a> ({helpfulness})
          </div>

          <div>
            |
          </div>

          <div>
            <a href="#2" onClick={handleReport}>Report</a>
          </div>

        </Helpful_div>

      </ReviewListItem_Container>
    )
}


export default ReviewListItem;