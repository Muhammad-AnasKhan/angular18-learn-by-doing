import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeacherCompComponent } from './components/01-teacher-comp/teacher-comp.component';
import { StudentsCompComponent } from './components/02-students-comp/students-comp.component';
import { DataBindingComponent } from './components/03-data-binding/data-binding.component';
import { StructuralDirComponent } from './components/04-directives/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/04-directives/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,TeacherCompComponent,StudentsCompComponent,DataBindingComponent,StructuralDirComponent, AttributeDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myNgApp';
}
