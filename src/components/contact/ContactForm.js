import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const [message, setMessage] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    if (message) {
      if (message === "success") {
        toast.success("Thank you for your email, We will contact you shortly");
      } else {
        toast.error("Oops, Something went wrong !");
      }
    }
  }, [message]);

  const onSubmit = async (data) => {
    const contactInfo = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const result = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(contactInfo),
      });
      if (result.status >= 400 && result.status < 600) {
        throw new Error("Bad response from server");
      } else {
        setMessage("success");
      }
    } catch (error) {
      setMessage("failed");
    }
  };

  return (
    <div className="contact-form">
      {message && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      <div className="text-center" data-aos="fade-up">
        <h2 className="title">How caw we help you ?</h2>
      </div>
      <form>
        <div className="row">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder=" Name "
                {...register("name", { required: "Name is required !" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Type your email address"
                {...register("email", {
                  required: "Email is required !",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="900">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder=" Subject"
                {...register("subject", { required: "Subject is required !" })}
              />
              {errors.subject && <p>{errors.subject.message}</p>}
            </div>
          </div>
          <div className="col-md-12" data-aos="fade-up">
            <div className="form-group mb-0">
              <textarea
                rows="7"
                placeholder="Your message here..."
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <p>{errors.message.message}</p>}
            </div>
          </div>
          <div
            className="col-md-12 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="form-group mb-0">
              <button className="btn-submit" onClick={handleSubmit(onSubmit)}>
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
