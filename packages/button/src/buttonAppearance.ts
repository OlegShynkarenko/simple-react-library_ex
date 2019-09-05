export const buttonAppearance = {
  default: {
    color: 'rgb(80, 95, 121)',
    background: 'rgba(9, 30, 66, 0.04)',
    '&:hover': {
      background: 'rgba(9, 30, 66, 0.08)'
    },
    '&:active': {
      background: 'rgba(179, 212, 255, 0.6)',
      color: 'rgb(0, 82, 204)'
    }
  },
  primary: {
    color: '#fff',
    background: 'rgb(0, 82, 204)',
    '&:hover': {
      background: 'rgb(0, 101, 255)',
    },
    '&:active': {
      background: 'rgb(7, 71, 166)',
    }
  },
  warning: {
    color: 'rgb(23, 43, 77)',
    background: 'rgb(255, 171, 0)',
    '&:hover': {
      background: 'rgb(255, 196, 0)',
    },
    '&:active': {
      background: 'rgb(255, 153, 31)',
    }
  },
  danger: {
    color: '#fff',
    background: 'rgb(222, 53, 11)',
    '&:hover': {
      background: 'rgb(255, 86, 48)',
    },
    '&:active': {
      background: 'rgb(191, 38, 0)',
    }
  }
};