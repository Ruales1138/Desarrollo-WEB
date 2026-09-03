import type { Cabin } from '../models/Cabin';

export const CABINS: Cabin[] = [
	{
		id: '1',
		name: 'Cabaña Alpina El Refugio',
		location: 'Guatavita, Cundinamarca',
		price: 280000,
		capacity: 4,
		amenities: ['Jacuzzi privado', 'Malla catamarán', 'Zona de fogata', 'Wifi high-speed'],
		weather: 'Frío (14°C)',
		rating: 4.9,
		photos: [
			'https://images.unsplash.com/photo-1587061949409-02df41d5e562',
			'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
		],
		videos: ['https://example.com/video.mp4'],
		cancellationPolicy: 'Cancelación gratuita hasta 48h antes',
		categories: ['Glamping', 'Romántica'],
	},
	{
		id: '2',
		name: 'Casa Bosque La Aurora',
		location: 'Silvania, Cundinamarca',
		price: 350000,
		capacity: 6,
		amenities: ['Vista al bosque', 'Chimenea', 'Cocina equipada', 'Pet friendly'],
		weather: 'Templado (19°C)',
		rating: 4.8,
		photos: [
			'https://images.unsplash.com/photo-1542718610-a1d656d1884c',
			'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8',
		],
		cancellationPolicy: 'Cancelación gratuita hasta 72h antes',
		categories: ['Bosque', 'Familiar'],
	},
];
