'use client'

import Spline from '@splinetool/react-spline/next'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background graphic accents */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-cyanPop/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-yellowPop/20 blur-3xl" />

      <div className="container-max relative py-16 md:py-24">
        <div className="mb-8 flex items-center gap-3">
          <span className="badge-pop">
            <span className="inline-block h-2 w-2 rounded-full bg-magentaPop" />
            New Drop
          </span>
          <span className="badge-pop">
            3D Interactive
          </span>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              POP KICKS
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
              A graphic, 90s-inspired sneaker with bold color blocks: vibrant cyan toe, bright yellow side,
              magenta swoosh and sole, deep purple ankle, and bright blue laces and heel. Thick black outlines deliver a
              playful, sticker-like vibe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#buy" className="button-pop button-primary">Shop Now</a>
              <a href="#learn" className="button-pop button-secondary">Learn More</a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm bg-cyanPop" /> Cyan Toe
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm bg-yellowPop" /> Yellow Side
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm bg-magentaPop" /> Magenta Swoosh & Sole
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <span className="inline-block h-3 w-3 rounded-sm bg-purplePop" /> Purple Ankle
              </div>
            </div>
          </div>

          {/* 3D Canvas */}
          <div className="relative z-0">
            <div className="relative aspect-[4/3] w-full rounded-3xl border border-white/10 bg-[#14151b] p-2 shadow-pop">
              <div className="absolute inset-0 overflow-hidden rounded-[1.25rem]">
                <Spline scene="https://prod.spline.design/ePOmODgevPvsTDMV/scene.splinecode" />
              </div>

              {/* Border accents reminiscent of thick outlines */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-black/70" />
              <div className="pointer-events-none absolute -inset-1 rounded-[1.75rem] border-4 border-black/30" />
            </div>

            {/* Color tabs */}
            <div className="mt-4 flex gap-2">
              <span className="h-2 flex-1 rounded-full bg-cyanPop" />
              <span className="h-2 flex-1 rounded-full bg-yellowPop" />
              <span className="h-2 flex-1 rounded-full bg-magentaPop" />
              <span className="h-2 flex-1 rounded-full bg-purplePop" />
              <span className="h-2 flex-1 rounded-full bg-bluePop" />
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-14 grid grid-cols-2 gap-5 text-white/60 sm:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            Free Shipping
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            30-Day Returns
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            Secure Checkout
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            24/7 Support
          </div>
        </div>
      </div>
    </section>
  )
}
