import React from "react";
import SEO from "@/components/seo";
import Contact from "@/components/contact";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Layout from "@/layout/index";

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact Us | Pratik Electricals India"
        description="Explore the world of Yoga and Meditation"
        canonical={`${process.env.PUBLIC_URL}/contact`}
      />
      <div className="wrapper">
        <Header />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
};

export default ContactPage;
