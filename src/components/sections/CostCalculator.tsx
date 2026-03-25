"use client";

import { useState, useMemo } from "react";

const fmt = (n: number) => n.toLocaleString("en-AE");

export function CostCalculator({ locale }: { locale: string }) {
  const isAr = locale === "ar";

  const [employees, setEmployees] = useState(50);
  const [newHires, setNewHires] = useState(10);
  const [renewals, setRenewals] = useState(8);
  const [cancellations, setCancellations] = useState(4);
  const [emiratisation, setEmiratisation] = useState(true);
  const [goldenVisa, setGoldenVisa] = useState(0);
  const [corporateTax, setCorporateTax] = useState(true);
  const [attestations, setAttestations] = useState(2);

  const calc = useMemo(() => {
    const tier =
      employees >= 80
        ? "enterprise"
        : employees >= 40
          ? "professional"
          : "essentials";
    const tierLabel =
      tier === "enterprise"
        ? "Enterprise"
        : tier === "professional"
          ? "Professional"
          : "Essentials";
    const retainer = employees >= 80 ? 22000 : employees >= 40 ? 14000 : 8000;
    const included = employees >= 80 ? Infinity : employees >= 40 ? 30 : 15;
    const monthlyTransactions = Math.round(
      (newHires + renewals + cancellations) / 12,
    );
    const overageRate = employees >= 40 ? 375 : 425;
    const overage =
      included === Infinity
        ? 0
        : Math.max(0, monthlyTransactions - included) * overageRate;

    const emiratisationFee = emiratisation ? 5500 : 0;
    const goldenVisaFee = Math.round((goldenVisa * 7500) / 12);
    const taxFee = corporateTax ? Math.round(3500 / 3) : 0;
    const docFee = attestations * 250;

    const serviceMonthly =
      retainer + overage + emiratisationFee + goldenVisaFee + taxFee + docFee;
    const serviceAnnual = serviceMonthly * 12;

    // Government fees
    const govVisaNew = Math.round((newHires * 4000) / 12);
    const govVisaRenew = Math.round((renewals * 3000) / 12);
    const govVisaCancel = Math.round((cancellations * 750) / 12);
    const govEID = Math.round(((newHires + renewals) * 370) / 12);
    const govMedical = Math.round((newHires * 400) / 12);
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
      tier,
      tierLabel,
      retainer,
      included,
      monthlyTransactions,
      service: [
        {
          label: isAr ? "رسوم الخدمات الشهرية" : "PRO Services Retainer",
          monthly: retainer,
          note: isAr
            ? "جميع الخدمات المشمولة في فئتك"
            : "All included services per your tier",
        },
        {
          label: isAr ? "معاملات إضافية" : "Overage Transactions",
          monthly: overage,
          note: isAr
            ? "فقط إذا تجاوزت الحد الشهري"
            : "Only if you exceed monthly allocation",
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
      {/* Input Section */}
      <div className="bg-white rounded-2xl border border-mist p-6 sm:p-8 shadow-md">
        <h3 className="font-display text-xl font-bold text-fjord-900 mb-6">
          {isAr ? "بيانات شركتك" : "Your Company Details"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <NumberInput
            label={isAr ? "عدد الموظفين" : "Number of employees"}
            value={employees}
            onChange={setEmployees}
            hint={isAr ? "إجمالي العاملين في الإمارات" : "Total UAE headcount"}
          />
          <NumberInput
            label={isAr ? "التعيينات الجديدة هذا العام" : "New hires this year"}
            value={newHires}
            onChange={setNewHires}
            hint={isAr ? "تأشيرات موظفين جدد" : "New staff visas"}
          />
          <NumberInput
            label={
              isAr ? "تجديد التأشيرات هذا العام" : "Visa renewals this year"
            }
            value={renewals}
            onChange={setRenewals}
            hint={isAr ? "تجديدات موظفين حاليين" : "Existing staff renewals"}
          />
          <NumberInput
            label={isAr ? "إلغاء تأشيرات هذا العام" : "Cancellations this year"}
            value={cancellations}
            onChange={setCancellations}
            hint={isAr ? "مغادرة موظفين" : "Staff departures"}
          />
        </div>

        <div className="mt-6 grid sm:grid-cols-2 gap-5">
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
          <NumberInput
            label={isAr ? "طلبات تأشيرة ذهبية" : "Golden Visa applications"}
            value={goldenVisa}
            onChange={setGoldenVisa}
            hint={isAr ? "للمستثمرين أو المديرين" : "For investors/executives"}
          />
          <NumberInput
            label={isAr ? "توثيقات شهرية" : "Attestations per month"}
            value={attestations}
            onChange={setAttestations}
            hint={
              isAr
                ? "وزارة الخارجية، سفارات، ترجمة"
                : "MOFA, embassy, translations"
            }
          />
        </div>
      </div>

      {/* Tier Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-sage-50 border border-sage-200 rounded-2xl p-6 sm:p-8">
        <div className="flex-1">
          <p className="text-sm font-medium text-sage-600 mb-1">
            {isAr ? "الفئة الموصى بها" : "Recommended Plan"}
          </p>
          <p className="font-display text-2xl sm:text-3xl font-bold text-fjord-900">
            {calc.tierLabel}
          </p>
        </div>
        <div className="text-start sm:text-end">
          <p className="text-sm text-sage-600">
            {isAr ? "الرسوم الشهرية" : "Monthly retainer"}
          </p>
          <p className="font-display text-2xl font-bold text-sage-600">
            AED {fmt(calc.retainer)}
          </p>
          <p className="text-xs text-stone">
            {calc.included === Infinity
              ? isAr
                ? "معاملات غير محدودة"
                : "Unlimited transactions"
              : `${calc.included} ${isAr ? "معاملة/شهر" : "transactions/month"}`}
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

function NumberInput({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  hint: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-graphite mb-1.5">
        {label}
      </label>
      <input
        type="number"
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, parseInt(e.target.value) || 0))}
        className="w-full px-4 py-3 rounded-lg border border-mist focus:ring-2 focus:ring-sage-400 focus:border-sage-400 outline-none transition bg-snow text-fjord-900 font-display font-bold text-lg"
      />
      <p className="text-xs text-stone mt-1">{hint}</p>
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
