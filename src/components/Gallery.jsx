import image1 from "../assets/img/about-1.jpg";
import image2 from "../assets/img/about-2.jpg";
import image3 from "../assets/img/classes-1.jpg";
import image4 from "../assets/img/classes-3.jpg";
import image5 from "../assets/img/about-3.jpg";
import image6 from "../assets/img/classes-4.jpg";

const Gallery = () => {
  return (
    <div className="gallery-1">
      <ul>
        <li>
          <a href="#">
            <figure>
              <img
                src={image1}
                alt="Volcano and lava field against a stormy sky"
              />
              <figcaption>Mountains and volcanos</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src={image2}
                alt="Person hiking on a trail through mountains while taking a photo with phone"
              />
              <figcaption>Hiking trails</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img src={image3} alt="Person standing alone in a misty forest" />
              <figcaption>Forest escapes</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src={image4}
                alt="Street scene with person walking and others on motorbikes, all wearing masks"
              />
              <figcaption>Entertainment</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src={image5}
                alt="Fashionable-looking girl with blond hair and pink sunglasses"
              />
              <figcaption>Trending</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <img
                src={image6}
                alt="Fashionable-looking girl with blond hair and pink sunglasses"
              />
              <figcaption>Books and Libraries</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
