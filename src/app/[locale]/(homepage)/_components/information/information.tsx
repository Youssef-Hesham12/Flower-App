import { CiDeliveryTruck } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { BsArrowRepeat } from "react-icons/bs";

export default function Information() {
  // Translation
  const t = useTranslations();

  // Variables
  const infoCards = [
    {
      icon: <CiDeliveryTruck className="w-8 h-8 text-white" />,
      name: t("free-delivery"),
      desc: t("orders-over-120"),
    },
    {
      icon: <BsArrowRepeat className="w-8 h-8 text-white" />,
      name: t("get-refund"),
      desc: t("within-30-days-returns"),
    },
    {
      icon: <IoWalletOutline className="w-8 h-8 text-white" />,
      name: t("safe-payment"),
      desc: t("100-secure-payment"),
    },
    {
      icon: <FaHeadset className="w-8 h-8 text-white" />,
      name: t("24-7-support"),
      desc: t("feel-free-to-call-us"),
    },
  ];

  return (
    <div className="container">
      <ul className="bg-custom-rose-25 flex flex-col lg:flex-row justify-center items-center gap-4 p-10 rounded-2xl mt-20">
        {infoCards.map((card, index) => (
          <li key={index} className="flex flex-col lg:flex-row  items-center gap-4">
            {/* Icon  */}
            <div className="img-container bg-custom-rose-900 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              {card.icon}
            </div>

            <div className="flex flex-col lg:items-start items-center">
              {/* Offer name */}
              <p className="text-custom-blue-900 font-bold text-xl">{card.name}</p>

              {/* Offer description */}
              <p className="text-custom-blue-500">{card.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
