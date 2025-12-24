import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export default function SetupWizard() {
  const [, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [orgName, setOrgName] = useState("");
  const [modules, setModules] = useState({
    overview: true,
    briefing: false,
    financials: false,
    evidence: false,
    source: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleModuleToggle = (key: keyof typeof modules) => {
    setModules(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async () => {
    if (!orgName.trim()) {
      toast({ title: "Error", description: "Organization name is required", variant: "destructive" });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/setup/org", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orgName, modules }),
        credentials: "include",
      });

      if (!response.ok) throw new Error("Setup failed");

      toast({ title: "Setup Complete!", description: "Your organization is ready to use." });
      setLocation("/dashboard");
    } catch (error: any) {
      toast({ title: "Setup Failed", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-primary mb-3">Setup Your Organization</h1>
            <p className="text-muted-foreground">Step {step} of 2: Configure your dashboard</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 flex gap-2">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-all ${
                  s <= step ? "bg-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            {step === 1 ? (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Organization Name</label>
                  <input
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g., Alliance Capital Partners"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-xs text-muted-foreground mt-2">This is your company identity</p>
                </div>

                <div className="pt-4">
                  <h3 className="text-sm font-semibold mb-4">Enable Admin Access</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input type="checkbox" defaultChecked disabled className="w-4 h-4" />
                      <span className="text-sm">Dashboard Overview (Always Enabled)</span>
                    </label>
                  </div>
                </div>

                <Button
                  onClick={() => setStep(2)}
                  className="w-full bg-primary text-white mt-6"
                  data-testid="button-next-setup"
                >
                  Next: Select Modules
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold mb-4">Enable Dashboard Modules</h3>
                  <p className="text-xs text-muted-foreground mb-4">Start with Overview, add more modules as needed</p>
                  
                  <div className="space-y-3">
                    {[
                      { key: "overview" as const, label: "Overview", desc: "Dashboard home & KPIs", disabled: true },
                      { key: "briefing" as const, label: "Briefing", desc: "Daily executive summary" },
                      { key: "financials" as const, label: "Financials", desc: "Revenue & expense tracking" },
                      { key: "evidence" as const, label: "Evidence", desc: "Document management" },
                      { key: "source" as const, label: "Source", desc: "Data pipeline" },
                    ].map(({ key, label, desc, disabled }) => (
                      <label
                        key={key}
                        className={`flex items-start gap-3 p-4 border rounded-lg transition-all ${
                          modules[key] ? "bg-blue-50 border-primary" : "hover:bg-gray-50"
                        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <input
                          type="checkbox"
                          checked={modules[key]}
                          onChange={() => !disabled && handleModuleToggle(key)}
                          disabled={disabled}
                          className="w-4 h-4 mt-1"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-muted-foreground">{desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                    data-testid="button-back-setup"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex-1 bg-primary text-white"
                    data-testid="button-complete-setup"
                  >
                    {isLoading ? "Configuring..." : "Complete Setup"}
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Skip Option */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            <button
              onClick={() => setLocation("/dashboard")}
              className="text-primary hover:underline font-medium"
            >
              Skip setup (use demo data)
            </button>
          </p>
        </div>
      </div>
    </Layout>
  );
}
