import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import {
    CreateStudentDto,
    StudentResponseDto,
    UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): StudentResponseDto[] {
        return this.students;
    }

    getStudentById(id: string): StudentResponseDto {
        return this.students.find((student) => student.id === id);
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        const newStudent: StudentResponseDto = {
            id: uuid(),
            ...payload,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(id: string, payload: UpdateStudentDto) {
        const updateData: StudentResponseDto = {
            id,
            ...payload,
        };
        const updatedStudentsList = this.students.map((student) => {
            if (student.id === id) {
                return updateData;
            }
            return student;
        });
        this.students = updatedStudentsList;
        return this.students.find((student) => student.id === id);
    }

    getStudentsByTeacherId(id: string): StudentResponseDto[] {
        return this.students.filter((student) => student.teacher === id);
    }

    /* updates the teacherId of the given student */
    updateStudentTeacher(
        teacherId: string,
        studentId: string,
    ): StudentResponseDto {
        const updatedStudentsList = this.students.map((student) => {
            if (student.id === studentId) {
                student.teacher = teacherId;
                return student;
            }
            return student;
        });
        this.students = updatedStudentsList;
        return this.students.find((student) => student.id === studentId);
    }
}
