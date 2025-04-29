import PageTitle from "../../../Components/PageTitle/PageTitle";
import ContactForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";

const ContactPageLayOut = () => {
  return (
    <div>
      <PageTitle pageName={"contact"} />
      <ContactForm />
      <Map />
    </div>
  );
};

export default ContactPageLayOut;
