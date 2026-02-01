import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/923339998436?text=Hello! I'm interested in learning more about Aman Developers investment opportunities.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse Ring Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </span>
    </button>
  );
};

export default WhatsAppButton;
