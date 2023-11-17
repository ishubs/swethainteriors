import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Eyebrow from "./eyebrow";
import AwardBadge from "../images/award-badge.svg";

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutimage: file(relativePath: { eq: "about-creative.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 592
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div id="#about">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              We help to bring your <span className="italic">dream home</span>{" "}
              to reality
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            At Swetha Interiors, we craft spaces that resonate with your individuality. With over 200 successful client collaborations, 
            our passion lies in bringing your dreams to life. From conceptualization to creation, 
            
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
            we are dedicated to delivering bespoke designs that reflect your unique style and preferences. 
            Our journey is defined by a commitment to excellence, turning every space into a story, 
            and every project into an inspiring masterpiece.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <GatsbyImage
              image={getImage(data.aboutimage)}
              alt="Interior Design"
            />
            <img
              src={AwardBadge}
              alt="Award Badge"
              className="absolute left-[42%] -top-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
