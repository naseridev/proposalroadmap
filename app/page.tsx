"use client";

import React, { useState } from 'react';
import {
  CheckCircle2,
  Lock,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Search,
  Map,
  GraduationCap,
  Sparkles,
  Users,
  FileText,
  ShieldCheck,
  List,
  PenTool,
  Compass,
  UserCheck,
  Target
} from 'lucide-react';

const ProposalRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const roadmapData = [
    {
      id: 1,
      title: 'گام اول: انتخاب هوشمندانه موضوع',
      subtitle: 'استراتژی گزینش مسئله و درک ماهیت پژوهش',
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      color: 'bg-amber-100',
      summary: 'تدوین استراتژی انتخاب موضوع و تحلیل نیازمندی‌ها',
      content: {
        description: 'پژوهش علمی، فرآیندی نظام‌مند برای کشف حقایق یا حل چالش‌های نوظهور است. حیاتی‌ترین تصمیم در این مرحله، انتخاب موضوعی است که علاوه بر غنای علمی، با محدودیت‌های زمانی و منابع در دسترس همخوانی داشته باشد.',
        sections: [
          {
            title: 'مدل ۵-۱-۱ برای شناسایی شکاف‌های پژوهشی:',
            items: [
              '۱. شناسایی: استخراج ۵ حوزه کلیدی و جریان‌ساز (Hot Topics) در گرایش تخصصی خود.',
              '۲. واکاوی: مطالعه دقیق یک «مقاله مروری جامع» (Systematic Review) منتشر شده در دو سال اخیر برای هر حوزه.',
              '۳. غربالگری: اولویت‌بندی موضوعات بر اساس سه شاخص «امکان‌سنجی زمانی»، «علاقه پژوهشی» و «ارزش افزوده علمی».'
            ]
          },
          {
            title: 'تعیین چارچوب استدلالی:',
            items: [
              'رویکرد استقرایی (Inductive): تحلیل داده‌های جزئی برای دستیابی به یک نظریه جامع.',
              'رویکرد استنتاجی (Deductive): آزمون نظریات کلی در بسترهای خاص و عملیاتی.'
            ]
          }
        ],
        keyPoint: 'موضوع تحقیق باید «پاسخی به یک خلاء علمی» باشد. تمرکز خود را از توصیف صرف به سمت حل مسئله (Problem Solving) معطوف کنید.'
      }
    },
    {
      id: 2,
      title: 'گام دوم: تشکیل تیم راهبری',
      subtitle: 'تعیین ارکان هدایت پژوهش (راهنما و مشاور)',
      icon: <UserCheck className="w-6 h-6 text-stone-700" />,
      color: 'bg-stone-200',
      summary: 'انتخاب هوشمندانه اعضای پنل نظارت',
      content: {
        description: 'تیم راهبری، ستون فقرات موفقیت شماست. معیار انتخاب باید از «شهرت صرف» به سمت «تطابق تخصصی» و «نرخ پاسخگویی و هدایت‌گری» تغییر یابد.',
        sections: [
          {
            title: 'شاخص‌های انتخاب استاد راهنما:',
            items: [
              'قرابت تخصصی: بررسی سوابق انتشارات اخیر استاد در حوزه مدنظر.',
              'ظرفیت هدایت‌گری: ارزیابی زمان اختصاصی برای جلسات بازخورد و اصلاح.',
              'تعامل حرفه‌ای: توانایی برقراری ارتباط سازنده و پیش‌برنده.'
            ]
          },
          {
            title: 'جایگاه استراتژیک استاد مشاور:',
            items: [
              'در مقطع دکتری: حضور مشاور برای غنای ابعاد نظری و متدولوژیک الزامی است.',
              'رویکرد بین‌رشته‌ای: در صورت نیاز به دانش فنی مازاد بر تخصص راهنما، بهره‌گیری از مشاور توصیه می‌شود.'
            ]
          }
        ],
        keyPoint: 'پیش از نهایی‌سازی ایده، تاییدیه مفهومی (Concept Approval) را از استاد راهنما دریافت کنید تا از انحراف مسیر پیشگیری شود.'
      }
    },
    {
      id: 3,
      title: 'گام سوم: تبیین قلمرو پژوهش (Scope)',
      subtitle: 'تحدید موضوع و عملیاتی‌سازی اهداف',
      icon: <Target className="w-6 h-6 text-orange-700" />,
      color: 'bg-orange-100',
      summary: 'تعیین مرزهای اجرایی و محدودیت‌های تحقیق',
      content: {
        description: 'فقدان مرزبندی دقیق در پژوهش، منجر به اتلاف منابع و پراکندگی ذهنی می‌شود. تبیین قلمرو (Scoping) یعنی مشخص کردن دقیق آن‌چه در دستور کار است و مهم‌تر از آن، مواردی که از حیطه تحقیق خارج هستند.',
        sections: [
          {
            title: 'متدولوژی قیفی در محدودسازی:',
            items: [
              'حوزه کلان: مثلاً «امنیت در رایانش ابری».',
              'تمرکز موضوعی: «پروتکل‌های احراز هویت».',
              'تخصصی‌سازی: «بهینه‌سازی مصرف انرژی در احراز هویت».',
              'قلمرو نهایی: «ارائه پروتکل احراز هویت سبک‌وزن جهت ارتقای امنیت در اینترنت اشیا بر بستر ابر».'
            ]
          },
          {
            title: 'متغیرهای محدودکننده:',
            items: [
              'بازه زمانی: انطباق حجم کار با تقویم آموزشی.',
              'زیرساخت فنی: بررسی دسترسی به تجهیزات آزمایشگاهی یا توان پردازشی.',
              'دسترسی به داده: اطمینان از اعتبار و در دسترس بودن مجموعه‌داده‌ها (Datasets).'
            ]
          }
        ],
        keyPoint: 'اعتبار علمی در «عمق» است، نه در «عرض». قلمرو خود را محدود اما تحلیل‌های خود را عمیق طراحی کنید.'
      }
    },
    {
      id: 4,
      title: 'گام چهارم: واکاوی پیشینه تحقیق',
      subtitle: 'تحلیل ادبیات موضوع و استخراج شکاف پژوهشی',
      icon: <Search className="w-6 h-6 text-yellow-600" />,
      color: 'bg-yellow-100',
      summary: 'بررسی نظام‌مند متون و انتخاب مقاله مرجع',
      content: {
        description: 'مرور ادبیات (Literature Review) به معنای بهره‌گیری از دستاوردهای پیشین برای ترسیم افق‌های جدید است. هدف از این مرحله، صرفاً مطالعه نیست، بلکه تحلیل نقادانه روش‌ها برای یافتن نقاط بهبود است.',
        sections: [
          {
            title: 'تکنیک مطالعه هدفمند (سه مرحله‌ای):',
            items: [
              'سطح استراتژیک: مطالعه مقالات مرور سیستماتیک جهت درک دسته‌بندی‌های کلی.',
              'سطح تاکتیکی: تمرکز بر مقالات پژوهشی (Original Research) در بازه زمانی ۳ سال اخیر.',
              'سطح تحلیلی: تدوین جدول مقایسه‌ای (Comparison Table) برای شناسایی نقاط ضعف راهکارهای موجود.'
            ]
          },
          {
            title: 'تعیین مقاله مرجع (Base Paper):',
            items: [
              'انتخاب معتبرترین مطالعه‌ای که بیشترین قرابت را با ایده پیشنهادی شما دارد.',
              'این مقاله به عنوان معیار سنجش (Benchmark) برای مقایسه نتایج نهایی عمل خواهد کرد.'
            ]
          }
        ],
        keyPoint: 'برونداد نهایی این گام، شناسایی GAP (شکاف) است؛ یعنی نقطه‌ای که راهکارهای فعلی در آن با چالش مواجه‌اند.'
      }
    },
    {
      id: 5,
      title: 'گام پنجم: طراحی معماری نوآوری',
      subtitle: 'تدوین متدولوژی پیشنهادی (Proposed Method)',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-100',
      summary: 'ارائه راهکار خلاقانه و مدل‌سازی اولیه',
      content: {
        description: 'در این بخش، ارزش افزوده پژوهش شما متبلور می‌شود. نوآوری علمی لزوماً ابداع یک موجودیت جدید نیست، بلکه می‌تواند ارتقای بهره‌وری در مدل‌های مستقر باشد.',
        sections: [
          {
            title: 'الگوهای رایج در نوآوری علمی:',
            items: [
              'بهینه‌سازی (Optimization): ارتقای شاخص‌های کارایی، دقت یا سرعت.',
              'مدل ترکیبی (Hybridization): تلفیق دو یا چند رویکرد برای پوشش نقاط ضعف یکدیگر.',
              'توسعه کاربرد: پیاده‌سازی یک متدولوژی اثبات شده در یک حوزه کاربردی نوین.'
            ]
          },
          {
            title: 'مدل‌سازی بصری:',
            items: [
              'رسم فلوچارت یا معماری سیستم (System Architecture).',
              'تبیین وجوه تمایز الگوریتم پیشنهادی در مقایسه با مدل مرجع.'
            ]
          }
        ],
        keyPoint: 'نوآوری باید «کمی‌سازی» شود. اثبات برتری روش شما نیازمند ارائه شواهد تجربی و آماری است.'
      }
    },
    {
      id: 6,
      title: 'گام ششم: نگارش تخصصی پروپوزال',
      subtitle: 'مستندسازی علمی (تمایز فرضیه و پیش‌فرض)',
      icon: <PenTool className="w-6 h-6 text-green-600" />,
      color: 'bg-green-100',
      summary: 'تبدیل طرح ذهنی به سند رسمی پژوهشی',
      content: {
        description: 'نگارش پروپوزال، فرآیند متقاعدسازی داوران درباره ضرورت و اعتبار طرح شماست. دقت در اصطلاحات فنی، به‌ویژه تمایز بین گزاره‌های تحقیق، الزامی است.',
        sections: [
          {
            title: 'تمایز ساختاری فرضیه و پیش‌فرض:',
            items: [
              'فرضیه (Hypothesis): یک گزاره صریح و آزمون‌پذیر درباره رابطه متغیرها که در انتهای پژوهش تایید یا رد می‌شود.',
              'پیش‌فرض (Assumption): حقایق یا شرایطی که مبنای حرکت پژوهش هستند و صحت آن‌ها بدون آزمون پذیرفته می‌شود (مانند صحت عملکرد ابزارهای استاندارد).'
            ]
          },
          {
            title: 'ارکان کلیدی سند:',
            items: [
              'بیان مسئله: تبیین چالش موجود و ضرورت علمی مداخله.',
              'جنبه نوآوری: تشریح دقیق سهم علمی (Scientific Contribution) تحقیق.'
            ]
          }
        ],
        keyPoint: 'یک فرضیه علمی باید ویژگی «ابطال‌پذیری» داشته باشد؛ در غیر این صورت، تنها یک ادعای کلی است.'
      }
    },
    {
      id: 7,
      title: 'گام هفتم: طراحی متدولوژی اجرا',
      subtitle: 'نقشه راه عملیاتی: ابزارها و فرآیندها',
      icon: <List className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-100',
      summary: 'تشریح دقیق فرآیند گردآوری و تحلیل داده‌ها',
      content: {
        description: 'این بخش به پرسش «چگونه؟» پاسخ می‌دهد. استاندارد این بخش باید به گونه‌ای باشد که تکرارپذیری (Reproducibility) تحقیق توسط سایر پژوهشگران میسر گردد.',
        sections: [
          {
            title: 'مولفه‌های فاز عملیاتی:',
            items: [
              'نوع روش‌شناسی: کیفی، کمی یا آمیخته (Mixed Methods).',
              'محیط اجرا: جزئیات شبیه‌سازی یا مشخصات جامعه آماری.',
              'ابزارهای سنجش: پرسشنامه‌های استاندارد یا موتورهای شبیه‌ساز حرفه‌ای.',
              'معیارهای ارزیابی: استفاده از شاخص‌های آماری یا متریک‌های فنی (مانند Recall, F-Score).'
            ]
          }
        ],
        keyPoint: 'شفافیت در متدولوژی، تضمین‌کننده روایی (Validity) و پایایی (Reliability) یافته‌های شماست.'
      }
    },
    {
      id: 8,
      title: 'گام هشتم: اخلاق پژوهش و استناددهی',
      subtitle: 'مدیریت منابع و پیشگیری از سرقت علمی',
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      color: 'bg-red-100',
      summary: 'رعایت استانداردهای اخلاقی و ثبت رسمی',
      content: {
        description: 'صداقت آکادمیک، زیربنای اعتبار یک پژوهشگر است. ارجاع دقیق به تمامی منابع مورد استفاده، الزامی اخلاقی و قانونی است.',
        sections: [
          {
            title: 'اصول استناددهی حرفه‌ای:',
            items: [
              'ارجاع به تمامی آمارها، نمودارها و ایده‌هایی که منشأ آن‌ها غیر از محقق است.',
              'بهره‌گیری از نرم‌افزارهای مدیریت رفرنس (مانند Mendeley یا Zotero).',
              'رعایت استانداردهای نگارشی مورد تایید دانشگاه (APA, IEEE, etc.).'
            ]
          },
          {
            title: 'اعتبارسنجی در سامانه‌های ملی:',
            items: [
              'استعلام پیشینه موضوع در پایگاه‌هایی نظیر ایران‌داک جهت اطمینان از عدم تکرار.',
              'ثبت رسمی پروپوزال و دریافت کد رهگیری.'
            ]
          }
        ],
        keyPoint: 'حتی در صورت بازنویسی (Paraphrasing)، ذکر منبع اصلی برای حفظ حقوق معنوی اثر الزامی است.'
      }
    },
    {
      id: 9,
      title: 'پایان: آمادگی برای دفاع',
      subtitle: 'پایش نهایی و تدوین سناریوی ارائه',
      icon: <FileText className="w-6 h-6 text-pink-600" />,
      color: 'bg-pink-100',
      summary: 'کنترل کیفیت نهایی سند پروپوزال',
      content: {
        description: 'تبریک! فرآیند تدوین نقشه راه به پایان رسید. اکنون شما سندی در اختیار دارید که نه تنها مجوز شروع تحقیق، بلکه راهنمای گام‌به‌گام شما در مسیر پایان‌نامه خواهد بود.',
        sections: [
          {
            title: 'چک‌لیست کنترل کیفیت:',
            items: [
              'هم‌سویی استراتژیک بین عنوان، اهداف و سوالات تحقیق.',
              'ویراستاری فنی و ادبی جهت ارتقای خوانایی متن.',
              'تطابق کامل ساختار پروپوزال با شیوه‌نامه اجرایی دانشگاه.'
            ]
          }
        ],
        keyPoint: 'سرمایه‌گذاری زمانی روی یک پروپوزال دقیق، ریسک شکست در فاز اجرایی پایان‌نامه را به حداقل می‌رساند.'
      }
    }
  ];

  const handleNext = () => {
    if (currentStep < roadmapData.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      if (!completedSteps.includes(nextStep)) {
        setCompletedSteps([...completedSteps, nextStep]);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (index: number) => {
    if (completedSteps.includes(index) || index === completedSteps[completedSteps.length - 1] + 1) {
      setCurrentStep(index);
      if (!completedSteps.includes(index)) {
        setCompletedSteps([...completedSteps, index]);
      }
    }
  };

  const calculateProgress = () => {
    return ((completedSteps.length) / roadmapData.length) * 100;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-orange-200" dir="rtl">
      <nav className="border-b border-stone-200 bg-[#FDFBF7]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-xl">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-stone-800">Proposal Roadmap</h1>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4 bg-white px-4 py-2 rounded-full border border-stone-200">
              <span className="text-xs font-medium text-stone-500">پیشرفت شما</span>
              <div className="w-32 bg-stone-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-linear-to-l from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-orange-600 w-8 text-left">{Math.round(calculateProgress())}%</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-stone-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-24">
              <h2 className="text-lg font-bold mb-8 text-stone-800 flex items-center gap-2">
                <Map className="w-5 h-5 text-stone-400" />
                نقشه راه
              </h2>

              <div className="relative pr-2">
                <div className="absolute top-4 bottom-10 right-4.75 w-0.5 bg-stone-100"></div>

                <div className="space-y-8">
                  {roadmapData.map((step, index) => {
                    const isActive = index === currentStep;
                    const isCompleted = completedSteps.includes(index);
                    const isLocked = !isCompleted && index !== completedSteps[completedSteps.length - 1] + 1;

                    return (
                      <div
                        key={step.id}
                        onClick={() => !isLocked && handleStepClick(index)}
                        className={`relative flex items-center group transition-all duration-300 ${!isLocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}`}
                      >
                        <div className={`
                          relative z-10 w-10 h-10 rounded-2xl flex items-center justify-center border-2 transition-all duration-300
                          ${isActive
                            ? 'bg-orange-500 border-orange-500 text-white scale-110 shadow-orange-200'
                            : isCompleted
                              ? 'bg-green-50 border-green-200 text-green-600'
                              : 'bg-white border-stone-200 text-stone-300'}
                        `}>
                          {isCompleted && !isActive ? <CheckCircle2 className="w-6 h-6" /> :
                            isLocked ? <Lock className="w-5 h-5" /> :
                              <span className="font-bold text-lg">{index + 1}</span>}
                        </div>

                        <div className={`mr-4 flex-1 transition-transform duration-300 ${isActive ? '-translate-x-2' : ''}`}>
                          <h3 className={`text-sm font-bold ${isActive ? 'text-stone-800' : 'text-stone-500'}`}>
                            {step.title}
                          </h3>
                          <p className="text-xs text-stone-400 mt-0.5">{step.subtitle}</p>
                        </div>

                        {isActive && (
                          <div className="absolute left-0 bg-orange-100 text-orange-600 p-1.5 rounded-lg animate-pulse">
                            <ChevronLeft className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-4xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-150 flex flex-col overflow-hidden relative">

              <div className={`h-32 w-full absolute top-0 right-0 left-0 bg-linear-to-b from-stone-50 to-white opacity-50`}></div>

              <div className="p-8 md:p-10 relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${roadmapData[currentStep].color} bg-opacity-50 inline-flex items-center justify-center`}>
                    {roadmapData[currentStep].icon}
                  </div>
                  <span className="text-6xl font-black text-stone-100 select-none -mt-4 font-serif">
                    {currentStep + 1 < 10 ? `0${currentStep + 1}` : currentStep + 1}
                  </span>
                </div>

                <h1 className="text-3xl font-black text-stone-800 mb-2 tracking-tight">
                  {roadmapData[currentStep].subtitle}
                </h1>
                <p className="text-stone-500 text-lg font-medium">
                  {roadmapData[currentStep].summary}
                </p>
              </div>

              <div className="px-8 md:px-10 pb-8 flex-1 space-y-8 relative z-10">

                <div className="text-stone-600 text-lg leading-loose font-light text-justify">
                  {roadmapData[currentStep].content.description}
                </div>

                <div className="space-y-6">
                  {roadmapData[currentStep].content.sections?.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="space-y-3">
                      <h4 className="font-semibold text-stone-800 text-sm">{section.title}</h4>
                      <ul className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start group">
                            <div className="mt-1.5 ml-3 min-w-5 h-5 w-5 rounded-full border-2 border-stone-300 flex items-center justify-center group-hover:border-orange-400 transition-colors bg-white">
                              <div className="w-2.5 h-2.5 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <span className="text-stone-700 leading-relaxed group-hover:text-stone-900 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="relative bg-amber-50 rounded-xl p-6 border-l-4 border-amber-400 ">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <Sparkles className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-800 mb-1 uppercase tracking-wide">نکته طلایی</p>
                      <p className="text-stone-700 font-medium leading-relaxed">
                        {roadmapData[currentStep].content.keyPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 border-t border-stone-100 bg-stone-50/50 flex justify-between items-center mt-auto">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`flex items-center px-6 py-3 rounded-xl text-sm font-bold transition-all
                    ${currentStep === 0
                      ? 'text-stone-300 cursor-not-allowed'
                      : 'text-stone-600 hover:bg-stone-200 bg-white border border-stone-200  hover:shadow'}`}
                >
                  <ChevronRight className="w-4 h-4 ml-2" />
                  مرحله قبل
                </button>

                {currentStep === roadmapData.length - 1 ? (
                  <button
                    className="flex items-center px-8 py-3 rounded-xl text-sm font-bold bg-green-600 text-white hover:bg-green-700 transition-all shadow-lg hover:shadow-green-200 hover:-translate-y-0.5"
                    onClick={() => {
                      if (!completedSteps.includes(roadmapData.length - 1)) {
                        setCompletedSteps([...completedSteps, roadmapData.length - 1]);
                      }
                    }}
                  >
                    پایان دوره
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center px-8 py-3 rounded-xl text-sm font-bold bg-stone-800 text-white hover:bg-black transition-all shadow-lg hover:shadow-stone-300 hover:-translate-y-0.5"
                  >
                    مرحله بعد
                    <ChevronLeft className="w-4 h-4 mr-2" />
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ProposalRoadmap;