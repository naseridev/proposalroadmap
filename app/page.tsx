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
      title: 'گام اول: انتخاب هوشمندانه مسیر',
      subtitle: 'استراتژی انتخاب موضوع و درک ماهیت پژوهش',
      icon: <Compass className="w-6 h-6 text-amber-700" />,
      color: 'bg-amber-100',
      summary: 'استراتژی انتخاب موضوع و درک ماهیت پژوهش',
      content: {
        description: 'تحقیق علمی یک جستجوی سیستماتیک و نظام‌مند برای کشف حقایق یا حل چالش‌های موجود است. مهم‌ترین چالش در این مرحله، انتخاب موضوعی است که هم ارزش علمی داشته باشد و هم در بازه زمانی تحصیل شما قابل انجام باشد.',
        sections: [
          {
            title: 'اگر موضوعی ندارید، از استراتژی ۵-۱-۱ استفاده کنید:',
            items: [
              '۱. جستجو: پنج موضوع داغ (Hot Topics) و مطرح در رشته تخصصی خود را پیدا کنید.',
              '۲. مطالعه: برای هر یک از این ۵ موضوع، دقیقاً یک «مقاله مروری جدید» (Review Paper) که در ۲ سال اخیر چاپ شده است را مطالعه کنید.',
              '۳. غربالگری: بر اساس سه فاکتور «زمان مورد نیاز»، «علاقه شخصی» و «حس کنجکاوی»، موضوعات را فیلتر کرده و به یک موضوع نهایی برسید.'
            ]
          },
          {
            title: 'رویکرد استدلالی خود را بشناسید:',
            items: [
              'استقرایی (Inductive): جمع‌آوری داده‌ها برای رسیدن به یک نظریه کلی (حرکت از جزء به کل).',
              'استنتاجی (Deductive): شروع با یک نظریه کلی و تست آن در شرایط خاص (حرکت از کل به جزء).'
            ]
          }
        ],
        keyPoint: 'موضوع تحقیق شما باید یک "پاسخ" به یک "نیاز" باشد، نه صرفاً تکرار مکررات. روی حل مسئله تمرکز کنید.'
      }
    },
    {
      id: 2,
      title: 'گام دوم: تشکیل تیم راهبری',
      subtitle: 'انتخاب استاد راهنما و مشاور',
      icon: <UserCheck className="w-6 h-6 text-stone-700" />,
      color: 'bg-stone-200',
      summary: 'انتخاب استاد راهنما و مشاور',
      content: {
        description: 'تیم تحقیق شما ستون فقرات موفقیت شماست. انتخاب استاد راهنما نباید صرفاً بر اساس شهرت باشد، بلکه "در دسترس بودن" و "تطابق تخصص" مهم‌تر است.',
        sections: [
          {
            title: 'معیارهای انتخاب استاد راهنما:',
            items: [
              'تخصص مرتبط: آیا استاد در حوزه انتخابی شما مقاله دارد؟',
              'زمان و دسترسی: آیا وقت کافی برای جلسات منظم دارد؟',
              'اخلاق حرفه‌ای: آیا تعامل با ایشان سازنده است؟'
            ]
          },
          {
            title: 'نقش استاد مشاور:',
            items: [
              'در مقطع دکتری: وجود مشاور الزامی است.',
              'در مقطع ارشد: اگر تحقیق شما "میان‌رشته‌ای" (Interdisciplinary) است یا به تخصص خاصی نیاز دارید که استاد راهنما بر آن مسلط نیست، انتخاب مشاور توصیه می‌شود.'
            ]
          }
        ],
        keyPoint: 'قبل از نهایی کردن موضوع، حتماً موافقت اولیه استاد راهنما را جلب کنید تا مسیر را اشتباه نروید.'
      }
    },
    {
      id: 3,
      title: 'گام سوم: تعیین محدوده (Scope)',
      subtitle: 'تبدیل موضوع کلی به یک پژوهش عملیاتی',
      icon: <Target className="w-6 h-6 text-orange-700" />,
      color: 'bg-orange-100',
      summary: 'تبدیل موضوع کلی به یک پژوهش عملیاتی',
      content: {
        description: 'بسیاری از دانشجویان به دلیل عدم تعیین دقیق محدوده (Scope)، در میانه راه با کمبود زمان یا بودجه مواجه می‌شوند. "دامنه" یا "محدوده" یعنی خط کشیدن دورِ کاری که قرار است انجام دهید و مهم‌تر از آن، کارهایی که قرار نیست انجام دهید.',
        sections: [
          {
            title: 'فرایند قیفی (Funnel Approach):',
            items: [
              'موضوع کلی: مثلاً "رایانش ابری" (بسیار وسیع است).',
              'زیرمجموعه: "الگوریتم‌های زمان‌بندی".',
              'تمرکز خاص: "کاهش زمان پاسخ در محیط‌های توزیع شده".',
              'محدوده نهایی: "ارائه یک الگوریتم زمان‌بندی جدید برای کاهش مصرف انرژی در دیتاسنترهای ابری با استفاده از روش X".'
            ]
          },
          {
            title: 'محدودیت‌های تعیین‌کننده Scope:',
            items: [
              'زمان: آیا در ۶ ماه (ارشد) یا ۳ سال (دکتری) تمام می‌شود؟',
              'هزینه: آیا نیاز به سخت‌افزار یا آزمایشگاه گران‌قیمت دارید؟',
              'دسترسی به داده: آیا دیتاسِت (Dataset) مورد نیاز در دسترس است؟'
            ]
          }
        ],
        keyPoint: 'هنر پژوهشگر در "نه" گفتن به شاخ و برگ‌های اضافی است. محدوده خود را کوچک اما عمیق انتخاب کنید.'
      }
    },
    {
      id: 4,
      title: 'گام چهارم: شکار در ادبیات تحقیق',
      subtitle: 'مرور متون، یافتن شکاف تحقیقاتی و مقاله پایه',
      icon: <Search className="w-6 h-6 text-yellow-600" />,
      color: 'bg-yellow-100',
      summary: 'مرور متون، یافتن شکاف تحقیقاتی و مقاله پایه',
      content: {
        description: 'مرور ادبیات (Literature Review) یعنی ایستادن روی شانه غول‌ها. شما باید بدانید دیگران تا کجا پیش رفته‌اند تا بتوانید قدم بعدی را بردارید. هدف خواندن مقاله، کپی کردن نیست، بلکه نقد کردن است.',
        sections: [
          {
            title: 'تکنیک مطالعه هدفمند:',
            items: [
              'مرحله اول (دید کلی): خواندن مقالات مروری (Survey/Review) برای شناخت دسته‌بندی‌ها.',
              'مرحله دوم (دید عمیق): خواندن مقالات پژوهشی (Original Research) مربوط به ۳ تا ۴ سال اخیر.',
              'مرحله سوم (تحلیل): ساخت جدول مقایسه‌ای برای یافتن نقاط ضعف روش‌های موجود.'
            ]
          },
          {
            title: 'انتخاب مقاله پایه (Base Paper):',
            items: [
              'معتبرترین و جدیدترین مقاله‌ای که نزدیک‌ترین کار به ایده شماست را انتخاب کنید.',
              'این مقاله "متراژ" کار شماست؛ باید نتایج روش خود را با نتایج این مقاله مقایسه کنید.'
            ]
          }
        ],
        keyPoint: 'هدف نهایی مرور ادبیات، رسیدن به نقطه‌ای است که بگویید: "این مشکل هنوز حل نشده است" یا "این راه حل هنوز بهینه نیست". این همان GAP تحقیق شماست.'
      }
    },
    {
      id: 5,
      title: 'گام پنجم: معماری نوآوری',
      subtitle: 'طراحی روش پیشنهادی (Proposed Method)',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
      color: 'bg-blue-100',
      summary: 'طراحی روش پیشنهادی (Proposed Method)',
      content: {
        description: 'اینجا جایی است که شما ارزش افزوده خود را نشان می‌دهید. نوآوری لزوماً اختراع چرخ نیست؛ می‌تواند بهبود چرخش یک چرخ موجود باشد.',
        sections: [
          {
            title: 'انواع نوآوری قابل قبول:',
            items: [
              'بهبود (Improvement): ارتقای دقت، سرعت یا کارایی یک روش موجود.',
              'ترکیب (Hybrid): ترکیب دو روش قدیمی برای ساخت یک راه حل جدید.',
              'کاربرد جدید (New Application): استفاده از یک ابزار شناخته شده در یک دامنه جدید.'
            ]
          },
          {
            title: 'تصویرسازی:',
            items: [
              'فلوچارت روش پیشنهادی خود را رسم کنید.',
              'تفاوت دقیق بلوک‌های فلوچارت خود با مقاله پایه را مشخص کنید.'
            ]
          }
        ],
        keyPoint: 'نوآوری شما باید "قابل اندازه‌گیری" باشد. اگر نتوانید ثابت کنید روشتان بهتر است، نوآوری نکرده‌اید.'
      }
    },
    {
      id: 6,
      title: 'گام ششم: نگارش فنی پروپوزال',
      subtitle: 'تبدیل ایده به سند رسمی (فرضیه vs پیش‌فرض)',
      icon: <PenTool className="w-6 h-6 text-green-600" />,
      color: 'bg-green-100',
      summary: 'تبدیل ایده به سند رسمی (فرضیه vs پیش‌فرض)',
      content: {
        description: 'نوشتن پروپوزال یعنی فروش ایده شما به داوران. باید دقیق، شفاف و علمی بنویسید. یکی از مهم‌ترین بخش‌های فنی که اغلب اشتباه می‌شود، تفاوت "فرضیه" و "پیش‌فرض" است.',
        sections: [
          {
            title: 'تفاوت حیاتی فرضیه و پیش‌فرض:',
            items: [
              'فرضیه (Hypothesis): یک حدس هوشمندانه و صریح (Explicit) درباره رابطه بین متغیرهاست که قرار است در طول تحقیق "آزمایش" شود. انتهای تحقیق، فرضیه یا رد می‌شود یا تایید. (مثال: استفاده از الگوریتم X باعث کاهش ۲۰ درصدی مصرف انرژی می‌شود).',
              'پیش‌فرض/مفروضات (Assumption): گزاره‌هایی که تحقیق بر پایه آن‌ها بنا شده و ما آن‌ها را "بدون آزمایش" به عنوان حقیقت می‌پذیریم (Implicit). اگر این‌ها غلط باشند، کل تحقیق زیر سوال می‌رود. (مثال: فرض می‌کنیم داده‌های جمع‌آوری شده توسط سنسورها دقیق و بدون نویز هستند).'
            ]
          },
          {
            title: 'سایر اجزای کلیدی:',
            items: [
              'بیان مسئله: توصیف درد (مشکل) و درمان (راه حل شما).',
              'ضرورت تحقیق: چرا الان؟ اگر این تحقیق انجام نشود چه می‌شود؟'
            ]
          }
        ],
        keyPoint: 'فرضیه باید "آزمون‌پذیر" (Testable) باشد. اگر نمی‌توانید برایش آزمایشی طراحی کنید، فرضیه نیست.'
      }
    },
    {
      id: 7,
      title: 'گام هفتم: متدولوژی اجرا',
      subtitle: 'نقشه عملیاتی: ابزارها و روش‌ها',
      icon: <List className="w-6 h-6 text-purple-600" />,
      color: 'bg-purple-100',
      summary: 'نقشه عملیاتی: ابزارها و روش‌ها',
      content: {
        description: 'در این بخش باید به سوال "چگونه؟" پاسخ دهید. داور باید بتواند با خواندن این بخش، تحقیق شما را تکرار کند (Reproducibility).',
        sections: [
          {
            title: 'اجزای متدولوژی:',
            items: [
              'نوع پژوهش: بنیادی، کاربردی یا توسعه‌ای؟',
              'جامعه آماری یا محیط شبیه‌سازی: دقیقاً روی چه داده‌هایی کار می‌کنید؟',
              'ابزار گردآوری: پرسشنامه، مصاحبه، یا دیتاسِت‌های استاندارد (مانند Kaggle یا UCI).',
              'روش تحلیل: آزمون‌های آماری (SPSS) یا متریک‌های ارزیابی مهندسی (Accuracy, Precision).'
            ]
          }
        ],
        keyPoint: 'شفافیت در متدولوژی، اعتبار علمی کار شما را تضمین می‌کند. هیچ مرحله‌ای را مبهم نگذارید.'
      }
    },
    {
      id: 8,
      title: 'گام هشتم: رفرنس‌دهی',
      subtitle: 'اخلاق و رفرنس‌دهی',
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      color: 'bg-red-100',
      summary: 'پرهیز از سرقت ادبی',
      content: {
        description: 'علم یک زنجیره به هم پیوسته است. استفاده از ایده، متن یا تصویر دیگران بدون ذکر منبع، سرقت ادبی (Plagiarism) است و می‌تواند مدرک شما را باطل کند.',
        sections: [
          {
            title: 'اصول رفرنس‌دهی:',
            items: [
              'حقایق عمومی (Facts) نیازی به منبع ندارند (مثلاً: آب در ۱۰۰ درجه می‌جوشد).',
              'هر ادعا، آمار، نمودار یا ایده‌ای که مال شما نیست، باید منبع داشته باشد.',
              'استفاده از ابزارهای مدیریت منابع مثل EndNote یا Mendeley الزامی است.'
            ]
          },
          {
            title: 'ثبت پروپوزال:',
            items: [
              'اطمینان از تکراری نبودن موضوع در پایگاه‌هایی مثل "ایران‌داک" (Ganj) و "سیکا".',
              'دریافت کد رهگیری و ضمیمه کردن آن به پروپوزال.'
            ]
          }
        ],
        keyPoint: 'اعتبار یک پژوهشگر به صداقت اوست. حتی اگر پاراگرافی را با زبان خودتان بازنویسی کردید (Paraphrase)، باز هم باید منبع اصلی را ذکر کنید.'
      }
    },
    {
      id: 9,
      title: 'پایان: آمادگی دفاع',
      subtitle: 'بازبینی نهایی و ارائه',
      icon: <FileText className="w-6 h-6 text-pink-600" />,
      color: 'bg-pink-100',
      summary: 'بازبینی نهایی و ارائه',
      content: {
        description: 'تبریک! نقشه راه تدوین پروپوزال کامل شد. اکنون شما یک سند کامل دارید که نقشه راه ۲ سال آینده زندگی تحصیلی شماست.',
        sections: [
          {
            title: 'چک‌لیست نهایی:',
            items: [
              'آیا بین "عنوان"، "هدف" و "سوالات تحقیق" هماهنگی کامل وجود دارد؟',
              'آیا متن از نظر نگارشی و املایی ویراستاری شده است؟',
              'آیا تمامی منابع در فرمت استاندارد (APA, IEEE, ...) مرتب شده‌اند؟'
            ]
          }
        ],
        keyPoint: 'یک پروپوزال قوی، نیمی از راه پایان‌نامه است. هر چقدر اینجا دقیق‌تر باشید، هنگام انجام پایان‌نامه راحت‌تر خواهید بود.'
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