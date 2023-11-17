import React from "react";

import ArchitectureIcon from "../images/service-icons/interior-design.svg";
import RenovationIcon from "../images/service-icons/building-renovation.svg";
import ConstructionIcon from "../images/service-icons/construction.svg";
import Eyebrow from "./eyebrow";
import ServiceItem from "./serviceItem";

const Services = () => {
  return (
    <div id="#services">
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="lg:col-span-8">
              <Eyebrow label="OUR SERVICES" />
              <h2 className="font-display md:text-display-xl text-display-md pt-5">
                We provide the <span className="italic">best solutions</span>{" "}
                for your dream home
              </h2>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Architectural & Interior design"
              description="Crafting unique spaces, our expertise merges creativity and functionality for your vision in architecture and interior design."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Fall Ceiling & Renovation"
              description="We offer a wide range of renovation services, from simple repairs to complete home makeovers. Our team of experts will help you transform your space"
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="Custom Furniture"
              description="Design your dream space with our custom furniture service. Tailored to your style, our craftsmen create unique pieces that fit perfectly into your home."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
