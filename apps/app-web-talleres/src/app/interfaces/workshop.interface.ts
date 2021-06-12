import { Instructor } from './instructor.interface';
export interface Workshop {
    id: number;
    name: string;
    description: string;
    date: string;
    image: string;
    slug: string;
    instructor: Instructor;
}
