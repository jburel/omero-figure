module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8000/'],
      startServerCommand: 'cd demo && python -m SimpleHTTPServer',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};