import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="sm:h-screen font-acme  text-black grid place-items-center"
    >
      <div className="grid sm:grid-cols-2 gap-10 text-justify">
        <div className="max-w-sm">
          <h1 className="p-5 text-md sm:text-2xl  font-fugas  text-center text-blue-500">
            Company Profile
          </h1>
          <p className="text-sm sm:text-lg">
            SML Electronics has been established on 2015. We can Provide
            Complete Cable Assemblies with any Connector required by Customized
            Service.
            <br />
            <br />
            We are involved in the supply of cable harness assembly. wire looms
            and Panel internal and external wiring for defense and aerospace
            industry.
            <br />A Complete wiring solution and Electro Mechanical Integrations
            sub assembly
          </p>
        </div>
        <div className="max-w-sm">
          <h1 className="p-5 text-md sm:text-2xl  font-fugas  text-center text-blue-500">
            Company Service
          </h1>
          <p className="text-sm sm:text-lg">
            We are specialist in cable assemblies manufacturing of mil-grade
            Ground support systems, fabrication of high quality looms, airborne
            systems, test jigs these services cater to the various requirements
            of different sectors such as aerospace and defense, and our
            technicians are early experience Amphenol India Deputed in
            bombardier transportation Savli DMRCL cable harness /looms and
            battery cable for roof and under frame cabinet interconnection
            wiring loom worked on site and in house . Other defense work
            experience Indian navy aircraft /helicopter new systems upgradation
            electrical looms and mechanical structure installation on board .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
