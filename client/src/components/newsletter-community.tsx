import { useState } from "react";
import { Podcast, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface NewsletterFormData {
  firstName: string;
  email: string;
  company: string;
}

export default function NewsletterCommunity() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: "",
    email: "",
    company: ""
  });

  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our professional network. Welcome to The Alliance Enterprise!",
      });
      setFormData({ firstName: "", email: "", company: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to join the network. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to join our network.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof NewsletterFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="community" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <div>
            <h2 className="text-4xl font-bold text-dark-navy mb-6">Join Our Professional Network</h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead with exclusive insights, industry trends, and strategic updates from our integrated service divisions.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    data-testid="input-firstname"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Professional Email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    data-testid="input-email"
                    required
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-blue focus:outline-none transition-colors duration-300"
                    data-testid="input-company"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={newsletterMutation.isPending}
                  className="w-full gradient-primary text-white p-4 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:hover:transform-none"
                  data-testid="button-join-network"
                >
                  {newsletterMutation.isPending ? "Joining..." : "Join the Alliance Network"}
                </button>
              </div>
            </form>
          </div>

          {/* Podcast/Content Preview */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-dark-navy mb-6">The Alliance Insight Podcast</h3>
            <div className="gradient-primary rounded-xl p-8 text-white mb-6">
              <Podcast className="h-16 w-16 mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Latest Episode Available</h4>
              <p className="text-blue-100 mb-4">"Integrating Cybersecurity with Business Strategy"</p>
              <div className="flex items-center justify-center space-x-4">
                <button 
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-300"
                  data-testid="button-podcast-play"
                >
                  <Play className="h-6 w-6" />
                </button>
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <div className="bg-accent-gold h-2 rounded-full w-1/3"></div>
                </div>
                <span className="text-sm">12:30</span>
              </div>
            </div>
            <p className="text-gray-600">
              Weekly insights from industry leaders discussing the intersection of security, compliance, and strategic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
