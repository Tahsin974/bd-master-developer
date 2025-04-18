import img from "../../../assets/About-Section/who-we-are.webp";
const AboutSection = () => {
  return (
    <div>
      {/*
       ----------------------------------------------
      About Section Container 
       ----------------------------------------------
      */}

      <div className="hero bg-white text-black my-24 min-h-screen">
        {/*
         ----------------------------------------------
        Content Wrapper - Flexbox for responsiveness 
         ----------------------------------------------
        */}

        <div className="hero-content flex-col xl:flex-row lg:flex-row max-w-[1140px] mx-auto  ">
          {/*
           ----------------------------------------------
          Left Column - Text Content 
           ----------------------------------------------
          */}

          <div className="lg:w-1/2 xl:w-1/2">
            <h5 className="text-blue-800 text-lg font-semibold">Who We Are</h5>
            {/* 
            ---------------------------------------------
            Main Heading 
            ----------------------------------------------
            */}

            <h1 className="xl:text-5xl/snug lg:text-5xl/snug md:text-5xl/snug sm:text-5xl/snug text-4xl/snug    yatra-one-regular">
              From Terminal to Triumph — <br /> We Are{" "}
              <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                BD Masters
              </span>
            </h1>
            {/*
            ------------------------------------------
            Description Paragraph 
            ------------------------------------------
            */}

            <p className="py-6 text-lg ruluko-regular">
              BD Master Developer works across multiple domains including
              software development, dynamic website development, customized
              software solutions, and modern UI/UX design. We craft scalable,
              high-performance applications tailored to meet your business
              goals. Our mission is to write clean code that powers real-world
              impact — and our dream is to grow alongside your success.
            </p>
            {/*
            --------------------------------------------
            More About Us Button 
            -------------------------------------------
            */}

            <button className="btn bg-blue-800 text-white border-blue-800 shadow-none rounded-lg">
              More About Us
            </button>
          </div>
          {/* 
          -------------------------------------
          Right Column - Image 
          -------------------------------------
          */}

          <figure className=" lg:w-1/2 xl:w-1/2 ">
            <img src={img} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
