import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export default function QFS() {
  const sheets = [
    {
        title: "Multifamily Yield Fund IV",
        type: "Income",
        risk: "Low-Moderate",
        term: "5-7 Years",
        min: "$50,000"
    },
    {
        title: "Urban Office Redevelopment",
        type: "Growth",
        risk: "High",
        term: "7-10 Years",
        min: "$100,000"
    },
    {
        title: "Industrial Logistics Trust",
        type: "Balanced",
        risk: "Moderate",
        term: "5 Years",
        min: "$25,000"
    },
    {
        title: "Hospitality Debt Fund",
        type: "Income",
        risk: "Moderate",
        term: "3 Years",
        min: "$50,000"
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-6 text-primary">Quick Facts Sheets (QFS)</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Executive summaries and key performance indicators for our active investment vehicles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sheets.map((sheet, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                        <div className="flex items-start justify-between mb-6">
                            <div className="p-3 bg-primary/5 rounded-lg text-primary">
                                <FileText className="h-8 w-8" />
                            </div>
                            <span className="px-3 py-1 bg-gray-100 text-xs font-bold uppercase tracking-wider rounded-full text-muted-foreground">
                                {sheet.type}
                            </span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">{sheet.title}</h3>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Risk Profile</div>
                                <div className="font-medium">{sheet.risk}</div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Lock-up Period</div>
                                <div className="font-medium">{sheet.term}</div>
                            </div>
                            <div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">Min Investment</div>
                                <div className="font-medium">{sheet.min}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button className="flex-1 bg-primary text-white hover:bg-primary/90 uppercase tracking-wide text-xs font-bold">
                            View Details
                        </Button>
                        <Button variant="outline" className="px-3">
                            <Download className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
