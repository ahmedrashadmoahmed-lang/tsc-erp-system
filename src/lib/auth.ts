import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d'; // صلاحية التوكن 7 أيام

export interface TokenPayload {
  userId: number;
  username: string;
  email: string;
  role: string;
  permissions: string[];
}

/**
 * تشفير كلمة المرور
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
}

/**
 * مقارنة كلمة المرور
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * إنشاء JWT Token
 */
export function generateToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

/**
 * التحقق من JWT Token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
}

/**
 * استخراج Token من الـ Request
 */
export function extractTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization');
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  
  // التحقق من الـ Cookie
  const cookie = request.cookies.get('token');
  if (cookie) {
    return cookie.value;
  }
  
  return null;
}

/**
 * التحقق من المستخدم من الـ Request
 */
export function getUserFromRequest(request: NextRequest): TokenPayload | null {
  const token = extractTokenFromRequest(request);
  
  if (!token) {
    return null;
  }
  
  return verifyToken(token);
}

/**
 * التحقق من الصلاحيات
 */
export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.includes(requiredPermission) || userPermissions.includes('*');
}

/**
 * التحقق من عدة صلاحيات (OR)
 */
export function hasAnyPermission(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.some(permission => hasPermission(userPermissions, permission));
}

/**
 * التحقق من عدة صلاحيات (AND)
 */
export function hasAllPermissions(userPermissions: string[], requiredPermissions: string[]): boolean {
  return requiredPermissions.every(permission => hasPermission(userPermissions, permission));
}

/**
 * التحقق من قوة كلمة المرور
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('كلمة المرور يجب أن تكون 8 أحرف على الأقل');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('يجب أن تحتوي على حرف كبير واحد على الأقل');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('يجب أن تحتوي على حرف صغير واحد على الأقل');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('يجب أن تحتوي على رقم واحد على الأقل');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('يجب أن تحتوي على رمز خاص واحد على الأقل');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * قائمة الصلاحيات الكاملة
 */
export const PERMISSIONS = {
  // العملاء
  CUSTOMERS_VIEW: 'customers.view',
  CUSTOMERS_CREATE: 'customers.create',
  CUSTOMERS_EDIT: 'customers.edit',
  CUSTOMERS_DELETE: 'customers.delete',
  
  // الموردين
  SUPPLIERS_VIEW: 'suppliers.view',
  SUPPLIERS_CREATE: 'suppliers.create',
  SUPPLIERS_EDIT: 'suppliers.edit',
  SUPPLIERS_DELETE: 'suppliers.delete',
  
  // المنتجات
  PRODUCTS_VIEW: 'products.view',
  PRODUCTS_CREATE: 'products.create',
  PRODUCTS_EDIT: 'products.edit',
  PRODUCTS_DELETE: 'products.delete',
  
  // الفرص
  OPPORTUNITIES_VIEW: 'opportunities.view',
  OPPORTUNITIES_CREATE: 'opportunities.create',
  OPPORTUNITIES_EDIT: 'opportunities.edit',
  OPPORTUNITIES_DELETE: 'opportunities.delete',
  
  // RFQ
  RFQ_VIEW: 'rfq.view',
  RFQ_CREATE: 'rfq.create',
  RFQ_EDIT: 'rfq.edit',
  RFQ_DELETE: 'rfq.delete',
  RFQ_SEND: 'rfq.send',
  
  // العروض
  QUOTATIONS_VIEW: 'quotations.view',
  QUOTATIONS_CREATE: 'quotations.create',
  QUOTATIONS_EDIT: 'quotations.edit',
  QUOTATIONS_DELETE: 'quotations.delete',
  QUOTATIONS_APPROVE: 'quotations.approve',
  
  // الفواتير
  INVOICES_VIEW: 'invoices.view',
  INVOICES_CREATE: 'invoices.create',
  INVOICES_EDIT: 'invoices.edit',
  INVOICES_DELETE: 'invoices.delete',
  INVOICES_APPROVE: 'invoices.approve',
  
  // المدفوعات
  PAYMENTS_VIEW: 'payments.view',
  PAYMENTS_CREATE: 'payments.create',
  PAYMENTS_EDIT: 'payments.edit',
  PAYMENTS_DELETE: 'payments.delete',
  PAYMENTS_APPROVE: 'payments.approve',
  
  // المحاسبة
  ACCOUNTING_VIEW: 'accounting.view',
  ACCOUNTING_ENTRIES: 'accounting.entries',
  ACCOUNTING_REPORTS: 'accounting.reports',
  ACCOUNTING_APPROVE: 'accounting.approve',
  
  // المناقصات
  TENDERS_VIEW: 'tenders.view',
  TENDERS_CREATE: 'tenders.create',
  TENDERS_EDIT: 'tenders.edit',
  TENDERS_DELETE: 'tenders.delete',
  
  // المخزون
  INVENTORY_VIEW: 'inventory.view',
  INVENTORY_MANAGE: 'inventory.manage',
  INVENTORY_TRANSFER: 'inventory.transfer',
  INVENTORY_ADJUST: 'inventory.adjust',
  
  // الموارد البشرية
  HR_VIEW: 'hr.view',
  HR_MANAGE: 'hr.manage',
  HR_PAYROLL: 'hr.payroll',
  
  // التقارير
  REPORTS_VIEW: 'reports.view',
  REPORTS_FINANCIAL: 'reports.financial',
  REPORTS_SALES: 'reports.sales',
  REPORTS_INVENTORY: 'reports.inventory',
  
  // الإعدادات
  SETTINGS_VIEW: 'settings.view',
  SETTINGS_EDIT: 'settings.edit',
  
  // المستخدمين
  USERS_VIEW: 'users.view',
  USERS_MANAGE: 'users.manage',
  
  // كل الصلاحيات (للمدير فقط)
  ALL: '*',
};

