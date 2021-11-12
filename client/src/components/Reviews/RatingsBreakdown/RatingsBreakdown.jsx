import React from 'react';
import axios from 'axios';
import Stars from '../Styles.jsx';
import Breakdown from './Breakdown.jsx';
import Characteristics from './Characteristics.jsx';
import styled from 'styled-components';
import FactorBar from './FactorBar.jsx';

const Avg_div = styled.div`
font-size: 60px;
font-weight: bold;
`;

const AvgContainer = styled.div`
display: flex;
flex-direction: row;
`;

const Recommended_div = styled.div`
font-size: 18px;
padding-top: 12px;
padding-bottom: 12px;
width: 250px;
`;

const RatingBreakdown_div = styled.div `
width: 450px;
`;

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: props.id,
      average: 0,
      ratings: {},
      recommended: 0,
      characteristics: {}
    };
    this.getMetaReviews = this.getMetaReviews.bind(this);
    this.getAvg = this.getAvg.bind(this);
  }

  getMetaReviews(product_id, callback) {
    axios({
      method: 'get',
      url: 'http://localhost:3000/reviews/meta',
      params: {
        product_id: product_id
      }
    })
      .then((data) => {
        callback(data);
      })
      .catch((err) => console.log(err));
  }

  getAvg(data) {
    let ratings = data.data.ratings;
    let count = 0;
    let total = 0;

    let countTrue = parseInt(data.data.recommended.true);
    let countFalse = parseInt(data.data.recommended.false);
    let breakdownArray = [];

    for (let key in ratings) {
      console.log('ratings[key]', count);
      count += parseInt(ratings[key]);
      total += (parseInt(key) * ratings[key]);
    }
    let patsyAvg = Math.round(total / count * 10) / 10;

    for (let i = 1; i < 6; i++) {
      if (i in ratings) {
        breakdownArray.push([i, ratings[i], Math.round(parseInt(ratings[i]) / count * 100)]);
      } else {
        breakdownArray.push([i, '0', 0]);

      }
    }
    if (!Number.isNaN(patsyAvg)) {
      patsyAvg = patsyAvg.toString();
    } else {
      patsyAvg = 'No ratings yet';
    }

    this.setState({
      recommended: Math.round(countTrue / (countFalse + countTrue) * 100),
      characteristics: data.data.characteristics,
      average: patsyAvg,
      count: count,
      breakdownArray: breakdownArray
    });
  }

  componentDidMount() {
    this.getMetaReviews(this.props.id, this.getAvg);

  }

  render() {
    console.log(this.props)
    return (
      <RatingBreakdown_div>
        <AvgContainer>
          <Avg_div>
            {this.state.average}
          </Avg_div>
          <Stars rating={`${this.state.average * 20}%`} />
        </AvgContainer>

        <Recommended_div>
          <div>
            {this.state.count} total reviews, {this.state.recommended}% reviews recommended this products
          </div>
        </Recommended_div>
        <Breakdown filterStar={this.props.filterStar}breakdowns={this.state.breakdownArray}/>
        <Characteristics characteristics={this.state.characteristics} />

      </RatingBreakdown_div>
    );
  }
}

export default RatingBreakdown;