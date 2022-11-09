import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherResponseDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teacherService: TeacherService) {}

    @Get()
    getTeachers(): TeacherResponseDto[] {
        return this.teacherService.getTeachers();
    }

    @Get('/:id')
    getTeacherById(@Param('id') id: string): TeacherResponseDto {
        return this.teacherService.getTeacherById(id);
    }

    @Post()
    createTeacher(@Body() body): TeacherResponseDto {
        return this.teacherService.createTeacher(body);
    }

    @Put('/:id')
    updateTeacher(@Param('id') id: string, @Body() body): TeacherResponseDto {
        return this.teacherService.updateTeacher(id, body);
    }
}
