"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('Start seeding...');
    await prisma.review.deleteMany();
    await prisma.book.deleteMany();
    await prisma.genre.deleteMany();
    await prisma.user.deleteMany();
    console.log('Cleared existing data.');
    const genres = await prisma.genre.createMany({
        data: [
            { name: 'Science Fiction', slug: 'science-fiction' },
            { name: 'Fantasy', slug: 'fantasy' },
            { name: 'History', slug: 'history' },
            { name: 'Non-Fiction', slug: 'non-fiction' },
        ],
    });
    console.log(`Created ${genres.count} genres.`);
    const sciFi = await prisma.genre.findUniqueOrThrow({ where: { slug: 'science-fiction' } });
    const fantasy = await prisma.genre.findUniqueOrThrow({ where: { slug: 'fantasy' } });
    const history = await prisma.genre.findUniqueOrThrow({ where: { slug: 'history' } });
    const nonFiction = await prisma.genre.findUniqueOrThrow({ where: { slug: 'non-fiction' } });
    const books = await prisma.book.createMany({
        data: [
            { title: 'Dune', author: 'Frank Herbert', isbn: '978-0441172719', totalCopies: 5, availableCopies: 5, genreId: sciFi.id },
            { title: 'Foundation', author: 'Isaac Asimov', isbn: '978-0553293357', totalCopies: 3, availableCopies: 3, genreId: sciFi.id },
            { title: 'Neuromancer', author: 'William Gibson', isbn: '978-0441569595', totalCopies: 2, availableCopies: 2, genreId: sciFi.id },
            { title: 'The Martian', author: 'Andy Weir', isbn: '978-0553418026', totalCopies: 4, availableCopies: 4, genreId: sciFi.id },
            { title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '978-0547928227', totalCopies: 6, availableCopies: 6, genreId: fantasy.id },
            { title: 'Harry Potter', author: 'J.K. Rowling', isbn: '978-0590353427', totalCopies: 10, availableCopies: 10, genreId: fantasy.id },
            { title: 'A Game of Thrones', author: 'George R.R. Martin', isbn: '978-0553103540', totalCopies: 4, availableCopies: 4, genreId: fantasy.id },
            { title: 'The Name of the Wind', author: 'Patrick Rothfuss', isbn: '978-0756404741', totalCopies: 3, availableCopies: 3, genreId: fantasy.id },
            { title: 'Sapiens', author: 'Yuval Noah Harari', isbn: '978-0062316097', totalCopies: 5, availableCopies: 5, genreId: history.id },
            { title: 'The Diary of a Young Girl', author: 'Anne Frank', isbn: '978-0553296983', totalCopies: 4, availableCopies: 4, genreId: history.id },
            { title: '1776', author: 'David McCullough', isbn: '978-0743226721', totalCopies: 2, availableCopies: 2, genreId: history.id },
            { title: 'Team of Rivals', author: 'Doris Kearns Goodwin', isbn: '978-0743270755', totalCopies: 3, availableCopies: 3, genreId: history.id },
            { title: 'Atomic Habits', author: 'James Clear', isbn: '978-0735211292', totalCopies: 8, availableCopies: 8, genreId: nonFiction.id },
            { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', isbn: '978-0374533557', totalCopies: 4, availableCopies: 4, genreId: nonFiction.id },
            { title: 'Educated', author: 'Tara Westover', isbn: '978-0399590504', totalCopies: 3, availableCopies: 3, genreId: nonFiction.id },
            { title: 'Born a Crime', author: 'Trevor Noah', isbn: '978-0399588174', totalCopies: 5, availableCopies: 5, genreId: nonFiction.id },
        ],
    });
    console.log(`Created ${books.count} books.`);
    const hashedLibrarian = await bcrypt.hash('secret123', 10);
    await prisma.user.create({
        data: {
            name: 'Lead Librarian',
            email: 'librarian@example.com',
            password: hashedLibrarian,
            role: 'LIBRARIAN',
        },
    });
    console.log('Seeded librarian user.');
    const hashedPatron = await bcrypt.hash('secret123', 10);
    await prisma.user.create({
        data: {
            name: 'Regular Patron',
            email: 'patron@example.com',
            password: hashedPatron,
            role: 'PATRON',
        },
    });
    console.log('Seeded patron user.');
    console.log('Seeding finished.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map