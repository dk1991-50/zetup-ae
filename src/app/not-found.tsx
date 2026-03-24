import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-[#FAFCFE]">
        <div className="text-center px-6">
          <h1 className="text-8xl font-bold text-[#2D5F8A] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-4">
            Page Not Found
          </h2>
          <p className="text-[#64748B] mb-8 max-w-md">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/en"
            className="inline-block px-8 py-3 bg-[#2E9B87] text-white font-semibold rounded-lg hover:bg-[#24806F] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </body>
    </html>
  );
}
