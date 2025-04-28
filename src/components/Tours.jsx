import Heading from "./Heading";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section class="section" id="tours">
      <Heading btitle="featured" gtitle="tours" />

      <div class="section-center featured-center">
        <Tour
          img="./images/tour-1.jpeg"
          date="august 26th, 2020"
          title="Tibet Adventure"
          icon="fas fa-map"
          country="India"
          days="6 days"
          amount="from $2100"
        />
        <Tour
          img="./images/tour-2.jpeg"
          date="october 1th, 2020"
          title="Best of Java"
          icon="fas fa-map"
          country="Indonesia"
          days="4 days"
          amount="from $2100"
        />
        <Tour
          img="./images/tour-3.jpeg"
          date="august 26th, 2022"
          title="Explore Hong Kong"
          icon="fas fa-map"
          country="Hong Kong"
          days="11 days"
          amount="from $2000"
        />
        <Tour
          img="./images/tour-4.jpeg"
          date="august 26th, 2022"
          title="kenya Highlights"
          icon="fas fa-map"
          country="Kenya"
          days="14 days"
          amount="from $200"
        />
      </div>
    </section>
  );
};
export default Tours;
