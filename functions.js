module.exports = IsAlive;

function IsAlive(ping) {
  try {
    let pingOneSuccess = ping();
    let pingTwoSuccess = ping();
    let pingThreeSuccess = ping();

    if (pingOneSuccess && pingTwoSuccess && pingThreeSuccess)
      return true;
    
    return false;

  } catch (e) {
    return new Error('ping threw exception');
  }

}
