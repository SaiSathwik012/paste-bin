import Head from "next/head";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Head>
        <title>QuickPaste</title>
        <meta
          name="description"
          content="Temporary and secure text sharing"
        />
      </Head>

      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-tight">
              QuickPaste
            </span>
          </div>

          <span className="text-sm text-slate-500 hidden sm:block">
            Secure • Temporary • Simple
          </span>
        </div>
      </header>

      {/* Page */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {children}
      </main>
    </div>
  );
}
