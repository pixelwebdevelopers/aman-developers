import { useState } from "react";
import { Landmark, X, Copy, Check } from "lucide-react";

const BankDetailsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    bankName: "Faisal Bank",
    accountTitle: "AA AMAN DEVELOPERS",
    accountNumber: "3627301000000867",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 group"
        aria-label="View Bank Details"
      >
        {/* Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <Landmark className="w-6 h-6 text-white" />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Bank Details
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient */}
            <div className="bg-primary px-6 py-5 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full animate-float" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce-slow">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bank Details</h3>
                    <p className="text-white/80 text-sm">For payments & transfers</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Bank Name */}
              <div className="bg-gray-50 rounded-xl p-4 transform hover:scale-[1.02] transition-transform duration-300">
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Bank Name</p>
                <p className="text-lg font-semibold text-gray-800">{bankDetails.bankName}</p>
              </div>

              {/* Account Title */}
              <div className="bg-gray-50 rounded-xl p-4 transform hover:scale-[1.02] transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Account Title</p>
                <p className="text-lg font-semibold text-gray-800">{bankDetails.accountTitle}</p>
              </div>

              {/* Account Number with Copy */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 border-2 border-primary/20 transform hover:scale-[1.02] transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs text-primary uppercase tracking-wide font-medium mb-1">Account Number</p>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide font-mono">{bankDetails.accountNumber}</p>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 ${
                      copied
                        ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                        : "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 animate-bounce" />
                        <span className="hidden sm:inline">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500 text-center pt-2 flex items-center justify-center gap-2">
                <span className="w-8 h-px bg-gray-300"></span>
                Please use the exact account title when making transfers
                <span className="w-8 h-px bg-gray-300"></span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BankDetailsButton;
