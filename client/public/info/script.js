 function openTab(event, tabId) {
    // Hide all tab panels
    const tabPanels = document.querySelectorAll('.tab-panel');
    tabPanels.forEach(panel => panel.classList.remove('active'));
  
    // Remove active class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));
  
    // Show the selected tab panel
    document.getElementById(tabId).classList.add('active');
  
    // Add active class to the clicked tab link
    event.currentTarget.classList.add('active');
  }
