export function numberToText(n) {
    n = n.toString();
    let s = '';
  
    function onesDigit(n) {
      switch (n) {
        case '1':
          s += ' one';
          break;
        case '2':
          s += ' two';
          break;
        case '3':
          s += ' three';
          break;
        case '4':
          s += ' four';
          break;
        case '5':
          s += ' five';
          break;
        case '6':
          s += ' six';
          break;
        case '7':
          s += ' seven';
          break;
        case '8':
          s += ' eight';
          break;
        case '9':
          s += ' nine';
          break;
      }
    }
  
    function teens(n) {
      switch (n) {
        case '0':
          s += ' ten';
          break;
        case '1':
          s += ' eleven';
          break;
        case '2':
          s += ' twelve';
          break;
        case '3':
          s += ' thirteen';
          break;
        case '4':
          s += ' fourteen';
          break;
        case '5':
          s += ' fifteen';
          break;
        case '6':
          s += ' sixteen';
          break;
        case '7':
          s += ' seventeen';
          break;
        case '8':
          s += ' eighteen';
          break;
        case '9':
          s += ' nineteen';
          break
      }
    }
  
    function tensDigit(n) {
      switch (n) {
        case '2':
          s += ' twenty';
          break;
        case '3':
          s += ' thirty';
          break;
        case '4':
          s += ' forty';
          break;
        case '5':
          s += ' fifty';
          break;
        case '6':
          s += ' sixty';
          break;
        case '7':
          s += ' seventy';
          break;
        case '8':
          s += ' eighty';
          break;
        case '9':
          s += ' ninety';
          break;
      }
    }
  
    function hundredsDigit(n) {
      switch (n) {
        case '1':
          s += ' one hundred';
          break;
        case '2':
          s += ' two hundred';
          break;
        case '3':
          s += ' three hundred';
          break;
        case '4':
          s += ' four hundred';
          break;
        case '5':
          s += ' five hundred';
          break;
        case '6':
          s += ' six hundred';
          break;
        case '7':
          s += ' seven hundred';
          break;
        case '8':
          s += ' eight hundred';
          break;
        case '9':
          s += ' nine hundred';
          break;
      }
    }
  
    if (n == '0') {
      s = 'zero';
    } else if (n.length == 1) {
      onesDigit(n);
    } else if (n.length == 2 && n[0] == 1) {
      teens(n[1]);
    } else if (n.length == 2 && n[0] != 1) {
      tensDigit(n[0]);
      onesDigit(n[1]);
    } else if (n.length == 3 && n[1] == 1) {
      hundredsDigit(n[0]);
      teens(n[2]);
    } else if (n.length == 3 && n[1] != 1) {
      hundredsDigit(n[0]);
      tensDigit(n[1]);
      onesDigit(n[2]);
    }
  
    return s.trim();
  }
  