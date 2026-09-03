
interface Pagination {
    totalItems: number;
    page: number;
    limit: number;
}

export const getCabins = () => {

}

// 500 total de items
// 10 limit - cantidad de items: 500 / 10 = 50 paginas
// 0 offset: 1 - 10 => Page 1
// 1 offset: 11 20 => Page 2