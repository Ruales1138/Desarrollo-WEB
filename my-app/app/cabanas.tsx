import { CabinCard } from './src/components/CabinCard';
import type { Cabin } from './src/components/CabinCard';

const SAMPLE_CABINS: Cabin[] = [
  {
    id: '1',
    nombre: 'Cabaña Alpina El Refugio',
    ubicacion: 'Guatavita, Cundinamarca',
    precio: 280000,
    capacidad: 4,
    comodidades: ['Jacuzzi privado', 'Malla catamarán', 'Zona de fogata', 'Wifi high-speed'],
    clima: 'Frío (14°C)',
    calificacion: 4.9,
    fotos: [
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
    ],
    videos: ['https://example.com/video.mp4'],
    politicaCancelacion: 'Cancelación gratuita hasta 48h antes',
    categorias: ['Glamping', 'Romántica'],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_0%,_#e8efdf_0,_transparent_32%),linear-gradient(145deg,_#f6f4ec_0%,_#e4ede0_100%)] px-5 py-10 text-[#263b2b] sm:px-8 sm:py-16">
      <header className="mx-auto mb-10 max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#71876c]">Colección Refugio · 01</p>
            <h1 className="max-w-2xl font-serif text-4xl leading-[0.95] tracking-tight text-[#203a29] sm:text-6xl">Escápate donde el paisaje respira.</h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#647364]">Cabañas elegidas para descansar lento, despertar con calma y volver a la naturaleza.</p>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl justify-center">
        {SAMPLE_CABINS.map((cabin) => (
          <div key={cabin.id} className="w-full max-w-md">
            <CabinCard cabin={cabin} />
          </div>
        ))}
      </div>
    </main>
  );
}