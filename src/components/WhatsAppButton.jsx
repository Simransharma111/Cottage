import { MessageCircle } from "lucide-react";
import { property } from "../data/property";

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${
    property.whatsapp
  }?text=${encodeURIComponent(
    "Hi, I would like to enquire about staying at Royal Cottage Jibhi."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Royal Cottage Jibhi on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f3529] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={23} strokeWidth={1.6} />

      <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-[#c5b18d]" />
    </a>
  );
}

export default WhatsAppButton;