const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 بدء إضافة البيانات التجريبية...');

  // حذف البيانات القديمة
  console.log('🗑️  حذف البيانات القديمة...');
  await prisma.user.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.supplier.deleteMany();
  await prisma.product.deleteMany();

  // إنشاء المستخدم الرئيسي
  console.log('👤 إنشاء المستخدم الرئيسي...');
  const hashedPassword = await bcrypt.hash('Admin@123', 12);
  
  const admin = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@tsc-erp.com',
      password: hashedPassword,
      fullName: 'مدير النظام',
      phone: '01000000000',
      role: 'ADMIN',
      isActive: true,
    },
  });

  // إنشاء مستخدمين إضافيين
  const salesManager = await prisma.user.create({
    data: {
      username: 'sales.manager',
      email: 'sales.manager@tsc-erp.com',
      password: hashedPassword,
      fullName: 'أحمد محمد - مدير المبيعات',
      phone: '01111111111',
      role: 'SALES_MANAGER',
      isActive: true,
    },
  });

  const accountant = await prisma.user.create({
    data: {
      username: 'accountant',
      email: 'accountant@tsc-erp.com',
      password: hashedPassword,
      fullName: 'فاطمة علي - محاسب',
      phone: '01222222222',
      role: 'ACCOUNTANT',
      isActive: true,
    },
  });

  console.log('✅ تم إنشاء المستخدمين');

  // إنشاء عملاء تجريبيين
  console.log('👥 إنشاء العملاء...');
  
  const customers = await Promise.all([
    prisma.customer.create({
      data: {
        customerCode: 'C-001',
        companyName: 'شركة النيل للتجارة',
        contactPerson: 'محمد أحمد',
        email: 'info@nile-trading.com',
        phone: '0235551234',
        mobile: '01001234567',
        taxNumber: '123456789',
        address: '10 شارع التحرير',
        city: 'القاهرة',
        governorate: 'القاهرة',
        paymentTerms: 30,
        creditLimit: 100000,
        category: 'تجزئة',
      },
    }),
    prisma.customer.create({
      data: {
        customerCode: 'C-002',
        companyName: 'مؤسسة الهرم الحديثة',
        contactPerson: 'سارة محمود',
        email: 'contact@haram-modern.com',
        phone: '0235559876',
        mobile: '01109876543',
        taxNumber: '987654321',
        address: '25 شارع الهرم',
        city: 'الجيزة',
        governorate: 'الجيزة',
        paymentTerms: 60,
        creditLimit: 250000,
        category: 'جملة',
      },
    }),
    prisma.customer.create({
      data: {
        customerCode: 'C-003',
        companyName: 'شركة الإسكندرية للمقاولات',
        contactPerson: 'أحمد حسن',
        email: 'info@alex-contracting.com',
        phone: '0335556789',
        mobile: '01206789012',
        taxNumber: '456789123',
        address: '15 شارع الكورنيش',
        city: 'الإسكندرية',
        governorate: 'الإسكندرية',
        paymentTerms: 90,
        creditLimit: 500000,
        category: 'حكومي',
      },
    }),
  ]);

  console.log('✅ تم إنشاء 3 عملاء');

  // إنشاء موردين
  console.log('🏢 إنشاء الموردين...');
  
  const suppliers = await Promise.all([
    prisma.supplier.create({
      data: {
        supplierCode: 'S-001',
        companyName: 'شركة الشرق الأوسط للإلكترونيات',
        contactPerson: 'خالد عبدالله',
        email: 'sales@mideast-electronics.com',
        phone: '0235557890',
        mobile: '01015678901',
        taxNumber: '789123456',
        categories: ['إلكترونيات', 'كمبيوتر'],
        address: '30 شارع رمسيس',
        city: 'القاهرة',
        governorate: 'القاهرة',
        paymentTerms: 30,
        rating: 4.5,
      },
    }),
    prisma.supplier.create({
      data: {
        supplierCode: 'S-002',
        companyName: 'مؤسسة الدلتا للمستلزمات',
        contactPerson: 'عمرو سعيد',
        email: 'info@delta-supplies.com',
        phone: '0405558765',
        mobile: '01128765432',
        taxNumber: '654321987',
        categories: ['مكتبية', 'قرطاسية'],
        address: '8 شارع الجيش',
        city: 'طنطا',
        governorate: 'الغربية',
        paymentTerms: 45,
        rating: 4.2,
      },
    }),
  ]);

  console.log('✅ تم إنشاء 2 موردين');

  // إنشاء منتجات
  console.log('📦 إنشاء المنتجات...');
  
  const products = await Promise.all([
    prisma.product.create({
      data: {
        productCode: 'P-001',
        productName: 'لابتوب ديل Latitude 5520',
        description: 'لابتوب ديل للأعمال - Core i7 - 16GB RAM - 512GB SSD',
        category: 'كمبيوتر',
        brand: 'Dell',
        unit: 'قطعة',
        barcode: '1234567890123',
        costPrice: 18000,
        sellingPrice: 22000,
        minStockLevel: 5,
        reorderPoint: 10,
      },
    }),
    prisma.product.create({
      data: {
        productCode: 'P-002',
        productName: 'طابعة HP LaserJet Pro M404dn',
        description: 'طابعة ليزر أحادية - سرعة 38 صفحة/دقيقة',
        category: 'طابعات',
        brand: 'HP',
        unit: 'قطعة',
        barcode: '2345678901234',
        costPrice: 4500,
        sellingPrice: 5800,
        minStockLevel: 3,
        reorderPoint: 5,
      },
    }),
    prisma.product.create({
      data: {
        productCode: 'P-003',
        productName: 'كاميرا مراقبة Hikvision 5MP',
        description: 'كاميرا مراقبة داخلية - 5 ميجابكسل - رؤية ليلية',
        category: 'أمن',
        brand: 'Hikvision',
        unit: 'قطعة',
        barcode: '3456789012345',
        costPrice: 850,
        sellingPrice: 1200,
        minStockLevel: 10,
        reorderPoint: 15,
      },
    }),
    prisma.product.create({
      data: {
        productCode: 'P-004',
        productName: 'ورق A4 - 80 جرام',
        description: 'رزمة ورق A4 أبيض - 500 ورقة',
        category: 'قرطاسية',
        brand: 'PaperOne',
        unit: 'رزمة',
        barcode: '4567890123456',
        costPrice: 85,
        sellingPrice: 120,
        minStockLevel: 50,
        reorderPoint: 100,
      },
    }),
    prisma.product.create({
      data: {
        productCode: 'P-005',
        productName: 'شاشة Dell 27 بوصة',
        description: 'شاشة Dell P2722H - 27 بوصة - Full HD - IPS',
        category: 'شاشات',
        brand: 'Dell',
        unit: 'قطعة',
        barcode: '5678901234567',
        costPrice: 3200,
        sellingPrice: 4100,
        minStockLevel: 5,
        reorderPoint: 8,
      },
    }),
  ]);

  console.log('✅ تم إنشاء 5 منتجات');

  console.log('\n✅ تم الانتهاء من إضافة البيانات التجريبية بنجاح!');
  console.log('\n📝 بيانات تسجيل الدخول:');
  console.log('   اسم المستخدم: admin');
  console.log('   كلمة المرور: Admin@123');
  console.log('\n🎉 يمكنك الآن تشغيل المشروع: npm run dev');
}

main()
  .catch((e) => {
    console.error('❌ خطأ في إضافة البيانات:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
