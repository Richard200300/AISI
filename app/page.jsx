import Header from "@/components/Homepage/Header";
import Head from "next/head";
import Navbar from "@/components/Navbar";
const page = () => {
  return (
    <section className="mainpage">
      
        <Navbar />
        <Header />
    
    </section>
  );
};

export default page;
