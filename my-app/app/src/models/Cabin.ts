
export interface Cabin {
	id: string;
	name: string;
	location: string;
	price: number;
	capacity: number;
	amenities: string[];
	weather: string;
	rating: number;
	photos: string[];
	videos?: string[];
	cancellationPolicy: string;
	categories: string[];
}