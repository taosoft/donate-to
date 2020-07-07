import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
// import { QuestionsEditComponent } from './questions-edit/questions-edit.component';
// import { QuestionsCreateComponent } from './questions-create/questions-create.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    children: [
      // { path: 'create', component: QuestionsCreateComponent },
      // { path: 'edit/:Id', component: QuestionsEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
