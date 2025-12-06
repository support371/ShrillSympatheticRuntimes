import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Auth API
export interface User {
  id: string;
  email: string;
  fullName: string | null;
  isDemo: boolean;
}

export interface AuthResponse {
  user: User;
}

export async function register(email: string, password: string, fullName?: string): Promise<AuthResponse> {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, fullName }),
    credentials: "include",
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Registration failed");
  }
  
  return res.json();
}

export async function login(email: string, password: string): Promise<AuthResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Login failed");
  }
  
  return res.json();
}

export async function logout(): Promise<void> {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
  
  if (!res.ok) {
    throw new Error("Logout failed");
  }
}

export async function getCurrentUser(): Promise<User | null> {
  const res = await fetch("/api/auth/me", {
    credentials: "include",
  });
  
  if (res.status === 401) {
    return null;
  }
  
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  
  const data = await res.json();
  return data.user;
}

export async function createDemoAccount(): Promise<AuthResponse> {
  const res = await fetch("/api/auth/demo", {
    method: "POST",
    credentials: "include",
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Demo account creation failed");
  }
  
  return res.json();
}

// Newsletter API
export async function subscribeNewsletter(email: string): Promise<void> {
  const res = await fetch("/api/newsletter/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Subscription failed");
  }
}

// Strategies API
export interface Strategy {
  id: string;
  slug: string;
  title: string;
  type: string;
  riskLevel: string;
  targetIRR: string | null;
  minInvestment: string | null;
  term: string | null;
  description: string | null;
  details: any;
}

export async function getStrategies(): Promise<Strategy[]> {
  const res = await fetch("/api/strategies");
  
  if (!res.ok) {
    throw new Error("Failed to fetch strategies");
  }
  
  const data = await res.json();
  return data.strategies;
}

export async function getStrategyBySlug(slug: string): Promise<Strategy> {
  const res = await fetch(`/api/strategies/${slug}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch strategy");
  }
  
  const data = await res.json();
  return data.strategy;
}

// React Query Hooks
export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      login(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
}

export function useRegister() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ email, password, fullName }: { email: string; password: string; fullName?: string }) =>
      register(email, password, fullName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.setQueryData(["currentUser"], null);
    },
  });
}

export function useCreateDemoAccount() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createDemoAccount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });
}

export function useSubscribeNewsletter() {
  return useMutation({
    mutationFn: subscribeNewsletter,
  });
}

export function useStrategies() {
  return useQuery({
    queryKey: ["strategies"],
    queryFn: getStrategies,
  });
}

export function useStrategy(slug: string) {
  return useQuery({
    queryKey: ["strategy", slug],
    queryFn: () => getStrategyBySlug(slug),
    enabled: !!slug,
  });
}

// Investments API
export interface Investment {
  id: string;
  userId: string;
  strategyId: string;
  amount: string;
  status: string;
  purchaseDate: string;
  maturityDate: string | null;
  currentValue: string | null;
}

export async function createInvestment(strategyId: string, amount: number): Promise<Investment> {
  const res = await fetch("/api/investments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ strategyId, amount }),
    credentials: "include",
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create investment");
  }
  
  const data = await res.json();
  return data.investment;
}

export async function getUserInvestments(): Promise<Investment[]> {
  const res = await fetch("/api/investments", {
    credentials: "include",
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch investments");
  }
  
  const data = await res.json();
  return data.investments;
}

// Transactions API
export interface TransactionType {
  id: string;
  userId: string;
  investmentId: string | null;
  type: string;
  amount: string;
  status: string;
  description: string | null;
  createdAt: string;
}

export async function getUserTransactions(): Promise<TransactionType[]> {
  const res = await fetch("/api/transactions", {
    credentials: "include",
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch transactions");
  }
  
  const data = await res.json();
  return data.transactions;
}

export async function createWithdrawal(amount: number, description?: string): Promise<TransactionType> {
  const res = await fetch("/api/transactions/withdraw", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount, description }),
    credentials: "include",
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Failed to create withdrawal");
  }
  
  const data = await res.json();
  return data.transaction;
}

// React Query Hooks
export function useInvestments() {
  return useQuery({
    queryKey: ["investments"],
    queryFn: getUserInvestments,
  });
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: getUserTransactions,
  });
}

export function useCreateInvestment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ strategyId, amount }: { strategyId: string; amount: number }) =>
      createInvestment(strategyId, amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["investments"] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}

export function useCreateWithdrawal() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ amount, description }: { amount: number; description?: string }) =>
      createWithdrawal(amount, description),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });
}
