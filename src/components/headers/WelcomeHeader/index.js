import React from 'react';
import Banner from '../Banner';
import Header from '../Header';

const WelcomeHeader = (props) => (
  <div>
    <Banner autoplayInteval={4500}
                  links={['/assets/img/banner/test_foto_1.jpg',
                    '/assets/img/banner/test_foto_2.jpg',
                    '/assets/img/banner/test_foto_3.jpg'
                  ]}/>
    <Header {...props} />
  </div>
);

export default WelcomeHeader
