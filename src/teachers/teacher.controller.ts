import { Controller, Get, Post, Put } from "@nestjs/common";


@Controller('teachers')
export class TeachersController {

    @Get()
    getTeachers() {
        return {
            code: 200,
            msg: "Get all teachers"
        }
    }

    @Get('/:id')
    getTeacherById() {
        return {
            code: 200,
            msg: "Get teacher by ID"
        }
    }

    @Post()
    createTeacher() {
        return {
            code: 200,
            msg: "Create a teacher"
        }
    }

    @Put('/:id')
    updateTeacher() {
        return {
            code: 200,
            msg: "Update a teacher by ID"
        }
    }
}