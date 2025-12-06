<div align="center">

# 🚀 TSC ERP System

### نظام إدارة موارد المؤسسات الشامل
**ERP · CRM · Accounting · Egyptian Business**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-316192?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

**[التوثيق](README.md)** • **[دليل التثبيت](SETUP.md)** • **[البدء السريع](START_HERE.md)** • **[حالة المشروع](PROJECT_STATUS.md)**

</div>

---

## 📋 جدول المحتويات

- [نظرة عامة](#-نظرة-عامة)
- [المميزات](#-المميزات)
- [التقنيات](#️-التقنيات)
- [البدء السريع](#-البدء-السريع)
- [قاعدة البيانات](#-قاعدة-البيانات)
- [الصلاحيات](#-الصلاحيات)
- [المتطلبات المصرية](#-المتطلبات-المصرية)
- [المساهمة](#-المساهمة)
- [الترخيص](#-الترخيص)

---

## 🎯 نظرة عامة

**TSC ERP System** هو نظام إدارة موارد مؤسسات (ERP) شامل ومتكامل مصمم خصيصاً للشركات المصرية. يجمع النظام بين إدارة علاقات العملاء (CRM)، المحاسبة، المخازن، الموارد البشرية، والمناقصات في منصة واحدة قوية وسهلة الاستخدام.

### ✨ لماذا TSC ERP؟

- ✅ **مصري 100%** - متوافق تماماً مع القوانين والضرائب المصرية
- ✅ **شامل** - 50+ جدول قاعدة بيانات تغطي كل جوانب العمل
- ✅ **احترافي** - مبني بأحدث التقنيات (Next.js 14, TypeScript, Prisma)
- ✅ **آمن** - نظام مصادقة وصلاحيات متقدم (JWT + bcrypt)
- ✅ **موثّق** - توثيق كامل بالعربية

---

## 🌟 المميزات

<table>
<tr>
<td width="50%">

### 💼 إدارة الأعمال
- ✅ إدارة العملاء (CRM)
- ✅ إدارة الموردين
- ✅ إدارة المنتجات
- ✅ الفرص البيعية
- ✅ نظام RFQ ثوري

</td>
<td width="50%">

### 📊 المحاسبة
- ✅ شجرة حسابات شاملة
- ✅ قيود محاسبية تلقائية
- ✅ ميزان المراجعة
- ✅ القوائم المالية
- ✅ تقارير الضرائب

</td>
</tr>
<tr>
<td width="50%">

### 🏛️ المناقصات
- ✅ إدارة المناقصات
- ✅ التأمين الابتدائي
- ✅ التأمين النهائي
- ✅ خطابات الضمان

</td>
<td width="50%">

### 📦 المخزون
- ✅ مخازن متعددة
- ✅ مواقع تخزينية
- ✅ حركات المخزون
- ✅ الجرد

</td>
</tr>
</table>

<details>
<summary><b>📱 المزيد من المميزات...</b></summary>

### 💵 الخزينة
- إدارة البنوك والحسابات
- إدارة الصندوق
- الشيكات الواردة والصادرة
- التدفقات النقدية

### 👥 الموارد البشرية
- إدارة الموظفين
- حساب الرواتب
- التأمينات الاجتماعية
- ضريبة المرتبات

### 🏢 الأصول الثابتة
- تسجيل الأصول
- حساب الاستهلاك (3 طرق)
- التصرف في الأصول

### ✅ نظام الموافقات
- مسارات موافقة مرنة
- موافقات متعددة المستويات
- تتبع كامل

</details>

---

## 🛠️ التقنيات

### Frontend
```
Next.js 14      │ React Framework
TypeScript      │ Type Safety
Tailwind CSS    │ Styling
shadcn/ui       │ UI Components
```

### Backend
```
Next.js API     │ REST APIs
Prisma          │ ORM
PostgreSQL      │ Database
```

### Authentication
```
JWT             │ Token-based Auth
bcryptjs        │ Password Hashing
RBAC            │ Role-based Access
```

### Utilities
```
Decimal.js      │ Financial Math
date-fns        │ Date Handling
Zod             │ Validation
```

---

## ⚡ البدء السريع

### المتطلبات

- Node.js 18+
- PostgreSQL 14+
- npm أو yarn

### التثبيت

```bash
# 1. Clone المشروع
git clone https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system.git
cd tsc-erp-system

# 2. تثبيت المكتبات
npm install

# 3. إعداد البيئة
cp .env.example .env

# ⚠️ مهم جداً: قم بتعديل ملف .env وتغيير القيم التالية:
# - DATABASE_URL: رابط قاعدة البيانات الخاصة بك
# - NEXTAUTH_SECRET: مفتاح سري قوي (استخدم: openssl rand -base64 32)
# - JWT_SECRET: مفتاح سري مختلف وقوي (استخدم: openssl rand -base64 32)

# 4. توليد Prisma Client
npx prisma generate

# 5. إنشاء قاعدة البيانات
npx prisma db push

# 6. إضافة بيانات تجريبية (اختياري)
npx prisma db seed

# 7. تشغيل المشروع
npm run dev
```

### ⚠️ ملاحظات أمنية مهمة

1. **لا تستخدم المفاتيح الافتراضية في الإنتاج!**
2. قم بتوليد مفاتيح قوية باستخدام:
   ```bash
   openssl rand -base64 32
   ```
3. احتفظ بملف `.env` بعيداً عن Git (موجود في `.gitignore`)
4. استخدم HTTPS في الإنتاج
5. قم بتحديث المكتبات بانتظام:
   ```bash
   npm update
   npm audit fix
   ```

### تسجيل الدخول

افتح http://localhost:3000

```
اسم المستخدم: admin
كلمة المرور: Admin@123
```

**⚠️ هام:** غيّر كلمة المرور الافتراضية فوراً بعد أول تسجيل دخول!

---

## 🗄️ قاعدة البيانات

### الإحصائيات

```
📊 إجمالي الجداول: 50+
👥 جداول المستخدمين: 2
💼 جداول الأعمال: 10
📊 جداول المحاسبة: 3
🏛️ جداول المناقصات: 3
💰 جداول الخزينة: 3
📦 جداول المخزون: 5
👔 جداول الموارد البشرية: 2
```

### Schema Overview

<details>
<summary><b>عرض Schema الكامل</b></summary>

```prisma
// نموذج مبسط - راجع prisma/schema.prisma للكود الكامل

model User {
  id            Int       @id @default(autoincrement())
  username      String    @unique
  email         String    @unique
  password      String
  role          UserRole
  // ... المزيد
}

model Customer {
  id              Int     @id @default(autoincrement())
  customerCode    String  @unique
  companyName     String
  taxNumber       String?
  // ... المزيد
}

model JournalEntry {
  id              Int     @id @default(autoincrement())
  entryNumber     String  @unique
  totalDebit      Decimal
  totalCredit     Decimal
  // ... المزيد
}

// ... 50+ جدول آخر
```

</details>

---

## 🔐 الصلاحيات

### الأدوار (8 Roles)

| الدور | الوصف | الصلاحيات |
|-------|-------|-----------|
| **ADMIN** | مدير النظام | كل الصلاحيات ⭐ |
| **SALES_MANAGER** | مدير المبيعات | المبيعات + العملاء + التقارير |
| **SALES** | موظف مبيعات | المبيعات الأساسية |
| **ACCOUNTANT** | محاسب | المحاسبة + المالية |
| **WAREHOUSE** | أمين مخزن | المخزون + المنتجات |
| **PROCUREMENT** | مشتريات | الموردين + الشراء |
| **HR_MANAGER** | مدير موارد بشرية | الموظفين + الرواتب |
| **AUDITOR** | مراجع | عرض فقط (كل الأقسام) |

### الصلاحيات (40+)

```typescript
// مثال على بعض الصلاحيات
PERMISSIONS = {
  CUSTOMERS_VIEW, CUSTOMERS_CREATE, CUSTOMERS_EDIT,
  INVOICES_VIEW, INVOICES_CREATE, INVOICES_APPROVE,
  ACCOUNTING_ENTRIES, ACCOUNTING_REPORTS,
  // ... 40+ صلاحية
}
```

---

## 🇪🇬 المتطلبات المصرية

### الضرائب
```typescript
VAT_RATE = 14%           // ضريبة القيمة المضافة
PROFIT_TAX_RATE = 1%     // ضريبة الأرباح
CURRENCY = "EGP"         // الجنيه المصري
```

### البيانات المحلية
- ✅ 27 محافظة مصرية
- ✅ 15+ بنك مصري
- ✅ رقم الهاتف: +20
- ✅ الرقم الضريبي: 9 أرقام
- ✅ واجهة عربية RTL كاملة

### الحسابات الدقيقة
```typescript
// استخدام Decimal.js لحسابات مالية دقيقة
calculateVAT(1000)              // 140.00 ج.م
calculateProfitTax(1000)        // 10.00 ج.م
calculateTotalWithTaxes(1000)   // 1,150.00 ج.م
```

---

## 📊 Screenshots

<details>
<summary><b>عرض Screenshots</b></summary>

### Login Page
![Login](docs/screenshots/login.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Customers
![Customers](docs/screenshots/customers.png)

</details>

---

## 📖 التوثيق

| الملف | الوصف |
|-------|-------|
| [README.md](README.md) | الوثائق الكاملة |
| [SETUP.md](SETUP.md) | دليل التثبيت التفصيلي |
| [START_HERE.md](START_HERE.md) | البدء السريع (5 دقائق) |
| [PROJECT_STATUS.md](PROJECT_STATUS.md) | حالة المشروع والخطط |
| [DEPLOY_TO_GITHUB.md](DEPLOY_TO_GITHUB.md) | دليل النشر على GitHub |

---

## 🗺️ Roadmap

### ✅ Phase 1: Foundation (مكتمل)
- [x] Database Schema (50+ tables)
- [x] Authentication & Authorization
- [x] Basic Frontend
- [x] Documentation

### 🚧 Phase 2: Core Business (قيد التطوير)
- [ ] CRUD APIs
- [ ] Customers & Suppliers Pages
- [ ] RFQ System
- [ ] Invoices & Payments

### 📋 Phase 3: Accounting (مخطط)
- [ ] Chart of Accounts UI
- [ ] Journal Entries
- [ ] Financial Reports

### 📋 Phase 4: Advanced (مخطط)
- [ ] Tenders Management
- [ ] Inventory
- [ ] HR & Payroll
- [ ] Analytics & BI

---

## 🤝 المساهمة

نرحب بالمساهمات! إليك كيفية المساهمة:

1. Fork المشروع
2. إنشاء Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m '✨ Add AmazingFeature'`)
4. Push للـ Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

### Commit Message Standards

```
✨ feat: ميزة جديدة
🐛 fix: إصلاح خطأ
📝 docs: تحديث التوثيق
💄 style: تحسين UI
♻️ refactor: إعادة هيكلة
⚡ perf: تحسين الأداء
✅ test: إضافة اختبارات
```

---

## 📜 الترخيص

هذا المشروع محمي بحقوق الملكية. جميع الحقوق محفوظة © 2025 TSC Company

---

## 📞 التواصل

- **GitHub:** [@ahmedrashadmoahmed-lang](https://github.com/ahmedrashadmoahmed-lang)
- **Project Link:** [tsc-erp-system](https://github.com/ahmedrashadmoahmed-lang/tsc-erp-system)

---

## 🙏 شكر وتقدير

بُني باستخدام:
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

---

## ⭐ Star History

إذا أعجبك المشروع، لا تنسَ إعطاءه ⭐!

[![Star History Chart](https://api.star-history.com/svg?repos=ahmedrashadmoahmed-lang/tsc-erp-system&type=Date)](https://star-history.com/#ahmedrashadmoahmed-lang/tsc-erp-system&Date)

---

<div align="center">

**صُنع بـ ❤️ في مصر**

[⬆ العودة للأعلى](#-tsc-erp-system)

</div>
