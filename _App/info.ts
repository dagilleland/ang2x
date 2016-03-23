import {Component} from 'angular2/core';

@Component({
    selector: "about-info",
    templateUrl: "components/about.html"
})
export class Info {
    version: string = "0.0.1"
}