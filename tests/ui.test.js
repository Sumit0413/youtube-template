const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.resolve(__dirname, '../public/index.html'),
  'utf8'
);

document.body.innerHTML = html;

// NAVBAR
test('navbar exists', () => {
  expect(document.querySelector('.navbar')).not.toBeNull();
});

// SEARCH INPUT
test('search input exists', () => {
  expect(document.querySelector('input')).not.toBeNull();
});

// SIDEBAR
test('sidebar exists', () => {
  expect(document.querySelector('.sidebar')).not.toBeNull();
});

// VIDEO GRID
test('video grid exists', () => {
  expect(document.querySelector('.video-grid')).not.toBeNull();
});

// VIDEO CARDS
test('at least 4 videos exist', () => {
  const videos = document.querySelectorAll('.video-card');
  expect(videos.length).toBeGreaterThanOrEqual(4);
});

// VIDEO CONTENT
test('each video has title and channel', () => {
  const videos = document.querySelectorAll('.video-card');

  videos.forEach(video => {
    expect(video.querySelector('.video-title')).not.toBeNull();
    expect(video.querySelector('.video-channel')).not.toBeNull();
  });
});