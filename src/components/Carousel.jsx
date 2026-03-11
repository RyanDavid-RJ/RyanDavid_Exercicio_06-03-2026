import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function CarouselHome() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://picsum.photos/1200/400?1" alt="Imagem 1" />
      </div>
      <div>
        <img src="https://picsum.photos/1200/400?2" alt="Imagem 2" />
      </div>
      <div>
        <img src="https://picsum.photos/1200/400?3" alt="Imagem 3" />
      </div>
    </Carousel>
  );
}

export default CarouselHome;
