import { GenresService } from './genres.service.js';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresController {
    private readonly genresService;
    constructor(genresService: GenresService);
    create(dto: CreateGenreDto): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    findAll(): Promise<({
        _count: {
            books: number;
        };
    } & {
        id: number;
        name: string;
        slug: string;
    })[]>;
    findOne(id: string): Promise<{
        books: {
            id: number;
            title: string;
            author: string;
            isbn: string;
            totalCopies: number;
            genreId: number;
            availableCopies: number;
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
    }>;
    update(id: string, dto: UpdateGenreDto): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
}
