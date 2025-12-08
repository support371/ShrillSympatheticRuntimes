import { Linkedin, Twitter, Mail } from "lucide-react";

export default function FooterCTA() {
  return (
    <section id="contact" className="py-20 gradient-primary text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Secure Your Future?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Experience the power of integrated cybersecurity, compliance, and real estate management. Let's build something extraordinary together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            data-testid="button-schedule-consultation"
          >
            Schedule Consultation
          </button>
          <button 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:-translate-y-1 hover:bg-white hover:text-primary-blue transition-all duration-300"
            data-testid="button-download-brochure"
          >
            Download Brochure
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-center space-x-8 text-white/80">
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              data-testid="link-twitter"
            >
              <Twitter className="h-8 w-8" />
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-300"
              data-testid="link-email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
          <p className="mt-4 text-white/60">© 2024 The Alliance Enterprise. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
