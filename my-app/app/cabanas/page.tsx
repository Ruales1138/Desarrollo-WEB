import { CabinCard } from '../src/components/CabinCard2';
import { CABINS } from '../src/data/cabañas';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe5] text-[#10253d]">
      <section className="relative bg-[#10253d] px-5 pb-20 pt-6 text-[#f8f1e5] sm:px-10 sm:pb-28 sm:pt-8">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between border-b border-white/15 pb-5">
            <a href="#inicio" className="font-serif text-2xl tracking-tight text-[#ff765d]">nómada.</a>
            <div className="hidden items-center gap-8 text-sm text-[#c9d2d8] sm:flex">
              <a href="#coleccion" className="transition-colors hover:text-white">La colección</a>
              <a href="#historia" className="transition-colors hover:text-white">Nuestra mirada</a>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff765d]" />
            </div>
            <a href="#reservar" className="rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white hover:text-[#10253d]">Entrar</a>
          </nav>

          <div id="inicio" className="grid items-end gap-12 pt-16 lg:grid-cols-[1fr_0.7fr] lg:pt-24">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-[#ff765d]">Diario de escapadas · 2024</p>
              <h1 className="max-w-4xl font-serif text-6xl leading-[0.86] tracking-[-0.04em] sm:text-8xl">Dormir<br /><em className="font-normal text-[#ff765d]">afuera.</em></h1>
            </div>
            <div className="max-w-sm pb-1 lg:justify-self-end">
              <p className="mb-7 text-lg leading-relaxed text-[#c9d2d8]">Cabañas con carácter para quienes prefieren el mapa doblado y la mañana sin prisa.</p>
              <a href="#coleccion" className="inline-flex items-center gap-3 rounded-full bg-[#ff765d] px-5 py-3 text-sm font-bold text-[#10253d] transition-transform hover:translate-x-1">Ver la selección <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute -bottom-14 right-[-2rem] h-40 w-40 rounded-full border-[1.5rem] border-[#ff765d] sm:right-[8%]" />
      </section>

      <section id="coleccion" className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-[0.65fr_1fr] lg:gap-20">
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#d45e4b]">01 / Guatavita</p>
            <h2 className="max-w-sm font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Una pausa con vista propia.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#64717b]">Una colección pequeña de lugares que merecen convertirse en recuerdo.</p>
          </div>
          <div className="mt-12 border-l-2 border-[#ff765d] pl-5 text-sm text-[#64717b]">
            <p className="font-bold text-[#10253d]">En esta edición</p>
              <p className="mt-1">{CABINS.length} cabañas · 2 noches mínimas · 0 prisa</p>
          </div>
        </div>

        <div className="relative lg:pt-8">
          <div aria-hidden="true" className="absolute -right-3 -top-2 hidden text-7xl font-serif text-[#ff765d]/30 lg:block">✳</div>
          {CABINS.map((cabin) => (
            <div key={cabin.id} className="mx-auto w-full max-w-md lg:ml-auto">
              <CabinCard cabin={cabin} />
            </div>
          ))}
        </div>
      </section>

      <footer id="historia" className="border-t border-[#d9d0c2] px-5 py-7 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#89919a] sm:flex-row">
          <span>nómada. / lugares para quedarse</span>
          <span>Hecho para perderse un poco</span>
        </div>
      </footer>
    </main>
  );
}