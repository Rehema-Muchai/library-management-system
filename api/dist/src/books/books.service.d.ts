import { PrismaService } from '../prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
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
    update(id: number, dto: UpdateBookDto): Promise<{
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
    remove(id: number): Promise<{
        id: number;
        title: string;
        author: string;
        isbn: string;
        totalCopies: number;
        genreId: number;
        availableCopies: number;
    }>;
}
