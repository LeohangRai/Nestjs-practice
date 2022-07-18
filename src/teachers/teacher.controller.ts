import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";


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
    getTeacherById(
        @Param('id') id:string
    ) {
        return {
            code: 200,
            msg: `Get teacher with ID ${id}`
        }
    }

    @Post()
    createTeacher(
        @Body() body
    ) {
        return {
            code: 200,
            msg: `Create a teacher with the following data ${JSON.stringify(body)}`
        }
    }

    @Put('/:id')
    updateTeacher(
        @Param('id') id:string,
        @Body() body
    ) {
        return {
            code: 200,
            msg: `Update a teacher of ID ${id} with the follwing data ${JSON.stringify(body)}`
        }
    }
}