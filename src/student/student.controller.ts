import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
    CreateStudentDto,
    GetStudentDto,
    StudentResponseDto,
    UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(): GetStudentDto[] {
        return this.studentService.getStudents();
    }

    @Get('/:id')
    getStudentBydId(@Param('id') id: string): GetStudentDto {
        return this.studentService.getStudentById(id);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
        return this.studentService.createStudent(body);
    }

    @Put('/:id')
    updateStudent(
        @Param('id') id: string,
        @Body() body: UpdateStudentDto,
    ): StudentResponseDto {
        return this.studentService.updateStudent(id, body);
    }
}
