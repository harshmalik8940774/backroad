import Heading from "./Heading";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Heading btitle="our" gtitle="Services" />

      <div className="section-center services-center">
        <Service icon="fas fa-wallet fa-fw " title="saving money" />
        <Service icon="fas fa-tree fa-fw " title="endless hiking" />
        <Service icon="fas fa-socks fa-fw " title="amazing comfort" />

       
      </div>
    </section>
  );
}
export default Services