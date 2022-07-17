import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { TeachersController } from 'src/teachers/teacher.controller';
import { StudentTeacherController } from 'src/teachers/student.controller';
@Module({
  imports: [],
  controllers: [StudentController, TeachersController, StudentTeacherController],
  providers: [],
})
export class AppModule {}
