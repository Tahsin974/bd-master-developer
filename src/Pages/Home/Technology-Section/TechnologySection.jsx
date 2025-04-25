import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import SectionTitle from "../../../Components/Section-Title/SectionTitle";
import WebsiteTabPanel from "./WebsiteTabPanel/WebsiteTabPanel";

const TechnologySection = () => {
  // categories
  const categories = [
    "website",
    "UI/UX Design",
    "Digital Marketing",
    "SEO",
    "Video Editing",
    "Graphics Design",
  ];
  return (
    <div>
      <div className="  bg-[#F8FDFE] min-h-screen my-24 py-20">
        <div className="max-w-[1280px] mx-auto xl:px-4 lg:px-4 md:px-4 sm:px-4 px-2 space-y-16">
          {/*
          -----------------------------------------------
          Section Title 
          -----------------------------------------------
          */}
          <SectionTitle
            heading={"Powering Innovation with the Right Tech"}
            subheading={"Technology"}
          >
            <p className="ruluko-regular font-semibold text-gray-500">
              Bd Master Developer works in multiple Sector including website
              development,API development,Digital Marketing , UI/UX & SEO.Our
              dream is to continue your journey with success{" "}
            </p>
          </SectionTitle>
          {/*
          -----------------------------------------------
          Technologies
          -----------------------------------------------
          */}
          <div>
            <div>
              <TabGroup>
                <TabList className="lg:flex xl:flex grid md:grid-cols-4 sm:grid-cols-3  gap-4">
                  {categories.map((category, index) => (
                    <Tab
                      key={index}
                      className="rounded-full capitalize btn bg-[#F8FDFE] custom-shadow py-1 px-3 text-sm/6 font-semibold text-[#1D2345] focus:outline-none data-[selected]:bg-[#1D2345] data-[hover]:bg-[#1D2345]   data-[selected]:text-[#F8FDFE] data-[hover]:text-[#F8FDFE] data-[focus]:outline-1 data-[focus]:outline-[#F8FDFE]"
                    >
                      {category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <WebsiteTabPanel />
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
