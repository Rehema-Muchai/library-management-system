import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(dto: CreateBookDto): Promise<{
        genre: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        availableCopies: number;
    }>;
    findAll(genreId?: string, search?: string, page?: string, limit?: string): Promise<{
        data: ({
            genre: {
                id: number;
                name: string;
                slug: string;
            };
        } & {
            id: number;
            title: string;
            author: string;
            isbn: string;
            totalCopies: number;
            genreId: number;
            availableCopies: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        genre: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        availableCopies: number;
    }>;
    update(id: string, dto: UpdateBookDto): Promise<{
        genre: {
            id: number;
            name: string;
            slug: string;
        };
    } & {
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        availableCopies: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        availableCopies: number;
    }>;
}
