import { HomeServices1 } from "../assets";
import HighlighSection from "../components/HighlighSection";
import HighlightImage from "../components/HighlightImage";
import HighlightText from "../components/HighlightText";

const Home = () => {
  return (
    <main className="pt-main">
      <HighlighSection>
        <HighlightImage img={HomeServices1} alt="home-services1" style='both' />
        <HighlightText
          subheading="New Service"
          heading="Centre Fiv"
          body="Unlock the Miracle of Life: Discover Our Leading IVF Services for Your Journey to Parenthood"
          href="/appointment"
        />
      </HighlighSection>
    </main>
  );
};

export default Home;
