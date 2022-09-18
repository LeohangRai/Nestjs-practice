import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class StudentService {
    private readonly students = students;

    getStudents(): StudentResponseDto[] {
        return this.students;
    }

    getStudentById(id: string): StudentResponseDto {
        return this.students.find(student => student.id === id)
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        let newStudent: StudentResponseDto = {
            id: uuid(),
            ...payload
        }
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: string, payload: UpdateStudentDto) {
        let updateData : StudentResponseDto  = {
            id,
            ...payload
        };
        this.students.map(student => {
            if(student.id === id) {
                return updateData
            }
            return student;
        });
        return this.students.find(student => student.id === id);
    }

    getStudentsByTeacherId(id: string): StudentResponseDto[] {
        return this.students.filter(student => student.teacher === id);
    }
}
