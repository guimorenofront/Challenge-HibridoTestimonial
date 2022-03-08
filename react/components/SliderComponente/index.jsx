import { SliderLayout } from "vtex.slider-layout";
import { SliderItem } from "../SliderItem";
import "./index.global.css";
import { GetTestimonials } from "../Helpers/GetTesrimonials";
//pr003 criando e Populando SliderComponent
const SliderComponent = () => {
  return (
    <div className="SliderContentBox">
      <SliderLayout
        className="SliderContent"
        itemsPerPage={{
          desktop: 3,
          tablet: 1,
          phone: 1,
        }}
        showPaginationDots="never"
        infinite="true"
      >
        {GetTestimonials().map((user, i) => (
          <SliderItem
            key={i}
            img={user?.imgurl}
            alt={user?.name}
            date={user?.data}
            content={user?.testimonial}
            user={user?.name}
          />
        ))}
      </SliderLayout>
    </div>
  );
};
export default SliderComponent;
