import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
=======
import { HeaderComponent } from './header/header.component';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    RecipesComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent
=======
    HeaderComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
