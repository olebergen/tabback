browser.commands.onCommand.addListener((command) => {
  if (command === 'switch-last-tab') {
    browser.tabs.query({ currentWindow: true }).then((tabs) => {
      const tabsByLastAccessed = tabs.sort((a, b) => b.lastAccessed - a.lastAccessed);
      const lastTabId = tabsByLastAccessed[1].id; // index 0 is the current tab
      browser.tabs.update(lastTabId, { active: true });
    });
  }
});
