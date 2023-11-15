import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgxUnless]'
})
export class NgxUnlessDirective {
  visible = false;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { 


    }

  @Input()
  set appNgxUnless(condition: boolean){
    if(!condition && !this.visible){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible=true;
    } else if(condition && this.visible){
      this.viewContainer.clear();
      this.visible=false;
    }
  }

}
