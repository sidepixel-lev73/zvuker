(function() {
  // Function to inject the button
  function injectButton() {
    const targetDiv = document.querySelector('.styles_actions___bSs_');
    const linkDiv = document.querySelector('.styles_link__C5v8A');

    if (targetDiv && linkDiv && !document.getElementById('zvuk-grabber-button')) {
      const baseUrl = "https://zvuk.com" + linkDiv.getAttribute('href');

      // Create the button
      const button = document.createElement('button');
      button.id = 'zvuk-grabber-button';
      button.textContent = 'Launch zvuk-grabber';
      button.style.marginLeft = '10px';

      // Add click event listener
      button.addEventListener('click', () => {
        window.location.href = `zvukgrab://${baseUrl}`;
      });

      // Append the button to the target div
      targetDiv.appendChild(button);
    }
  }

  function createDownloadButton(container, getUrl) {
  // Prevent adding multiple buttons
  if (container.querySelector('.zvuk-grabber-button')) return;

  const button = document.createElement('button');
  button.textContent = 'Download via zvuk-grabber';
  button.className = 'zvuk-grabber-button';
  button.style.marginLeft = '10px';
  button.style.padding = '5px 10px';
  button.style.cursor = 'pointer';

  button.addEventListener('click', () => {
    const url = getUrl();
    if (url) {
      window.location.href = `zvukgrab://${url}`;
    } else {
      console.error('Unable to retrieve the URL.');
    }
  });

  container.appendChild(button);
}

  // Create a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        injectButton();
        const headerButtons = document.querySelector('.HeaderButtons_wrapper__ovnZ7');
        if (headerButtons) {
          createDownloadButton(headerButtons, () => window.location.href);
        }
      }
    }
  });

  // Start observing the document body for added nodes
  observer.observe(document.body, { childList: true, subtree: true });

  // Initial check in case the elements are already present
  injectButton();
})();
