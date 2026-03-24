import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, required, id, options, placeholder, ...props },
    ref,
  ) => {
    const selectId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium font-display text-fjord-900"
          >
            {label}
            {required && (
              <span className="ms-0.5 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={!!error}
            aria-describedby={error ? `${selectId}-error` : undefined}
            className={cn(
              "h-11 w-full appearance-none rounded-lg border border-mist bg-white pe-10 ps-3 font-body text-sm text-fjord-900",
              "transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-sage-400",
              error && "border-red-400 focus:ring-red-400 focus:border-red-400",
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="text-xs text-red-500 font-body"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
export { Select };
