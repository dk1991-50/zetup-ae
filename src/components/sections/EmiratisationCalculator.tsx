"use client";

import { useState, useMemo } from "react";

export function EmiratisationCalculator({ locale }: { locale: string }) {
  const isAr = locale === "ar";

  const [totalEmployees, setTotalEmployees] = useState<string>("");
  const [emiratiEmployees, setEmiratiEmployees] = useState<string>("");
  const [isDubaiMainland, setIsDubaiMainland] = useState(true);

  const results = useMemo(() => {
    const total = parseInt(totalEmployees, 10) || 0;
    const current = parseInt(emiratiEmployees, 10) || 0;

    const applies = isDubaiMainland && total >= 50;
    const required = applies ? Math.ceil(total * 0.1) : 0;
    const gap = applies ? Math.max(0, required - current) : 0;
    const monthlyFine = gap * 9000;
    const annualFine = monthlyFine * 12;

    const deadline = new Date("2026-12-31T23:59:59");
    const now = new Date();
    const daysRemaining = Math.max(
      0,
      Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)),
    );

    return {
      applies,
      required,
      current,
      gap,
      monthlyFine,
      annualFine,
      daysRemaining,
    };
  }, [totalEmployees, emiratiEmployees, isDubaiMainland]);

  const formatAED = (amount: number) => `AED ${amount.toLocaleString("en-AE")}`;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* ── Inputs ─────────────────────────────────────────────────── */}
        <div className="space-y-6">
          <h3 className="font-display text-xl font-semibold text-fjord-900">
            {isAr ? "بيانات الشركة" : "Company Details"}
          </h3>

          <div>
            <label
              htmlFor="total-employees"
              className="block text-sm font-semibold text-graphite mb-2 font-display"
            >
              {isAr ? "إجمالي عدد الموظفين" : "Total Number of Employees"}
            </label>
            <input
              id="total-employees"
              type="number"
              min="0"
              inputMode="numeric"
              value={totalEmployees}
              onChange={(e) => setTotalEmployees(e.target.value)}
              placeholder={isAr ? "مثال: 75" : "e.g. 75"}
              className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-fjord-900 font-body placeholder:text-stone focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="emirati-employees"
              className="block text-sm font-semibold text-graphite mb-2 font-display"
            >
              {isAr
                ? "عدد الموظفين الإماراتيين الحاليين"
                : "Current Number of Emirati Employees"}
            </label>
            <input
              id="emirati-employees"
              type="number"
              min="0"
              inputMode="numeric"
              value={emiratiEmployees}
              onChange={(e) => setEmiratiEmployees(e.target.value)}
              placeholder={isAr ? "مثال: 3" : "e.g. 3"}
              className="w-full rounded-lg border border-mist bg-white px-4 py-3 text-fjord-900 font-body placeholder:text-stone focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <span className="block text-sm font-semibold text-graphite mb-3 font-display">
              {isAr
                ? "هل الشركة مسجلة في بر دبي الرئيسي؟"
                : "Company Registered in Dubai Mainland?"}
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setIsDubaiMainland(true)}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold font-display transition-colors ${
                  isDubaiMainland
                    ? "border-sage-500 bg-sage-500 text-white"
                    : "border-mist bg-white text-slate hover:border-sage-300"
                }`}
              >
                {isAr ? "نعم" : "Yes"}
              </button>
              <button
                type="button"
                onClick={() => setIsDubaiMainland(false)}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold font-display transition-colors ${
                  !isDubaiMainland
                    ? "border-sage-500 bg-sage-500 text-white"
                    : "border-mist bg-white text-slate hover:border-sage-300"
                }`}
              >
                {isAr ? "لا" : "No"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Results ────────────────────────────────────────────────── */}
        <div className="space-y-4">
          <h3 className="font-display text-xl font-semibold text-fjord-900">
            {isAr ? "نتائج التقييم" : "Compliance Results"}
          </h3>

          {!results.applies ? (
            <div className="rounded-xl border border-sage-200 bg-sage-50 p-6">
              <p className="text-sage-700 font-semibold font-display text-lg mb-2">
                {isAr ? "لا ينطبق حاليا" : "Not Currently Applicable"}
              </p>
              <p className="text-slate font-body leading-relaxed">
                {isAr
                  ? "متطلبات التوطين تنطبق على شركات بر دبي الرئيسي التي لديها 50 موظفًا أو أكثر."
                  : "Emiratisation requirements apply to Dubai mainland companies with 50 or more employees."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Required */}
              <div className="rounded-xl border border-mist bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1 font-display">
                  {isAr
                    ? "الموظفون الإماراتيون المطلوبون"
                    : "Required Emirati Employees"}
                </p>
                <p className="text-2xl font-bold text-fjord-900 font-display">
                  {results.required}
                </p>
                <p className="text-sm text-slate font-body">
                  {isAr
                    ? "10% من إجمالي القوى العاملة"
                    : "10% of total workforce"}
                </p>
              </div>

              {/* Gap */}
              <div
                className={`rounded-xl border p-5 ${
                  results.gap > 0
                    ? "border-red-200 bg-red-50"
                    : "border-sage-200 bg-sage-50"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1 font-display">
                  {isAr ? "الفجوة الحالية" : "Current Gap"}
                </p>
                <p
                  className={`text-2xl font-bold font-display ${
                    results.gap > 0 ? "text-red-700" : "text-sage-700"
                  }`}
                >
                  {results.gap > 0
                    ? `${results.gap} ${isAr ? "موظف" : results.gap === 1 ? "employee" : "employees"}`
                    : isAr
                      ? "متوافق"
                      : "Compliant"}
                </p>
              </div>

              {results.gap > 0 && (
                <>
                  {/* Monthly Fine */}
                  <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1 font-display">
                      {isAr
                        ? "الغرامة الشهرية"
                        : "Monthly Fine if Non-Compliant"}
                    </p>
                    <p className="text-2xl font-bold text-red-700 font-display">
                      {formatAED(results.monthlyFine)}
                    </p>
                    <p className="text-sm text-slate font-body">
                      {isAr
                        ? `${results.gap} × 9,000 درهم لكل موظف ناقص`
                        : `${results.gap} x AED 9,000 per missing employee`}
                    </p>
                  </div>

                  {/* Annual Fine */}
                  <div className="rounded-xl border border-red-300 bg-red-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1 font-display">
                      {isAr ? "التعرض السنوي للغرامات" : "Annual Fine Exposure"}
                    </p>
                    <p className="text-3xl font-bold text-red-800 font-display">
                      {formatAED(results.annualFine)}
                    </p>
                  </div>
                </>
              )}

              {/* Deadline */}
              <div className="rounded-xl border border-fjord-200 bg-fjord-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone mb-1 font-display">
                  {isAr ? "الموعد النهائي" : "Compliance Deadline"}
                </p>
                <p className="text-xl font-bold text-fjord-900 font-display">
                  {isAr ? "31 ديسمبر 2026" : "December 31, 2026"}
                </p>
                <p className="text-sm text-slate font-body">
                  {isAr
                    ? `${results.daysRemaining} يومًا متبقيًا`
                    : `${results.daysRemaining} days remaining`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
