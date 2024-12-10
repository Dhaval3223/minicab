import React, { useEffect } from 'react';
import Banner from '../components/banner';
import Publish from '../components/publish';
import Cover from '../components/cover';
import Benefits from '../components/benefits';
import Start from '../components/start';
import Have from '../components/have';
import Frequently from '../components/frequently';

function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div>
       {/* <Header/> */}
       <Banner/>
       <Publish/>
       <Cover/>
       <Benefits/>
       <Start/>
       <Have/>
       <Frequently/>
       {/* <Footer/> */}
    </div>
  );
}

export default Home;
