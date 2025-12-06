import { z } from 'zod'

// Customer Validation
export const customerSchema = z.object({
  customerCode: z.string().min(1, 'كود العميل مطلوب'),
  companyName: z.string().min(2, 'اسم الشركة مطلوب'),
  phone: z.string().min(10, 'رقم الهاتف غير صحيح'),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  taxNumber: z.string().optional(),
  address: z.string().optional(),
  creditLimit: z.number().min(0).default(0),
})

// Product Validation
export const productSchema = z.object({
  productCode: z.string().min(1, 'كود المنتج مطلوب'),
  productName: z.string().min(2, 'اسم المنتج مطلوب'),
  category: z.string().min(1, 'الفئة مطلوبة'),
  unit: z.string().default('قطعة'),
  costPrice: z.number().min(0, 'سعر التكلفة يجب أن يكون أكبر من صفر'),
  sellingPrice: z.number().min(0, 'سعر البيع يجب أن يكون أكبر من صفر'),
})

// Quotation Validation
export const quotationSchema = z.object({
  customerId: z.number().int().positive('العميل مطلوب'),
  quotationDate: z.date(),
  validUntil: z.date(),
  items: z.array(z.object({
    productId: z.number().int().positive().optional(),
    description: z.string().min(1, 'الوصف مطلوب'),
    quantity: z.number().positive('الكمية يجب أن تكون أكبر من صفر'),
    unitPrice: z.number().positive('السعر يجب أن يكون أكبر من صفر'),
  })).min(1, 'يجب إضافة عنصر واحد على الأقل'),
})

// Invoice Validation
export const invoiceSchema = z.object({
  customerId: z.number().int().positive('العميل مطلوب'),
  invoiceDate: z.date(),
  dueDate: z.date(),
  items: z.array(z.object({
    productId: z.number().int().positive().optional(),
    description: z.string().min(1, 'الوصف مطلوب'),
    quantity: z.number().positive('الكمية يجب أن تكون أكبر من صفر'),
    unitPrice: z.number().positive('السعر يجب أن يكون أكبر من صفر'),
  })).min(1, 'يجب إضافة عنصر واحد على الأقل'),
})

// Payment Validation
export const paymentSchema = z.object({
  paymentType: z.enum(['RECEIPT', 'PAYMENT']),
  amount: z.number().positive('المبلغ يجب أن يكون أكبر من صفر'),
  paymentMethod: z.enum(['CASH', 'CHEQUE', 'BANK_TRANSFER', 'CARD', 'MOBILE_WALLET']),
  paymentDate: z.date(),
  customerId: z.number().int().positive().optional(),
  supplierId: z.number().int().positive().optional(),
  notes: z.string().optional(),
})

// User Validation
export const userSchema = z.object({
  username: z.string().min(3, 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل'),
  email: z.string().email('البريد الإلكتروني غير صحيح'),
  password: z.string().min(8, 'كلمة المرور يجب أن تكون 8 أحرف على الأقل'),
  fullName: z.string().min(2, 'الاسم الكامل مطلوب'),
  role: z.enum(['ADMIN', 'SALES_MANAGER', 'SALES', 'ACCOUNTANT', 'WAREHOUSE', 'PROCUREMENT', 'HR_MANAGER', 'AUDITOR']),
})

export type CustomerInput = z.infer<typeof customerSchema>
export type ProductInput = z.infer<typeof productSchema>
export type QuotationInput = z.infer<typeof quotationSchema>
export type InvoiceInput = z.infer<typeof invoiceSchema>
export type PaymentInput = z.infer<typeof paymentSchema>
export type UserInput = z.infer<typeof userSchema>
