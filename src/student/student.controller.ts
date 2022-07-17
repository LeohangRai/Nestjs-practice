import { Controller, Get, Post, Put } from "@nestjs/common";

@Controller('students')
export class StudentController {
    @Get()
    getStudents(){
        return {
            code: 200,
            msg: "Returning all the students!"
        }
    }

    @Get('/:id')
    getStudentBydId(){
        return {
            code: 200,
            msg: "Get student by ID"
        }
    }

    @Post()
    createStudent(){
        return {
            code: 200,
            msg: 'Create a student'
        }
    }

    @Put('/:id')
    updateStudent(){
        return {
            code: 200,
            msg: 'Update student by ID'
        }
    }
}