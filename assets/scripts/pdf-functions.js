function openPDFInOverlay() {
  const clickedButton = event.target;  // Get the button that was clicked

  // Ensure it's a talent button
  if (!clickedButton.classList.contains('talent-button')) {
    return;  // Do nothing if not a talent button
  }

  const pdfURL = clickedButton.dataset.pdfUrl;
  const pageNumber = parseInt(clickedButton.dataset.pageNumber, 10);

  // Call the function with retrieved values
  document.getElementById('pdfViewerIframe').src = pdfURL + '#page=' + pageNumber;
  document.getElementById('pdfOverlay').style.display = 'flex'; 
}

// Add event listener to the button container (assuming buttons are inside)
document.getElementById('buttons-container').addEventListener('click', openPDFInOverlay);

function closePDFOverlay() {
  document.getElementById('pdfOverlay').style.display = 'none';
  document.getElementById('pdfViewerIframe').src = ''; // Clear the iframe
}

document.getElementById('closePdfButton').addEventListener('click', closePDFOverlay);