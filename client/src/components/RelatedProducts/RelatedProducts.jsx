/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import RelatedProductList from './RelatedProductList.jsx';
import OutfitList from './OutfitList.jsx';

function RelatedProducts(props) {
  const [allRelatedProducts, setDisplay] = useState([]);
  const [currentProduct, setCurrent] = useState({});
  const { id, changeProduct } = props;

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
        <Title>
          <div title="relatedProducts">You may also like:</div>
        </Title>
        <RelatedProductList
          allRelatedProducts={allRelatedProducts}
          currentProduct={currentProduct}
          changeProduct={changeProduct}
          currentProductID={id}
        />
      </div>
      <div>
        <Title>
          <div title="outfits">OOTD</div>
        </Title>
        <OutfitList currentProduct={id} />
      </div>
    </>
  );
}
const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: larger;
  font-weight: 800;
  color: #5085A5;
  margin: 30px 0px -30px 1em;
  padding-left: 7.8vw;
  padding-right: 1em;
`;
export default RelatedProducts;
