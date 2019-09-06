import {FormControl} from '@angular/forms';

export  function checkEmail(control: FormControl): object {
  if (/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test( control.value )) {
    return null;
  }
  return {
    'hasError': true
  };
}

export  function checkphone(control: FormControl): object {
  const firstChar = control.value.substring(0, 1);
  if (firstChar !== '0' || control.value.length  < 10) {
    return {
      'hasError': true
    };
  }
  return null;
}
