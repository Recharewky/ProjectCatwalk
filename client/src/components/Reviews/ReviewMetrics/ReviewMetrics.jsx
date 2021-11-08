import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const ReviewMetrics_div = styled.div `
width: 450px;
`;
const Avg_div = styled.div`
font-size: 40px;
font-weight: bold;
`;

const Bars_div = styled.div`
font-size: 10px;
font-weight: bold;
`;

const AvgContainer = styled.div`
display: flex;
flex-direction: row;
`;

function ReviewMetrics () {
  // const [average, getAverage] = useState(false);

  // getMetaReviews(product_id, callback) {
  //   axios({
  //     method: 'get',
  //     url: '/reviews/meta',
  //     params: {
  //       product_id: product_id
  //     }
  //   })
  //     .then((data) => {
  //       callback(data);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <ReviewMetrics_div>
      <AvgContainer>
        <Avg_div>
          AVG NUM
        </Avg_div>
      </AvgContainer>
      <Bars_div>
        Bars and Such here
      </Bars_div>
      Characteristics here

    </ReviewMetrics_div>

  )
}

export default ReviewMetrics