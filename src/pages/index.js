import React from "react";
import SEO from "@/components/seo";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import Layout from "@/layout/index";
import Products from "@components/product/product-grid";
import HeroSlider from "@/components/slider/hero-slider";

const HomePage = () => {
  return (
    <Layout>
      <SEO
        title="Home | Pratik Electricals India"
        description="Explore the world of Yoga and Meditation"
        canonical={`${process.env.PUBLIC_URL}`}
      />

      <Header />
      <HeroSlider />
      <Products />
      <Footer />
    </Layout>
  );
};

export default HomePage;
