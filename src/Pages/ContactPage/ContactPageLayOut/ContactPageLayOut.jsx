import PageTitle from "../../../Components/PageTitle/PageTitle";
import useLoading from "../../../Utils/Hooks/useLoading";
import ContactForm from "../ContactForm/ContactForm";
import Map from "../Map/Map";
import img from "../../../assets/Logo/logo 1.png";

const ContactPageLayOut = () => {
  const { loading } = useLoading();
  return (
    <div>
      {!loading ? (
        <div>
          <PageTitle pageName={"contact"}>
            Let’s Build Something Great Together
          </PageTitle>
          <ContactForm />
          <Map />
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <img src={img} alt="loading" className="loading-img" />
        </div>
      )}
    </div>
  );
};

export default ContactPageLayOut;
