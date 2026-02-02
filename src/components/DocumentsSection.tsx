import { FileText, Download, ExternalLink, Shield, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const DocumentsSection = () => {
  const documents = [
    {
      name: "NTN Certificate",
      filename: "NTN-CERTIFICATE.pdf",
      icon: FileText,
      description: "National Tax Number Registration",
    },
    {
      name: "Memorandum of Association",
      filename: "MOA.pdf",
      icon: FileText,
      description: "Company MOA Document",
    },
    {
      name: "Incorporation Certificate",
      filename: "INCORPORATION-CERTIFICATE.pdf",
      icon: Award,
      description: "SECP Registration Certificate",
    },
    {
      name: "Articles of Association",
      filename: "AOA.pdf",
      icon: FileText,
      description: "Company AOA Document",
    },
    {
      name: "Active Filer - FBR",
      filename: "ACTIVE-FILER-FBR.pdf",
      icon: CheckCircle,
      description: "FBR Active Taxpayer Status",
    },
  ];

  const handleOpenDocument = (filename: string) => {
    window.open(`/documents/${filename}`, "_blank");
  };

  const handleDownloadDocument = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/documents/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="documents" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Legal & Verified
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                  Fully Documented & <span className="text-primary">Transparent</span>
                </h2>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Aman Developers, we believe in complete transparency and legal compliance. 
                  We are a fully registered and documented company operating under all applicable 
                  laws and regulations of Pakistan.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  All our business operations are conducted with proper documentation, ensuring 
                  that your investments are secure and backed by legitimate legal frameworks.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">SECP Registered</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">FBR Active Filer</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">NTN Verified</span>
                </div>
              </div>
            </div>

            {/* Right Column - Document Cards */}
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="group bg-card p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex items-center justify-between gap-4"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleOpenDocument(doc.filename)}
                      className="hover:bg-primary/10 hover:text-primary transition-all"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDownloadDocument(doc.filename)}
                      className="hover:bg-primary/10 hover:text-primary transition-all"
                      title="Download"
                    >
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Download All CTA */}
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 text-center mt-6 border border-primary/20">
                <p className="text-muted-foreground mb-3">
                  Access all our legal documents anytime for your peace of mind.
                </p>
                <p className="text-sm text-primary font-medium">
                  Click on any document above to view or download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
