import AboutUsHeaderPage from "../(home)/_components/about_Us/about-us";
import Information from "../(home)/_components/information/information";
import Testimonails from "../(home)/_components/testimonials/testimonials";
import Companies from "../(home)/_components/trusted-companies/companies";

export default function page() {
  return (
    <main className="container">
      <AboutUsHeaderPage />
      {/* Information section */}
      <Information />

      {/* Testimonails section */}
      <Testimonails />
      {/*Trusted companies  */}
      <Companies />
    </main>
  );
}
