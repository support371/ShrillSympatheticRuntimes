import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Activity, AlertCircle, CheckCircle, Clock, HardDrive, Zap } from "lucide-react";

interface HealthData {
  status: string;
  version: string;
  env: string;
  uptime: number;
  db: string;
  cache: string;
}

interface MetricsData {
  p50: number;
  p95: number;
  errorRate: number;
  grade: "A" | "B" | "C";
}

export default function AdminDiagnostics() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDiagnostics = async () => {
      try {
        const [healthRes, metricsRes] = await Promise.all([
          fetch("/api/health", { credentials: "include" }),
          fetch("/api/metrics-lite", { credentials: "include" }),
        ]);

        if (healthRes.ok) {
          setHealth(await healthRes.json());
        }
        if (metricsRes.ok) {
          setMetrics(await metricsRes.json());
        }
      } catch (error) {
        toast({ title: "Error", description: "Failed to fetch diagnostics", variant: "destructive" });
      } finally {
        setLoading(false);
      }
    };

    fetchDiagnostics();
    const interval = setInterval(fetchDiagnostics, 10000); // Refresh every 10s
    return () => clearInterval(interval);
  }, [toast]);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
        return "text-green-600 bg-green-100";
      case "B":
        return "text-amber-600 bg-amber-100";
      case "C":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-primary mb-2">Admin Diagnostics</h1>
            <p className="text-muted-foreground">System health & performance metrics</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <Activity className="h-8 w-8 text-primary animate-spin mx-auto mb-3" />
              <p className="text-muted-foreground">Loading diagnostics...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Performance Grade */}
              {metrics && (
                <div className={`rounded-lg p-6 ${getGradeColor(metrics.grade)} border`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg mb-1">Performance Grade</h3>
                      <p className="text-sm opacity-90">Based on API latency and error rates</p>
                    </div>
                    <div className={`text-6xl font-bold ${getGradeColor(metrics.grade)}`}>
                      {metrics.grade}
                    </div>
                  </div>
                </div>
              )}

              {/* Health Status */}
              {health && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="font-bold">System Status</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <span className="font-medium capitalize">{health.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Environment</span>
                        <span className="font-medium">{health.env}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Version</span>
                        <span className="font-medium">{health.version}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <h3 className="font-bold">Uptime</h3>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {Math.floor(health.uptime / 3600)}h {Math.floor((health.uptime % 3600) / 60)}m
                    </div>
                    <p className="text-xs text-muted-foreground">Continuous operation</p>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <HardDrive className="h-5 w-5 text-amber-600" />
                      <h3 className="font-bold">Database</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Connection Status</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          health.db === "ok" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {health.db === "ok" ? "✓ Connected" : "✗ Failed"}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="h-5 w-5 text-purple-600" />
                      <h3 className="font-bold">Cache</h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          health.cache === "ok" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {health.cache === "ok" ? "✓ Active" : "⚠ Limited"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Performance Metrics */}
              {metrics && (
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Performance Metrics
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">API p50 Latency</p>
                      <p className="text-2xl font-bold text-blue-600">{metrics.p50.toFixed(0)}ms</p>
                      <p className="text-xs text-muted-foreground mt-1">Median response</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">API p95 Latency</p>
                      <p className="text-2xl font-bold text-amber-600">{metrics.p95.toFixed(0)}ms</p>
                      <p className="text-xs text-muted-foreground mt-1">95th percentile</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Error Rate</p>
                      <p className="text-2xl font-bold text-red-600">{(metrics.errorRate * 100).toFixed(2)}%</p>
                      <p className="text-xs text-muted-foreground mt-1">Request failures</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Recommendations */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Quick Recommendations</h3>
                    <ul className="space-y-1 text-sm text-blue-800">
                      <li>• Monitor API latency for performance degradation</li>
                      <li>• Check database connection health regularly</li>
                      <li>• Review error logs when error rate increases</li>
                      <li>• Enable Safe Mode if critical modules fail</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
