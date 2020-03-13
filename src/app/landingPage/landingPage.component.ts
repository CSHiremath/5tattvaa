import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // 
    }
    loadMoreTestimonials(){
        console.log("loading");
    }
    submit(){
       console.log("Submit Called"); 
    }
    submitSuggestions(){
        console.log("submitSuggestions Called"); 
    }
}
