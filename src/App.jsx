import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import SmoothScroll from './Components/SmoothScroll';
import Footer from './Components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>Sachin Thilakarathna | Software Engineer & UI/UX Designer</title>
        <meta
          name="description"
          content="Portfolio of Sachin Thilakarathna - Software Engineering student with passion for web development and UI/UX design."
        />
        <meta name="keywords" content="Sachin Thilakarathna, sachinthilakarathna, galle, sachn, genaral sir john kotelawal defence university, Software Engineer, UI/UX Designer, Web Developer, React Developer" />
        <meta name="author" content="Sachin Thilakarathna" />
        <meta property="og:title" content="Sachin Thilakarathna | Software Engineer & UI/UX Designer" />
        <meta property="og:description" content="Portfolio showcasing projects and skills of Sachin Thilakarathna." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="http://sachinthilakarathna.me/" />
      </Helmet>

      <SmoothScroll>
        <Header />
        <Body />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
