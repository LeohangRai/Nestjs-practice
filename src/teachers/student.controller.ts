import { Body, Controller, Get, Param, Put } from "@nestjs/common";

@Controller('teachers/:id/students')
export class StudentTeacherController {
    @Get() 
    getStudentsByTeacherId(
        @Param('id') id:string
    ) {
        return {
            code: 200,
            msg: `Get all students associated with the teacher of ID ${id}`
        }
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('id') id:string,
        @Param('studentId') studentId:string,
        @Body() body
    ) {
        return {
            code: 200,
            msg: `Update student of ID ${studentId} associated with the teacher of ID ${id} with the following data ${JSON.stringify(body)}`
        };
    }
}