/**
 * صلاحيات كل دور
 */
export const ROLE_PERMISSIONS: Record<string, string[]> = {
  ADMIN: [PERMISSIONS.ALL],
  
  SALES_MANAGER: [
    PERMISSIONS.CUSTOMERS_VIEW,
    PERMISSIONS.CUSTOMERS_CREATE,
    PERMISSIONS.CUSTOMERS_EDIT,
    PERMISSIONS.OPPORTUNITIES_VIEW,
    PERMISSIONS.OPPORTUNITIES_CREATE,
    PERMISSIONS.OPPORTUNITIES_EDIT,
    PERMISSIONS.RFQ_VIEW,
    PERMISSIONS.RFQ_CREATE,
    PERMISSIONS.RFQ_EDIT,
    PERMISSIONS.RFQ_SEND,
    PERMISSIONS.QUOTATIONS_VIEW,
    PERMISSIONS.QUOTATIONS_CREATE,
    PERMISSIONS.QUOTATIONS_EDIT,
    PERMISSIONS.QUOTATIONS_APPROVE,
    PERMISSIONS.SUPPLIERS_VIEW,
    PERMISSIONS.PRODUCTS_VIEW,
    PERMISSIONS.REPORTS_VIEW,
    PERMISSIONS.REPORTS_SALES,
  ],
  
  SALES: [
    PERMISSIONS.CUSTOMERS_VIEW,
    PERMISSIONS.OPPORTUNITIES_VIEW,
    PERMISSIONS.OPPORTUNITIES_CREATE,
    PERMISSIONS.OPPORTUNITIES_EDIT,
    PERMISSIONS.RFQ_VIEW,
    PERMISSIONS.RFQ_CREATE,
    PERMISSIONS.QUOTATIONS_VIEW,
    PERMISSIONS.QUOTATIONS_CREATE,
    PERMISSIONS.SUPPLIERS_VIEW,
    PERMISSIONS.PRODUCTS_VIEW,
  ],
  
  ACCOUNTANT: [
    PERMISSIONS.CUSTOMERS_VIEW,
    PERMISSIONS.SUPPLIERS_VIEW,
    PERMISSIONS.INVOICES_VIEW,
    PERMISSIONS.INVOICES_CREATE,
    PERMISSIONS.INVOICES_EDIT,
    PERMISSIONS.PAYMENTS_VIEW,
    PERMISSIONS.PAYMENTS_CREATE,
    PERMISSIONS.PAYMENTS_EDIT,
    PERMISSIONS.ACCOUNTING_VIEW,
    PERMISSIONS.ACCOUNTING_ENTRIES,
    PERMISSIONS.ACCOUNTING_REPORTS,
    PERMISSIONS.REPORTS_VIEW,
    PERMISSIONS.REPORTS_FINANCIAL,
  ],
  
  WAREHOUSE: [
    PERMISSIONS.PRODUCTS_VIEW,
    PERMISSIONS.INVENTORY_VIEW,
    PERMISSIONS.INVENTORY_MANAGE,
    PERMISSIONS.INVENTORY_TRANSFER,
    PERMISSIONS.REPORTS_INVENTORY,
  ],
  
  PROCUREMENT: [
    PERMISSIONS.SUPPLIERS_VIEW,
    PERMISSIONS.SUPPLIERS_CREATE,
    PERMISSIONS.SUPPLIERS_EDIT,
    PERMISSIONS.PRODUCTS_VIEW,
    PERMISSIONS.RFQ_VIEW,
    PERMISSIONS.RFQ_CREATE,
    PERMISSIONS.TENDERS_VIEW,
  ],
  
  HR_MANAGER: [
    PERMISSIONS.HR_VIEW,
    PERMISSIONS.HR_MANAGE,
    PERMISSIONS.HR_PAYROLL,
    PERMISSIONS.REPORTS_VIEW,
  ],
  
  AUDITOR: [
    PERMISSIONS.CUSTOMERS_VIEW,
    PERMISSIONS.SUPPLIERS_VIEW,
    PERMISSIONS.PRODUCTS_VIEW,
    PERMISSIONS.INVOICES_VIEW,
    PERMISSIONS.PAYMENTS_VIEW,
    PERMISSIONS.ACCOUNTING_VIEW,
    PERMISSIONS.ACCOUNTING_REPORTS,
    PERMISSIONS.REPORTS_VIEW,
    PERMISSIONS.REPORTS_FINANCIAL,
    PERMISSIONS.REPORTS_SALES,
    PERMISSIONS.REPORTS_INVENTORY,
  ],
};
