import { Controller, Get, Param, Put } from '@nestjs/common';
import { StudentResponseDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:id/students')
export class StudentTeacherController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudentsByTeacherId(@Param('id') id: string): StudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(id);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('id') id: string,
        @Param('studentId') studentId: string,
    ): StudentResponseDto {
        return this.studentService.updateStudentTeacher(id, studentId);
    }
}
