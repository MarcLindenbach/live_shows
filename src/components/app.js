import React from 'react';
import Navbar from './nav_bar';
import Shows from './shows';

/* Live Show App Component
 * Displays the navbar and shows components
 * In a larger instead of the shows component I would probably use react-router to display
 * the correct component based on the route
 */
const App = () => (
  <div>
    <Navbar />
    <Shows />
  </div>
);

export default App;
