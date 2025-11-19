// TSC ERP System - TypeScript Types
import { Decimal } from 'decimal.js';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  role: string;
  permissions: string[];
}

export interface DashboardStats {
  totalCustomers: number;
  totalSuppliers: number;
  totalInvoices: number;
  totalRevenue: Decimal;
}
