import Header from "@/components/Homepage/Header";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
const page = () => {
  return (
    <section className="mainpage">
      
        <Navbar />
        <Header />
        <Footer />
    
    </section>
  );
};

export default page;
