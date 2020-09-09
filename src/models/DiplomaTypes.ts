export declare namespace DiplomaTypes {
  export interface Curriculum {
    terms: Semester[];
    extras: Extra[];
  }

  export interface Semester {
    name: string;
    courses: Course[];
  }

  export interface Course {
    courseName: string;
    books: Book[];
  }

  export interface Book {
    name: string;
    url: string;
    coverImg: string;
    startDate: string;
    endDate: string;
    progress: number;
  }

  export interface Extra {
    title: string;
    books: Book[];
  }
}
