import AboutUsHeaderPage from "../(homepage)/_components/about-us/about-us";
import Information from "../(homepage)/_components/information/information";
import Testimonails from "../(homepage)/_components/testimonials/testimonials";
import Companies from "../(homepage)/_components/trusted-companies/companies";

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
