import ImageDecoration from "../components/ImageDecoration";
import { HomeHero} from "../assets";

const Home = () => {
  return (
    <div className="mt-48 ml-24">
      <ImageDecoration style='top'>
        <img src={HomeHero} alt="home-hero" className="object-cover aspect-video w-[34rem]" />
      </ImageDecoration>
    </div>
  )
}

export default Home;