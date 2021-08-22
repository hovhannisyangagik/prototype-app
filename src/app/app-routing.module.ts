import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ListComponent } from './contacts/list/list.component';

const routes: Routes = [
  {
    path: '',
    component:ContactsComponent
  },
  {
      path:'list',
      component:ListComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
