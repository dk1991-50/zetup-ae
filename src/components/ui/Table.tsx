import {
  forwardRef,
  type HTMLAttributes,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

/* ─── TableWrapper (responsive scroll) ────────────────────────────────────── */

const TableWrapper = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full overflow-x-auto rounded-xl border border-mist",
        className,
      )}
      {...props}
    />
  ),
);
TableWrapper.displayName = "TableWrapper";

/* ─── Table ───────────────────────────────────────────────────────────────── */

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm font-body", className)}
      {...props}
    />
  ),
);
Table.displayName = "Table";

/* ─── TableHeader ─────────────────────────────────────────────────────────── */

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("bg-frost text-fjord-900 font-display", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

/* ─── TableBody ───────────────────────────────────────────────────────────── */

const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:nth-child(even)]:bg-snow [&_tr:nth-child(odd)]:bg-white",
      className,
    )}
    {...props}
  />
));
TableBody.displayName = "TableBody";

/* ─── TableRow ────────────────────────────────────────────────────────────── */

const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-mist transition-colors hover:bg-frost/50",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

/* ─── TableHead ───────────────────────────────────────────────────────────── */

const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn("px-4 py-3 text-start text-sm font-semibold", className)}
    {...props}
  />
));
TableHead.displayName = "TableHead";

/* ─── TableCell ───────────────────────────────────────────────────────────── */

const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("px-4 py-3 text-start", className)} {...props} />
));
TableCell.displayName = "TableCell";

export {
  TableWrapper,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
};
