import { Movie } from "./Movie";

export type APIResponse = {
    page: number;
    results: Movie[],
    total_pages: number;
    total_result: number;
}