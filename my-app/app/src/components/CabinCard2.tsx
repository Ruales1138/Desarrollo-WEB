'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, Users, Sun, Check, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import type { Cabin } from '../models/Cabin';

interface CabinCardProps {
  cabin: Cabin;
  onBook?: (id: string) => void;
}

export const CabinCard: React.FC<CabinCardProps> = ({ cabin, onBook }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % cabin.photos.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + cabin.photos.length) % cabin.photos.length);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#dfe5d9] bg-[#fffdf8] shadow-[0_20px_50px_-28px_rgba(27,55,37,0.55)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_-28px_rgba(27,55,37,0.65)]">
      {/* Galería de Fotos / Media */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#dce6d8]">
        <Image
          src={cabin.photos[currentImageIndex] || '/placeholder.jpg'}
          alt={cabin.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge de Categoría Principal */}
        {cabin.categories.length > 0 && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#213a2a]/85 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
            {cabin.categories[0]}
          </span>
        )}

        {/* Indicador de Video disponible */}
        {cabin.videos && cabin.videos.length > 0 && (
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-[#fffdf8]/90 px-2.5 py-1.5 text-[11px] font-bold text-[#314635] shadow-sm backdrop-blur-md">
            <Video className="h-3.5 w-3.5 text-[#ba6d45]" />
            Video
          </span>
        )}

        {/* Navegación de Imágenes */}
        {cabin.photos.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#fffdf8]/90 p-2 text-[#314635] shadow-md transition-transform hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#fffdf8]/90 p-2 text-[#314635] shadow-md transition-transform hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
            
            {/* Puntos de navegación */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {cabin.photos.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        {/* Encabezado: Ubicación y Calificación */}
        <div className="flex items-center justify-between text-xs text-[#718073]">
          <div className="flex min-w-0 items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#668363]" />
            <span>{cabin.location}</span>
          </div>
          <div className="ml-3 flex shrink-0 items-center gap-1 font-bold text-[#445b43]">
            <Star className="h-3.5 w-3.5 fill-[#d09a50] text-[#d09a50]" />
            <span>{cabin.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Título */}
        <h3 className="mt-3 line-clamp-2 font-serif text-2xl font-semibold leading-tight text-[#263b2b]">{cabin.name}</h3>

        {/* Info rápida: Capacidad y Clima */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#5d6c5d]">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-[#8b9b88]" />
            <span>{cabin.capacity} huéspedes</span>
          </div>
          <div className="flex items-center gap-1">
            <Sun className="h-4 w-4 text-[#d09a50]" />
            <span>{cabin.weather}</span>
          </div>
        </div>

        {/* Comodidades destacadas (primeras 3) */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {cabin.amenities.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="rounded-lg border border-[#e1e8dc] bg-[#f1f5ed] px-2.5 py-1.5 text-[11px] font-semibold text-[#5a6b59]"
            >
              {item}
            </span>
          ))}
          {cabin.amenities.length > 3 && (
            <span className="self-center text-[11px] font-semibold text-[#8a9688]">
              +{cabin.amenities.length - 3} más
            </span>
          )}
        </div>

        {/* Política de Cancelación */}
        <p className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-[#56805b]">
          <Check className="h-3.5 w-3.5" />
          {cabin.cancellationPolicy}
        </p>

        {/* Separador flex-grow para empujar el footer hacia abajo */}
        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between gap-3 border-t border-[#e5e9df] pt-5">
            {/* Precio */}
            <div>
              <span className="font-serif text-2xl font-semibold text-[#263b2b]">
                ${cabin.price.toLocaleString()}
              </span>
              <span className="text-xs text-[#7b887b]"> / noche</span>
            </div>

            {/* Botón de Reserva */}
            <button
              onClick={() => onBook && onBook(cabin.id)}
              className="rounded-xl bg-[#294d35] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_-10px_#294d35] transition-all hover:bg-[#1f3d29] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#294d35] focus:ring-offset-2 active:scale-95"
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};




