import Decimal from 'decimal.js';

/**
 * الإعدادات المصرية الافتراضية
 */
export const EGYPTIAN_SETTINGS = {
  VAT_RATE: 14, // ضريبة القيمة المضافة
  PROFIT_TAX_RATE: 1, // ضريبة الأرباح
  CURRENCY: 'EGP',
  CURRENCY_SYMBOL: 'ج.م',
  LOCALE: 'ar-EG',
};

/**
 * المحافظات المصرية
 */
export const EGYPTIAN_GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الدقهلية',
  'البحر الأحمر',
  'البحيرة',
  'الفيوم',
  'الغربية',
  'الإسماعيلية',
  'المنوفية',
  'المنيا',
  'القليوبية',
  'الوادي الجديد',
  'الشرقية',
  'السويس',
  'أسوان',
  'أسيوط',
  'بني سويف',
  'بورسعيد',
  'دمياط',
  'الأقصر',
  'قنا',
  'كفر الشيخ',
  'مطروح',
  'شمال سيناء',
  'جنوب سيناء',
  'سوهاج',
];

/**
 * البنوك المصرية
 */
export const EGYPTIAN_BANKS = [
  'البنك الأهلي المصري',
  'بنك مصر',
  'بنك القاهرة',
  'البنك التجاري الدولي CIB',
  'بنك الإسكندرية',
  'بنك فيصل الإسلامي',
  'البنك العربي الأفريقي',
  'بنك قناة السويس',
  'بنك التعمير والإسكان',
  'بنك الشركة المصرفية العربية',
  'بنك كريدي أجريكول',
  'بنك عودة',
  'بنك HSBC مصر',
  'بنك أبو ظبي الإسلامي',
  'البنك المصري الخليجي',
];

/**
 * حساب ضريبة القيمة المضافة
 */
export function calculateVAT(amount: number | Decimal, rate: number = EGYPTIAN_SETTINGS.VAT_RATE): Decimal {
  const decimalAmount = new Decimal(amount);
  const decimalRate = new Decimal(rate).dividedBy(100);
  return decimalAmount.times(decimalRate);
}

/**
 * حساب ضريبة الأرباح
 */
export function calculateProfitTax(amount: number | Decimal, rate: number = EGYPTIAN_SETTINGS.PROFIT_TAX_RATE): Decimal {
  const decimalAmount = new Decimal(amount);
  const decimalRate = new Decimal(rate).dividedBy(100);
  return decimalAmount.times(decimalRate);
}

/**
 * حساب الإجمالي مع الضرائب
 */
export function calculateTotalWithTaxes(subtotal: number | Decimal): {
  subtotal: Decimal;
  vatAmount: Decimal;
  profitTaxAmount: Decimal;
  totalAmount: Decimal;
} {
  const decimalSubtotal = new Decimal(subtotal);
  const vatAmount = calculateVAT(decimalSubtotal);
  const profitTaxAmount = calculateProfitTax(decimalSubtotal);
  const totalAmount = decimalSubtotal.plus(vatAmount).plus(profitTaxAmount);

  return {
    subtotal: decimalSubtotal,
    vatAmount,
    profitTaxAmount,
    totalAmount,
  };
}

/**
 * تنسيق الأرقام بالعربية
 */
export function formatCurrency(amount: number | Decimal): string {
  const decimalAmount = new Decimal(amount);
  const formatted = decimalAmount.toNumber().toLocaleString('ar-EG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatted} ${EGYPTIAN_SETTINGS.CURRENCY_SYMBOL}`;
}

/**
 * تنسيق التاريخ بالعربية
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * تنسيق رقم الهاتف المصري
 */
export function formatEgyptianPhone(phone: string): string {
  // إزالة كل شيء ما عدا الأرقام
  const cleaned = phone.replace(/\D/g, '');
  
  // إذا بدأ بـ 20، إزالته
  let number = cleaned.startsWith('20') ? cleaned.substring(2) : cleaned;
  
  // إضافة 0 في البداية إذا لم يكن موجود
  if (!number.startsWith('0')) {
    number = '0' + number;
  }
  
  return number;
}

/**
 * التحقق من رقم الهاتف المصري
 */
export function isValidEgyptianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  // يجب أن يبدأ بـ 01 ويكون 11 رقم أو يبدأ بـ +2001 ويكون 13 رقم
  return /^01[0125]\d{8}$/.test(cleaned) || /^2001[0125]\d{8}$/.test(cleaned);
}

/**
 * التحقق من الرقم الضريبي المصري
 */
export function isValidEgyptianTaxNumber(taxNumber: string): boolean {
  // الرقم الضريبي المصري يتكون من 9 أرقام
  return /^\d{9}$/.test(taxNumber);
}

/**
 * حساب هامش الربح
 */
export function calculateMargin(cost: number | Decimal, price: number | Decimal): {
  marginAmount: Decimal;
  marginPercentage: Decimal;
} {
  const decimalCost = new Decimal(cost);
  const decimalPrice = new Decimal(price);
  const marginAmount = decimalPrice.minus(decimalCost);
  const marginPercentage = marginAmount.dividedBy(decimalCost).times(100);

  return {
    marginAmount,
    marginPercentage,
  };
}

/**
 * حساب السعر من التكلفة وهامش الربح
 */
export function calculatePriceFromMargin(cost: number | Decimal, marginPercent: number | Decimal): Decimal {
  const decimalCost = new Decimal(cost);
  const decimalMargin = new Decimal(marginPercent).dividedBy(100);
  return decimalCost.times(new Decimal(1).plus(decimalMargin));
}

/**
 * تنسيق الأرقام الكبيرة
 */
export function formatLargeNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)} مليون`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)} ألف`;
  }
  return num.toString();
}

/**
 * تحويل التاريخ الميلادي للهجري (تقريبي)
 */
export function gregorianToHijri(date: Date): string {
  // هذا حساب تقريبي - للدقة استخدم مكتبة متخصصة
  const gregorianYear = date.getFullYear();
  const hijriYear = Math.floor((gregorianYear - 622) * 1.03);
  return `${hijriYear} هـ`;
}
