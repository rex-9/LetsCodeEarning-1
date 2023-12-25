/* eslint-disable react/prop-types */
import { ImageDeco } from "../assets";

function HighlightImage({
  img,
  alt,
  top = null,
  right = null,
  bottom = null,
  className = null,
}) {
  return (
    <div className={"basis-full" + " " + className}>
      <div className="relative max-h-fit w-fit">
        <img
          src={img}
          alt={alt}
          className="aspect-[1.3/1] w-full md:w-[26rem] lg:w-[30rem]"
        />
        {top && (
          <ImageDeco className="absolute -left-4 -top-4 block h-auto w-8 lg:-left-10 lg:-top-10 lg:w-20 " />
        )}
        {right && (
          <ImageDeco className="absolute -right-4 -top-4 block h-auto w-8 rotate-90 lg:-right-10 lg:-top-10 lg:w-20" />
        )}
        {bottom && (
          <ImageDeco className="absolute -bottom-4 -right-4 block h-auto w-8 rotate-180 lg:-bottom-10 lg:-right-10 lg:w-20" />
        )}
      </div>
    </div>
  );
}

export default HighlightImage;
