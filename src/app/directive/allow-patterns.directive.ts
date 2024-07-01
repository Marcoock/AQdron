import { Directive, HostListener, Input, OnInit } from '@angular/core';

const ALLOW_KEYS:{[key: string]:boolean}={
  'ArrowLeft': true,
  'ArrowRight': true,
  'Backspace': true
}

@Directive({
  selector: 'input [allowPatterns]'
})
export class AllowPatternsDirective implements OnInit{

  @Input() allowPatterns = '';

  @HostListener('keydown',['$event'])

  private onKeydown(event : KeyboardEvent){
    console.log(event)
    const key = event.key
    if (ALLOW_KEYS[key]) {
      return true
    }
    const isValid = new RegExp(this.allowPatterns).test(key)
    return isValid
  }

  constructor() { }

  ngOnInit(): void {
      console.log(this.allowPatterns)
  }

}
