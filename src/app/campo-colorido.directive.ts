import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {
  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') color: string;

  @HostListener('focus') onFocus() {
    this.color = this.cor;
  }

  @HostListener('blur') onBlur() {
    this.color = 'transparent';
  }
}
