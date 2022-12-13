import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){}

  transform(value: string, state: string): any {

    if(state === 'NY') {
      //return "State : Empire State";
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffffcc">' + "State : " + 'Empire State' + '</div>');
    }
    else if (state === 'IL') {
      //return "State : Land of Lincoln";
      return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#00FF41">' + "State : " + 'Land of Lincoln' + '</div>');
    }
    return "State : " + state;
   
  }

}
