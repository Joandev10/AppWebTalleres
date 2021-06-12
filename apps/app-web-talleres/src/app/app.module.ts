import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { WorkshopsView } from './views/workshops/workshops.view';
import { PortalView } from './views/portal/portal.view';
import { NotFoundView } from './views/not-found/not-found.view';
import { WorkshopDetailView } from './views/workshop-detail/workshop-detail.view';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { GlxHeaderModule } from '@galaxy/components/header';
import { GlxFooterModule } from '@galaxy/components/footer';
import { GlxButtonModule } from '@galaxy/components/button';
import { GlxIconModule } from '@galaxy/components/icon';
import { GlxCardModule } from '@galaxy/components/card';
import { ReactiveFormsModule } from '@angular/forms';

/*Pipes*/
import { ImagePathPipe } from './pipes/image-path.pipe';

/*Interceptors */
import { ConfigHttpInterceptor } from './interceptors/config-http.interceptor';

@NgModule({
    declarations: [AppComponent, WorkshopsView, PortalView, NotFoundView, WorkshopDetailView, ImagePathPipe],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GlxHeaderModule,
        GlxFooterModule,
        GlxButtonModule,
        GlxIconModule,
        GlxCardModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ConfigHttpInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
