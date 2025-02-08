// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from '../webui/src/app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(FormsModule) // ✅ Required for ngModel
//   ]
// });
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../webui/src/app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(FormsModule)] // ✅ Add it here
});
