import React from 'react';
import Slidebar from './Slidebar';
import Listproduct from './Listproduct';

const Home = () => {
  return (
    <div>
      <div className="row w-100">

        <div className="col-lg-2 col-4">
          <Slidebar />
        </div>

        <div className="col-lg-10 col-8">
          <Listproduct />
        </div>

      </div>
    </div>
  )
}

export default Home;