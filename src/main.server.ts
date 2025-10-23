import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';

// Server-side bootstrap must return an ApplicationRef (or a factory that
// resolves to one). Bootstrap the AppModule and return its ApplicationRef.
const bootstrap = async (): Promise<ApplicationRef> => {
	const moduleRef = await platformBrowserDynamic().bootstrapModule(AppModule);
	return moduleRef.injector.get(ApplicationRef);
};

export default bootstrap;
