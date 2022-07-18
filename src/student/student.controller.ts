import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";

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
    getStudentBydId(
        @Param('id') id: string
    ){
        return {
            code: 200,
            msg: `Get student with ID ${id}`
        }
    }

    @Post()
    createStudent(
        @Body() body
    ){
        return {
            code: 200,
            msg: `Create a student with the following data ${JSON.stringify(body)}`
        }
    }

    @Put('/:id')
    updateStudent(
        @Param('id') id:string,
        @Body() body
    ){
        return {
            code: 200,
            msg: `Update student of ID ${id} with the following data ${JSON.stringify(body)}`
        }
    }
}