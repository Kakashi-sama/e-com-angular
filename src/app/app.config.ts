import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartService } from './Services/cart.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(),
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
    ),
    CartService,
  ]
};

// {
// //import { MatSidenavModule } from '@angular/material/sidenav';
// // import { MatGridListModule } from '@angular/material/grid-list';
// // import { MatMenuModule } from '@angular/material/menu';
// // import { MatButtonModule } from '@angular/material/button';
// // import { MatCardModule } from '@angular/material/card';
// // import { MatIconModule } from '@angular/material/icon';
// // import { MatExpansionModule } from '@angular/material/expansion';
// // import { MatListModule } from '@angular/material/list';
// // import { MatToolbarModule } from '@angular/material/toolbar';
// // import { MatTableModule } from '@angular/material/table';
// // import { MatBadgeModule } from '@angular/material/badge';
// // import { MatSnackBarModule } from '@angular/material/snack-bar';
// //
//   // MatSidenavModule, 
// // MatGridListModule,
// // MatMenuModule,
// // MatButtonModule,
// // MatCardModule,
// // MatIconModule,
// // MatExpansionModule,
// // MatListModule,
// // MatToolbarModule,
// // MatTableModule,
// // MatBadgeModule,
// // MatSnackBarModule,
// }