import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import {
    CreateTeacherDto,
    TeacherResponseDto,
    UpdateTeacherDto,
} from './dto/teacher.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeacherService {
    private teachers = teachers;

    getTeachers(): TeacherResponseDto[] {
        return this.teachers;
    }

    getTeacherById(id: string): TeacherResponseDto {
        return this.teachers.find((teacher) => teacher.id === id);
    }

    createTeacher(payload: CreateTeacherDto): TeacherResponseDto {
        const newTeacher: TeacherResponseDto = {
            id: uuid(),
            ...payload,
        };
        this.teachers.push(newTeacher);
        return newTeacher;
    }

    updateTeacher(id: string, payload: UpdateTeacherDto) {
        const updateData: TeacherResponseDto = {
            id,
            ...payload,
        };
        const updatedTeachersList = this.teachers.map((teacher) => {
            if (teacher.id === id) {
                return updateData;
            } else {
                return teacher;
            }
        });
        this.teachers = updatedTeachersList;
        return this.teachers.find((teacher) => teacher.id === id);
    }
}
