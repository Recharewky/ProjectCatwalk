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
      product_id: 25193,
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
    var ratings = data.data.ratings;
    var count = 0;
    var total = 0;
    var countTrue = parseInt(data.data.recommended.true);
    var countFalse = parseInt(data.data.recommended.false);
    var breakdownArray = [];

    for (var key in ratings) {
      count += parseInt(ratings[key]);
      total += (parseInt(key) * ratings[key]);
    }

    for (var i = 1; i < 6; i++) {
      if (i in ratings) {
        breakdownArray.push([i, ratings[i], Math.round(parseInt(ratings[i]) / count * 100)]);
      } else {
        breakdownArray.push([i, '0', 0]);
      }
    }

    this.setState({
      recommended: Math.round(countTrue / (countFalse + countTrue) * 100),
      characteristics: data.data.characteristics,
      average: Math.round(total / count * 10) / 10,
      count: count,
      breakdownArray: breakdownArray
    });
  }

  componentDidMount() {
    this.getMetaReviews(25193, this.getAvg);
  }

  render() {
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