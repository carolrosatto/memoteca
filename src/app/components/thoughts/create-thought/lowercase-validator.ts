import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  const author = control.value as string;
  if (author !== author?.toLowerCase()) {
    return { lowercase: true };
  } else {
    return null;
  }
}
