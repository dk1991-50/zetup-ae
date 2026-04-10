"use client";

import { useState, useMemo } from "react";

const fmt = (n: number) => n.toLocaleString("en-AE");

export function CostCalculator({ locale }: { locale: string }) {
  const isAr = locale === "ar";

  const [employees, setEmployees] = useState(5);
  const [newHires, setNewHires] = useState(2);
  const [renewals, setRenewals] = useState(1);
  const [cancellations, setCancellations] = useState(1);
  const [emiratisation, setEmiratisation] = useState(false);
  const [goldenVisa, setGoldenVisa] = useState(0);
  const [corporateTax, setCorporateTax] = useState(true);
  const [attestations, setAttestations] = useState(1);

  const calc = useMemo(() => {
    // ZETUP PRO actual pricing table: [maxEmployees, monthlyRate, annualRate]
    const pricingTable: [number, number, number][] = [
      [5, 839, 8750],
      [10, 1198, 12500],
      [15, 1438, 15000],
      [25, 2180, 22750],
      [35, 3048, 36570],
      [45, 3899, 46782],
      [55, 4102, 49225],
      [65, 4848, 58175],
      [75, 5563, 66750],
      [85, 6304, 75650],
      [95, 7006, 84075],
      [105, 7656, 91875],
      [115, 8385, 100625],
      [125, 9063, 108750],
      [135, 9788, 117450],
      [145, 10513, 126150],
      [155, 11238, 134850],
      [165, 11963, 143550],
      [175, 12688, 152250],
      [185, 13413, 160950],
      [195, 14138, 169650],
      [205, 14008, 168100],
    ];

    // Find the matching tier (first tier where maxEmployees >= employee count)
    const tier =
      pricingTable.find(([max]) => employees <= max) ||
      pricingTable[pricingTable.length - 1];
    const retainerMonthly = tier[1];
    const retainerAnnual = tier[2];
    const perEmpYear =
      employees > 0 ? Math.round(retainerAnnual / employees) : 0;

    const emiratisationFee = emiratisation ? 5500 : 0;
    const goldenVisaFee = Math.round((goldenVisa * 7500) / 12);
    const taxFee = corporateTax ? Math.round(3500 / 3) : 0;
    const docFee = attestations * 250;

    const serviceMonthly =
      retainerMonthly + emiratisationFee + goldenVisaFee + taxFee + docFee;
    const serviceAnnual =
      retainerAnnual +
      (emiratisationFee + goldenVisaFee + taxFee + docFee) * 12;

    // Government fees (mid-estimates based on 2026 rates)
    const govVisaNew = Math.round((newHires * 5500) / 12);
    const govVisaRenew = Math.round((renewals * 3000) / 12);
    const govVisaCancel = Math.round((cancellations * 750) / 12);
    const govEID = Math.round(((newHires + renewals) * 370) / 12);
    const govMedical = Math.round((newHires * 380) / 12);
    const govLabour = Math.round(((newHires + renewals) * 300) / 12);
    const govLicense = Math.round(12500 / 12);
    const govEstab = Math.round(2000 / 12);

    const govMonthly =
      govVisaNew +
      govVisaRenew +
      govVisaCancel +
      govEID +
      govMedical +
      govLabour +
      govLicense +
      govEstab;
    const govAnnual = govMonthly * 12;

    const totalMonthly = serviceMonthly + govMonthly;
    const totalAnnual = serviceAnnual + govAnnual;
    const perEmployee =
      employees > 0 ? Math.round(totalMonthly / employees) : 0;

    return {
      retainerMonthly,
      retainerAnnual,
      perEmpYear,
      tierMax: tier[0],
      service: [
        {
          label: isAr ? "رسوم الخدمات الشهرية" : "PRO Services Retainer",
          monthly: retainerMonthly,
          note: isAr
            ? `حتى ${tier[0]} موظف — ${fmt(perEmpYear)} درهم/موظف/سنة`
            : `Up to ${tier[0]} employees — AED ${fmt(perEmpYear)}/employee/year`,
        },
        {
          label: isAr ? "برنامج التوطين" : "Emiratisation Programme",
          monthly: emiratisationFee,
          note: isAr
            ? "تتبع الحصص، نافس، تقارير"
            : "Quota tracking, Nafis, MoHRE reporting",
        },
        {
          label: isAr ? "تأشيرة ذهبية" : "Golden Visa Processing",
          monthly: goldenVisaFee,
          note: isAr ? "طلب كامل لكل شخص" : "End-to-end application per person",
        },
        {
          label: isAr ? "الضريبة المؤسسية" : "Corporate Tax Filing",
          monthly: taxFee,
          note: isAr
            ? "تنسيق ربع سنوي مع الهيئة"
            : "FTA coordination, quarterly",
        },
        {
          label: isAr ? "توثيق المستندات" : "Document Clearing",
          monthly: docFee,
          note: isAr
            ? "توثيق، تصديق، ترجمة"
            : "Attestation, legalisation, translation",
        },
      ],
      serviceMonthly,
      serviceAnnual,
      gov: [
        {
          label: isAr ? "تأشيرات عمل جديدة" : "Employment Visas (new)",
          monthly: govVisaNew,
          note: "MOHRE / GDRFA",
        },
        {
          label: isAr ? "تجديد تأشيرات" : "Visa Renewals",
          monthly: govVisaRenew,
          note: "MOHRE / GDRFA",
        },
        {
          label: isAr ? "إلغاء تأشيرات" : "Visa Cancellations",
          monthly: govVisaCancel,
          note: "MOHRE / GDRFA",
        },
        {
          label: isAr ? "هوية إماراتية" : "Emirates ID",
          monthly: govEID,
          note: "ICP — AED 370/person",
        },
        {
          label: isAr ? "فحص طبي" : "Medical Fitness",
          monthly: govMedical,
          note: "DHA — AED 300–500",
        },
        {
          label: isAr ? "بطاقة عمل" : "Labour Cards",
          monthly: govLabour,
          note: "MOHRE — AED 300",
        },
        {
          label: isAr ? "تجديد الرخصة التجارية" : "Trade License Renewal",
          monthly: govLicense,
          note: "DET — AED 10K–15K/yr",
        },
        {
          label: isAr ? "بطاقة المنشأة" : "Establishment Card",
          monthly: govEstab,
          note: "MOHRE — AED 2,000/yr",
        },
      ],
      govMonthly,
      govAnnual,
      totalMonthly,
      totalAnnual,
      perEmployee,
    };
  }, [
    employees,
    newHires,
    renewals,
    cancellations,
    emiratisation,
    goldenVisa,
    corporateTax,
    attestations,
    isAr,
  ]);

  return (
    <div className="space-y-10">
      {/* Quick Presets */}
      <div className="bg-white rounded-2xl border border-mist p-6 sm:p-8 shadow-md">
        <h3 className="font-display text-xl font-bold text-fjord-900 mb-2">
          {isAr ? "ما حجم شركتك؟" : "How big is your company?"}
        </h3>
        <p className="text-sm text-stone mb-5">
          {isAr
            ? "اختر الأقرب — يمكنك تعديل التفاصيل أدناه"
            : "Pick the closest match — fine-tune below"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: isAr ? "صغيرة" : "Small",
              sub: "5–15",
              emp: 5,
              hires: 2,
              ren: 1,
              canc: 1,
              att: 1,
            },
            {
              label: isAr ? "متوسطة" : "Medium",
              sub: "30–60",
              emp: 50,
              hires: 10,
              ren: 8,
              canc: 4,
              att: 2,
            },
            {
              label: isAr ? "كبيرة" : "Large",
              sub: "60–120",
              emp: 80,
              hires: 20,
              ren: 15,
              canc: 6,
              att: 4,
            },
            {
              label: isAr ? "مؤسسة" : "Enterprise",
              sub: "120–250+",
              emp: 150,
              hires: 35,
              ren: 25,
              canc: 10,
              att: 6,
            },
          ].map((preset) => (
            <button
              key={preset.emp}
              type="button"
              onClick={() => {
                setEmployees(preset.emp);
                setNewHires(preset.hires);
                setRenewals(preset.ren);
                setCancellations(preset.canc);
                setAttestations(preset.att);
                setEmiratisation(preset.emp >= 50);
              }}
              className={`flex flex-col items-center rounded-xl border-2 p-4 transition-all ${
                employees === preset.emp
                  ? "border-sage-500 bg-sage-50 shadow-md"
                  : "border-mist bg-white hover:border-sage-300 hover:shadow-sm"
              }`}
            >
              <span className="font-display text-lg font-bold text-fjord-900">
                {preset.label}
              </span>
              <span className="text-xs text-stone mt-1">
                {preset.sub} {isAr ? "موظف" : "employees"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sliders & Fine-Tune */}
      <div className="bg-white rounded-2xl border border-mist p-6 sm:p-8 shadow-md">
        <h3 className="font-display text-lg font-bold text-fjord-900 mb-6">
          {isAr ? "تعديل التفاصيل" : "Fine-Tune Your Details"}
        </h3>
        <div className="space-y-6">
          <SliderInput
            label={isAr ? "عدد الموظفين" : "Employees"}
            value={employees}
            onChange={setEmployees}
            min={5}
            max={210}
            step={1}
            suffix=""
          />
          <SliderInput
            label={isAr ? "تعيينات جديدة/سنة" : "New hires / year"}
            value={newHires}
            onChange={setNewHires}
            min={0}
            max={60}
            step={1}
            suffix=""
          />
          <SliderInput
            label={isAr ? "تجديد تأشيرات/سنة" : "Visa renewals / year"}
            value={renewals}
            onChange={setRenewals}
            min={0}
            max={50}
            step={1}
            suffix=""
          />
          <SliderInput
            label={isAr ? "إلغاءات/سنة" : "Cancellations / year"}
            value={cancellations}
            onChange={setCancellations}
            min={0}
            max={30}
            step={1}
            suffix=""
          />
          <SliderInput
            label={isAr ? "توثيقات/شهر" : "Attestations / month"}
            value={attestations}
            onChange={setAttestations}
            min={0}
            max={20}
            step={1}
            suffix=""
          />
          <SliderInput
            label={isAr ? "تأشيرات ذهبية/سنة" : "Golden Visas / year"}
            value={goldenVisa}
            onChange={setGoldenVisa}
            min={0}
            max={10}
            step={1}
            suffix=""
          />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <ToggleInput
            label={isAr ? "دعم التوطين؟" : "Emiratisation support?"}
            value={emiratisation}
            onChange={setEmiratisation}
            hint={isAr ? "مطلوب لأكثر من 50 موظف" : "Required if 50+ employees"}
          />
          <ToggleInput
            label={isAr ? "تقديم الضريبة المؤسسية؟" : "Corporate Tax filing?"}
            value={corporateTax}
            onChange={setCorporateTax}
            hint={
              isAr ? "تنسيق ربع سنوي مع الهيئة" : "Quarterly FTA coordination"
            }
          />
        </div>
      </div>

      {/* Pricing Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-sage-50 border border-sage-200 rounded-2xl p-6 sm:p-8">
        <div className="flex-1">
          <p className="text-sm font-medium text-sage-600 mb-1">
            {isAr ? "فئتك" : "Your Plan"}
          </p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-fjord-900">
            {isAr
              ? `حتى ${calc.tierMax} موظف`
              : `Up to ${calc.tierMax} employees`}
          </p>
        </div>
        <div className="text-start sm:text-end">
          <p className="text-sm text-sage-600">
            {isAr ? "الرسوم الشهرية" : "Monthly retainer"}
          </p>
          <p className="font-display text-2xl font-bold text-sage-600">
            AED {fmt(calc.retainerMonthly)}
          </p>
          <p className="text-xs text-stone">
            AED {fmt(calc.retainerAnnual)}/{isAr ? "سنة" : "year"} — AED{" "}
            {fmt(calc.perEmpYear)}/{isAr ? "موظف" : "employee"}
          </p>
        </div>
      </div>

      {/* Service Fees */}
      <div className="bg-white rounded-2xl border border-mist overflow-hidden shadow-md">
        <div className="px-6 sm:px-8 py-5 bg-frost border-b border-mist">
          <h3 className="font-display text-lg font-bold text-fjord-900">
            {isAr ? "رسوم خدمات زيتب برو" : "ZETUP PRO Service Fees"}
          </h3>
        </div>
        <div className="divide-y divide-mist">
          {calc.service.map((item) => (
            <div
              key={item.label}
              className="px-6 sm:px-8 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-fjord-900">
                  {item.label}
                </p>
                <p className="text-xs text-stone truncate">{item.note}</p>
              </div>
              <p className="font-display text-sm font-bold text-fjord-900 shrink-0">
                {item.monthly === 0 ? "—" : `AED ${fmt(item.monthly)}`}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 sm:px-8 py-5 bg-sage-500 flex items-center justify-between">
          <p className="font-display font-bold text-white">
            {isAr ? "إجمالي رسوم الخدمات" : "Total Service Fees"}
          </p>
          <div className="text-end">
            <p className="font-display text-lg font-bold text-white">
              AED {fmt(calc.serviceMonthly)}
              <span className="text-sage-200 text-sm font-normal">
                /{isAr ? "شهر" : "mo"}
              </span>
            </p>
            <p className="text-xs text-sage-200">
              AED {fmt(calc.serviceAnnual)}/{isAr ? "سنة" : "yr"}
            </p>
          </div>
        </div>
      </div>

      {/* Government Fees */}
      <div className="bg-white rounded-2xl border border-mist overflow-hidden shadow-md">
        <div className="px-6 sm:px-8 py-5 bg-frost border-b border-mist">
          <h3 className="font-display text-lg font-bold text-fjord-900">
            {isAr ? "الرسوم الحكومية المقدرة" : "Estimated Government Fees"}
          </h3>
          <p className="text-xs text-stone mt-1">
            {isAr
              ? "تُمرر بالتكلفة — بدون أي زيادة من زيتب برو"
              : "Passed through at cost — ZETUP PRO never marks up government fees"}
          </p>
        </div>
        <div className="divide-y divide-mist">
          {calc.gov.map((item) => (
            <div
              key={item.label}
              className="px-6 sm:px-8 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-fjord-900">
                  {item.label}
                </p>
                <p className="text-xs text-stone truncate">{item.note}</p>
              </div>
              <p className="font-display text-sm font-bold text-fjord-900 shrink-0">
                {item.monthly === 0 ? "—" : `AED ${fmt(item.monthly)}`}
              </p>
            </div>
          ))}
        </div>
        <div className="px-6 sm:px-8 py-5 bg-mist flex items-center justify-between">
          <p className="font-display font-bold text-fjord-900">
            {isAr ? "إجمالي الرسوم الحكومية" : "Total Government Fees"}
          </p>
          <div className="text-end">
            <p className="font-display text-lg font-bold text-fjord-900">
              AED {fmt(calc.govMonthly)}
              <span className="text-stone text-sm font-normal">
                /{isAr ? "شهر" : "mo"}
              </span>
            </p>
            <p className="text-xs text-stone">
              AED {fmt(calc.govAnnual)}/{isAr ? "سنة" : "yr"}
            </p>
          </div>
        </div>
      </div>

      {/* Grand Total */}
      <div className="bg-fjord-900 rounded-2xl p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h3 className="font-display text-xl font-bold">
            {isAr
              ? "إجمالي التكلفة السنوية المقدرة"
              : "Total Estimated Annual Investment"}
          </h3>
          <div className="text-start sm:text-end">
            <p className="font-display text-3xl sm:text-4xl font-extrabold">
              AED {fmt(calc.totalAnnual)}
            </p>
            <p className="text-slate-400 text-sm">
              AED {fmt(calc.totalMonthly)}/{isAr ? "شهر" : "month"}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
          <div>
            <p className="text-xs text-slate-400">
              {isAr ? "التكلفة لكل موظف/شهر" : "Cost per employee/month"}
            </p>
            <p className="font-display text-xl font-bold">
              AED {fmt(calc.perEmployee)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">
              {isAr ? "رسوم الخدمات" : "Service fees"}
            </p>
            <p className="font-display text-xl font-bold text-sage-400">
              AED {fmt(calc.serviceAnnual)}
            </p>
          </div>
          <div>
            <p className="text-xs text-slate-400">
              {isAr ? "الرسوم الحكومية" : "Government fees"}
            </p>
            <p className="font-display text-xl font-bold text-slate-300">
              AED {fmt(calc.govAnnual)}
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-stone text-center">
        {isAr
          ? "هذا التقدير لأغراض الميزانية. سيتم تأكيد عرضك الفعلي كتابياً بعد الفحص الصحي المجاني."
          : "This estimate is for budgeting purposes. Your actual quote will be confirmed in writing after a free PRO Health Check."}
      </p>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  suffix: string;
}) {
  const inputId = `slider-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={inputId} className="text-sm font-medium text-graphite">
          {label}
        </label>
        <span className="font-display text-lg font-bold text-fjord-900 tabular-nums">
          {value}
        </span>
      </div>
      <input
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #2E9B87 0%, #2E9B87 ${pct}%, #E2E8F0 ${pct}%, #E2E8F0 100%)`,
        }}
      />
      <div className="flex justify-between text-xs text-stone mt-1">
        <span>{min}</span>
        <span>
          {max}
          {max === 300 ? "+" : ""}
        </span>
      </div>
    </div>
  );
}

function ToggleInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: boolean;
  onChange: (b: boolean) => void;
  hint: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite mb-1.5">
        {label}
      </label>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange(true)}
          className={`flex-1 px-4 py-3 rounded-lg font-display font-bold text-sm transition-colors ${value ? "bg-sage-500 text-white" : "bg-frost text-fjord-700 border border-mist hover:bg-mist"}`}
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => onChange(false)}
          className={`flex-1 px-4 py-3 rounded-lg font-display font-bold text-sm transition-colors ${!value ? "bg-fjord-900 text-white" : "bg-frost text-fjord-700 border border-mist hover:bg-mist"}`}
        >
          No
        </button>
      </div>
      <p className="text-xs text-stone mt-1">{hint}</p>
    </div>
  );
}
