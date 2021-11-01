import React from 'react';
import Overview from './Overview/Overview.jsx';
import RelatedProduct from './RelatedProducts/RelatedProducts.jsx';
import QA from './QA/QA.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 48441,
    };
  }

  render() {
    return (
      <div>
        <Overview id={this.state.id} />
        {/* <RelatedProduct/>
        <QA/>
        <Reviews/> */}
      </div>
    );
  }
}

export default App;
