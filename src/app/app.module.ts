import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeachersController } from 'src/teachers/teacher.controller';
import { StudentTeacherController } from 'src/teachers/student.controller';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teachers/teacher.service';
@Module({
    imports: [],
    controllers: [
        StudentController,
        TeachersController,
        StudentTeacherController,
    ],
    providers: [StudentService, TeacherService],
})
export class AppModule {}
