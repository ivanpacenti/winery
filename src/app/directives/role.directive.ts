import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appRole]',
})
export class RoleDirective {
  private currentRole: string | null = null;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.authService.role$.subscribe((role) => {
      this.currentRole = role;
      this.updateView();
    });
  }

  @Input() set appRole(allowedRoles: string[]) {
    this.allowedRoles = allowedRoles;
    this.updateView();
  }

  private allowedRoles: string[] = [];

  private updateView() {
    if (this.currentRole && this.allowedRoles.includes(this.currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
