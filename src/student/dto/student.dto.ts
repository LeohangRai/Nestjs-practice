export class GetStudentDto {
    id: string;
    name: string;
    teacher: string;
}

export class CreateStudentDto {
    name: string;
    teacher: string;
}

export class UpdateStudentDto {
    name: string;
    teacher: string;
}

// for the response of update and create student controllers
export class StudentResponseDto {
    id: string;
    name: string;
    teacher: string;
}
