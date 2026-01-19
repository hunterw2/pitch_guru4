import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#070B12] text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B12]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-semibold">Pitch Guru</span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/70">
            <a href="/#features" className="hover:text-white">
              1) Features
            </a>
            <a href="/#pricing" className="hover:text-white">
              2) Pricing
            </a>
          </nav>

          {/* CHANGED: This now routes into the actual app */}
          <Link
            href="/app"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            Open App
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
              BETA
            </span>
            Built for game-day tracking
          </div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Track every pitch.
            <br />
            <span className="text-white/85">Ditch the scorebook.</span>
          </h1>

          <p className="mt-5 max-w-xl text-white/70">
            Pitch Guru gives coaches a fast, clean way to log balls, strikes,
            whiffs, and in-play contact — then instantly shows the metrics that
            matter in the dugout.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {/* CHANGED: This now routes into the actual app */}
            <Link
              href="/app"
              className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
            >
              Start Tracking (Open App)
            </Link>

            <a
              href="/#features"
              className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              1) See features
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              High school
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Travel
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              JuCo / NAIA
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              College bullpens
            </span>
          </div>
        </div>

        {/* Screenshot panel (unchanged placeholder container) */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="rounded-xl border border-white/10 bg-[#0A1220] p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Dugout Dashboard</div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                Recording
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xs text-white/60">Strike %</div>
                <div className="mt-1 text-2xl font-bold">67%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xs text-white/60">Whiff rate</div>
                <div className="mt-1 text-2xl font-bold">32%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xs text-white/60">1st pitch strike</div>
                <div className="mt-1 text-2xl font-bold">71%</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-xs text-white/60">Pitches / inning</div>
                <div className="mt-1 text-2xl font-bold">14.8</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-bold text-black">
                Strike
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold">
                Ball
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold">
                Whiff
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-bold">
                In play
              </div>
            </div>

            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-white/70">
              Fast inputs. Clean outputs. Built for the dugout.
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">1) Features</h2>
        <p className="mt-2 text-white/70">
          Track pitches, whiffs, in-play contact, hitter-by-hitter outcomes, and
          inning flow — without a paper book.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-bold">2) Pricing</h2>
        <p className="mt-2 text-white/70">
          Early access pricing coming soon.
        </p>

        {/* CHANGED: Another clear path into the app */}
        <div className="mt-6">
          <Link
            href="/app"
            className="inline-flex rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-black hover:bg-emerald-400"
          >
            Open App
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070B12]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Pitch Guru</span>
          {/* CHANGED: Footer link into app */}
          <Link href="/app" className="hover:text-white">
            Go to App →
          </Link>
        </div>
      </footer>
    </main>
  );
}
