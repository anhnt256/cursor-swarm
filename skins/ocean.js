/*
 * Skin: Ocean
 * Author: YOUR-GITHUB-USERNAME
 * Deep blues and sea-glass greens over a dark navy background, medium dots with glow on.
 */
window.SwarmRegistry.registerSkin({
  id: 'ocean',                  // unique, lowercase, no spaces
  name: 'Ocean',                // shown in the dropdown
  author: 'YOUR-GITHUB-USERNAME',
  colors: ['#00c2ff', '#0077ff', '#00ffd0', '#9be7ff'],  // dot colors, cycled
  radius: 3,                    // dot size in pixels
  glow: true,                   // true = soft neon glow
  trail: 0.30,                  // 0.05 = very long trails … 1 = no trails
  background: '#04121f'         // page background color
});

