import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { CreateTeacherDto, TeacherResponseDto, UpdateTeacherDto } from './dto/teacher.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeacherService {
    private readonly teachers = teachers

    getTeachers(): TeacherResponseDto[] {
        return this.teachers;    
    }

    getTeacherById(id: string) : TeacherResponseDto {
        return this.teachers.find(teacher => teacher.id === id);
    }

    createTeacher(payload: CreateTeacherDto): TeacherResponseDto {
        let newTeacher: TeacherResponseDto = {
            id: uuid(),
            ...payload
        }
        this.teachers.push(newTeacher);
        return newTeacher;
    }

    updateTeacher(id: string, payload: UpdateTeacherDto) {
        let updateData : TeacherResponseDto = {
            id,
            ...payload
        } 
        this.teachers.map(teacher => {
            if(teacher.id === id) {
                return updateData;
            } else {
                return teacher;
            }
        })
        return this.teachers.find(teacher => teacher.id === id);
    }
}
