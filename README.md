# Angular4 Helper

This is just an Angular Service that contains methods of the problems that I have encountered during development.

### Dependencies

  - Angular ^4.0.0
  - Underscore.js

### Install dependency
**Underscore.js**
1. Install underscorejs in your library
```sh
$ npm install underscore --save
$ npm install @types/underscore --save
```
2. Edit `tsconfig.app.json` and add underscore to array `types`
```sh
"types": [
    "underscore"
]
```

### How to use
1. Import `HelperService` in your Component
```sh
import { HelperService } from 'location/helper.service';
```
2. Add `HelperService` as a provider
```sh
@Component({
    ...
    providers: [HelperService]
})
```
3. Add `HelperService` in the constructor as private parameter
```sh
constructor(
    private helper: HelperService
) { }
```

### Methods
**getRouteData(Router, fn): void**
> A subscriber of `router.events` that gets the data of the activated route. Data is passed through the callback, as well as the instanced Subscriber of the event.

Route:
```sh
{
    path: '/home',
    component: HomeComponent,
    data: {foo: 'foo', bar: 'bar'}
}
```

Component:
```sh
routerSubscriber: any;

constructor(
    private router: Router,
    private helper: HelperService
) {
    helper.getRouteData(router, (routeData, subscriber) => {
        console.log(routeData.foo);
        console.log(routeData.bar);
    });
}

ngOnDestroy() {
    this.routerSubscriber.unsubscribe();
}
```