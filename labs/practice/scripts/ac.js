(()=> {


  function multiplyBy(num) {
    return function(x) {
      return num*x;
    }
  }

  const double = multiplyBy(2);
  const triple = multiplyBy(3);

  console.log(double(2));
  console.log(triple(3));

  function reportError(section) {
    return function(message) {
      return `${section}: ${message}`
    }
  }

  const reportAppError = reportError('Application');
  const reportSystemError = reportError('System');

  console.log(reportAppError('app error'));
  console.log(reportSystemError('system error'));

  })();