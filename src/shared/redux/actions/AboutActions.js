export const loadAbout = () => ({
  type:    'LOAD_ABOUT',
  role:    'primary',
  promise: client => client.get('/about'),
});
