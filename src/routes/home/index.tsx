import { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

const MAX_PAGE = 3;

const Home = () => {
  const [page, setPage] = useState(1);

  const goToNextPage = () => {
    setPage(page + 1 > MAX_PAGE ? page : page + 1);
  };

  if (page === 2) {
    return <Page2 goToNextPage={goToNextPage} />;
  }

  if (page === 3) {
    return <Page3 />;
  }

  return <Page1 goToNextPage={goToNextPage} />;
};

export default Home;
