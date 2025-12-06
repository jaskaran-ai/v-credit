export const ENV = {
  DEBUG: true,
  DEV: {
    BASE_URL: 'https://dev.mycreditbook.com/api/v1/',
    IMAGE_URL: 'https://dev.mycreditbook.com/public/images/',
  },
  PRO: {
    BASE_URL: 'http://13.203.200.232/api/v1/',
    IMAGE_URL: 'http://13.203.200.232/public/images/',
  },
  LOCAL: {
    BASE_URL: 'http://127.0.0.1:8000/api/v1/',
    IMAGE_URL: 'http://127.0.0.1:8000/public/images/',
  },
};
