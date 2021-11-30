import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactData from "../../data/contact.json";

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-10 m-auto">
            <div className="contact-info-content">
              {ContactData &&
                ContactData.map((single, key) => {
                  return <ContactInfo data={single} key={key} />;
                })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xl-10 m-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
