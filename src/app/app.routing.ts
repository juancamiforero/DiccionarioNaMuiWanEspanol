import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PalabraComponent } from './components/palabra/palabra.component';

const routes: Routes = [
    { path: 'palabra/:id', component: PalabraComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{}