import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { TaskModule } from './components/task.module';

@NgModule({
  declarations: [AppComponent, InboxScreenComponent, PureInboxScreenComponent],
  exports: [TaskModule],
  imports: [BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
