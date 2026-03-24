import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, required, id, ...props }, ref) => {
    const textareaId = id || props.name;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
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
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={cn(
            "min-h-[120px] w-full resize-y rounded-lg border border-mist bg-white px-3 py-2.5 font-body text-sm text-fjord-900 placeholder:text-slate-400",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-sage-400",
            error && "border-red-400 focus:ring-red-400 focus:border-red-400",
            className,
          )}
          {...props}
        />
        {error && (
          <p
            id={`${textareaId}-error`}
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

Textarea.displayName = "Textarea";
export { Textarea };
