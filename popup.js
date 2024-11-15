document.getElementById('changeColor').addEventListener('click', () => {
    const color = document.getElementById('colorPicker').value;
  
    // Run a script in the current tab to change the background color
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: changeBackgroundColor,
        args: [color]
      });
    });
  });
  
  // Function to be executed on the webpage to change the background color
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  };