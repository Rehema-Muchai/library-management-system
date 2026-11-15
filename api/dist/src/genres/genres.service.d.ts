import { PrismaService } from '../prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenresService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
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
    update(id: number, dto: UpdateGenreDto): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
}
