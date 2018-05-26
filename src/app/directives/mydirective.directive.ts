import { Directive,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private  re:Renderer2,private el:ElementRef) {
    re.setStyle(el.nativeElement,'color','yellow');
   }

}
