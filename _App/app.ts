import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';

function compileToComponent(template:string, directives:any[]) {
  @Component({ 
    selector: 'fake', 
    template , directives
  })
  class FakeComponent {};
  return FakeComponent;
}


@Component({
  selector: 'hello',
  template: '<h1>Hello, Angular!</h1>'
})
class Hello {}

@Component({
    selector: 'core-app',
    templateUrl: 'components/app.html',
    directives: [Hello]
})
export class App {
    constructor(protected loader: DynamicComponentLoader, protected elementRef: ElementRef) {
  }
  ngOnInit() {
    const someDynamicHtml = `<hello></hello><h2>${Date.now()}</h2>`;

    this.loader.loadIntoLocation(
      compileToComponent(someDynamicHtml, [Hello]),
      this.elementRef,
      'container'
    );
  }
}
