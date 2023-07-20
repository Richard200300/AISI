
import Header from "@/components/Homepage/Header"
import Head from "next/head"
import Navbar from "@/components/Navbar"
const page = () => {
  return (
    <section className="mainpage">
      <div className="page">
        <Navbar />
      <Header />
      <Header />

      </div>
      </section>
  )
}

export default page