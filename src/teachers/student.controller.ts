import { Controller, Get, Put } from "@nestjs/common";

@Controller('teachers/:id/students')
export class StudentTeacherController {
    @Get() 
    getStudentsByTeacherId() {
        return {
            code: 200,
            msg: "Get all students associated with a teacher"
        }
    }

    @Put('/:studentId')
    updateStudentTeacher() {
        return {
            code: 200,
            msg: "Update student by Teacher ID"
        };
    }
}