/* Set the width of the side navigation to 250px */
function openMap() {
    document.getElementById("mapContent").style.width = "250px";
    document.getElementsById('mapAside').style.display = 'block';
  }
  
  /* Set the width of the side navigation to 0 */
  function closeMap() {
    document.getElementById("mapContent").style.width = "0";
    document.getElementsById('mapAside').style.display = 'none';
}
//----------------------------------------------------------------------
/* Set the width of the side navigation to 250px */
function openContact() {
    document.getElementById("contactContent").style.width = "250px";
    document.getElementsByTagName('contactAside').style.display = 'block';
  }
  
  /* Set the width of the side navigation to 0 */
  function closeContact() {
    document.getElementById("contactContent").style.width = "0";
    document.getElementsByTagName('contactAside').style.display = 'none';
}
//-----------------------------------------------------------------------
