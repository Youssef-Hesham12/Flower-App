import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations();
  return (
    <>
      <div className="main-container mb-16">
        <h2 className="text-[#F82BA9] font-bold uppercase my-10 tracking-[4px]">
        {t("contact-us")}
        </h2>
        <div className="flex max-lg:flex-col max-lg:gap-10 justify-between">
          <div className="w-1/4 max-lg:w-full flex flex-col gap-16 p-10 rounded-lg shadow justify-center items-stretch">
            <div className="cont flex items-center gap-3">
              <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                <PhoneCall className="text-[#F82BA9] font-bold" />
              </div>
              <div className="info">
                <h4 className="text-[#F82BA9] font-bold">Call Anytime</h4>
                <p className="text-sm">241-373-2123</p>
              </div>
            </div>
            <div className="cont flex items-center gap-3">
              <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                <Mail className="text-[#F82BA9] font-bold" />
              </div>
              <div className="info">
                <h4 className="text-[#F82BA9] font-bold">Send Email</h4>
                <p className="text-sm">Dwight63@gmail.com</p>
              </div>
            </div>
            <div className="cont flex items-center gap-3">
              <div className="icon border p-2 border-[#F82BA9] rounded-[10px]">
                <MapPin className="text-[#F82BA9] font-bold" />
              </div>
              <div className="info">
                <h4 className="text-[#F82BA9] font-bold">Visit Us</h4>
                <p className="text-sm">
                  20 Island Park Road,
                  <br />
                  New Jearsy, New York, USA
                </p>
              </div>
            </div>
          </div>
          <div className="shadow p-8 rounded-lg w-1/2 max-lg:w-full">
            <form className="flex flex-col justify-end w-full">
              <input
                type="text"
                className="w-full border-2 focus:outline-none placeholder:text-primary  border-[#F82BA9]  rounded-[10px] py-2.5 px-4"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full focus:outline-none placeholder:text-primary border-[#F82BA9] border-2 rounded-[10px] py-2.5 px-4 my-6"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full focus:outline-none placeholder:text-primary border-[#F82BA9] border-2 rounded-[10px] py-2.5 px-4"
                placeholder="Phone"
              />
              <textarea
                className="w-full resize-none focus:outline-none mt-6 placeholder:text-primary border-[#F82BA9] border-2 rounded-[10px] py-2.5 px-4"
                placeholder="Your Message"
                name=""
                id=""
                rows={5}
              ></textarea>
              <div className="text-end">
                <button className="text-white w-[100px] mt-4 py-[10px] flex bg-[#F82BA9] px-[20px] rounded-[30px]">
                  Send
                  <ArrowRight width={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
   
  );
}
