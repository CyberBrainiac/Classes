import './src/classes.js';

window.addEventListener('error', (event) => {
  console.error('An error occurred:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

console.log('Application initialized');