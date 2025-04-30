import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"; // Importing necessary components for tabs from Headless UI
import SectionTitle from "../../../../Components/Section-Title/SectionTitle"; // Importing the SectionTitle component for displaying the section header
import WebsiteTabPanel from "../WebsiteTabPanel/WebsiteTabPanel"; // Importing the WebsiteTabPanel component
import "./TechnologySection.css"; // Importing custom CSS for styling
import UiUxTabPanel from "../UiUxTabPanel/UiUxTabPanel"; // Importing the UI/UX Tab Panel component
import DigitalTabPanel from "../DigitalTabPanel/DigitalTabPanel"; // Importing the Digital Marketing Tab Panel component
import VideoEditingTabPanel from "../VideoEditingTabPanel/VideoEditingTabPanel"; // Importing the Video Editing Tab Panel component
import GraphicsTabPanel from "../GraphicsTabPanel/GraphicsTabPanel"; // Importing the Graphics Design Tab Panel component

const TechnologySection = () => {
  // Categories for the different technology sectors (tabs)
  const categories = [
    "website", // Website Development
    "UI/UX Design", // UI/UX Design
    "Graphics Design", // Graphics Design
    "Digital Marketing", // Digital Marketing
    "Video Editing", // Video Editing
  ];

  return (
    <div>
      <div className="bg-[#F8FDFE] min-h-screen my-24 py-10">
        <div className="max-w-[1280px] mx-auto xl:px-12 lg:px-12 md:px-12 px-6 space-y-16">
          {/* Section Title */}
          <SectionTitle
            heading={
              <>
                Powering{" "}
                <span className="text-color bg-gradient-to-r from-[#00ffff] to-blue-800">
                  Innovation
                </span>{" "}
                with the Right Tech
              </>
            }
            subheading={"Technology"}
          >
            {/* Subheading text with a description of services */}
            <p className="ruluko-regular font-semibold text-gray-500">
              Bd Master Developer works in multiple sectors including website
              development, API development, Digital Marketing, UI/UX & SEO. Our
              dream is to continue your journey with success{" "}
            </p>
          </SectionTitle>

          {/* Technologies Tab Section */}
          <div>
            <div>
              <TabGroup>
                {/* Tab List - Buttons for each category */}
                <TabList className="lg:flex xl:flex grid md:grid-cols-3 sm:grid-cols-3 gap-4">
                  {categories.map((category, index) => (
                    <Tab
                      key={index} // Each Tab represents a category
                      className="rounded-full capitalize btn bg-[#F8FDFE] tab-custom-shadow py-1 px-3 text-sm/6 font-semibold text-[#1D2345] focus:outline-none data-[selected]:bg-[#1D2345] data-[hover]:bg-[#1D2345]   data-[selected]:text-[#F8FDFE] data-[hover]:text-[#F8FDFE] data-[focus]:outline-1 data-[focus]:outline-[#F8FDFE]"
                    >
                      {category}{" "}
                      {/* Display the category name inside the tab */}
                    </Tab>
                  ))}
                </TabList>

                {/* Tab Panels - Displays content based on the selected tab */}
                <TabPanels>
                  <TabPanel>
                    <WebsiteTabPanel />{" "}
                    {/* Component for Website Development */}
                  </TabPanel>
                  <TabPanel>
                    <UiUxTabPanel /> {/* Component for UI/UX Design */}
                  </TabPanel>
                  <TabPanel>
                    <GraphicsTabPanel /> {/* Component for Graphics Design */}
                  </TabPanel>
                  <TabPanel>
                    <DigitalTabPanel /> {/* Component for Digital Marketing */}
                  </TabPanel>

                  <TabPanel>
                    <VideoEditingTabPanel /> {/* Component for Video Editing */}
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
