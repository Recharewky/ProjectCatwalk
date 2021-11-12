/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

function RelatedProducts(props) {
  const [allRelatedProducts, setDisplay] = useState([]);
  const [currentProduct, setCurrent] = useState({});
  const { id } = props;

  useEffect(() => {
    $.ajax({
      type: 'POST',
      url: `/relatedProducts/post/${id}`,
      contentType: 'application/json',
      data: JSON.stringify({ id }),
      success: (success) => {
        const successSet = new Set(success);
        const arr = Array.from(successSet); // duplicates

        $.ajax({
          type: 'POST',
          url: `/relatedProducts/postAProduct/${id}`,
          contentType: 'application.json',
          data: JSON.stringify({ id }),
          success: (success1) => {
            setCurrent(success1);
            setDisplay(arr);
          },
          error: (err) => console.log('error', err),
        });
      },
      error: (err) => console.log('error', err),
    });
  }, [id, setDisplay]);

  return (
    <>
      <div>
        <h2 title="relatedProducts">Related Products:</h2>
        <RelatedProductList
          allRelatedProducts={allRelatedProducts}
          currentProduct={currentProduct}
        />
      </div>
      <div>
        <h2 title="outfits">Saved Outfits:</h2>
        <OutfitList currentProduct={id} />
      </div>
    </>
  );
}

// class RelatedProducts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allRelatedProducts: [61579, 61580],
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props;
//     $.ajax({
//       type: 'POST',
//       url: `/relatedProducts/post/${id}`,
//       contentType: 'application/json',
//       data: JSON.stringify({ id }),
//       success: (success) => {
//         const successSet = new Set(success);
//         const arr = Array.from(successSet); // duplicates
//         this.setState(
//           { allRelatedProducts: arr },
//         );
//       },
//       error: (err) => console.log('error', err),
//     });
//   }

//   render() {
//     const { allRelatedProducts } = this.state;
//     return (
//       <div>
//         <RelatedProductList allRelatedProducts={allRelatedProducts} />
//       </div>
//     );
//   }
// }

export default RelatedProducts;
