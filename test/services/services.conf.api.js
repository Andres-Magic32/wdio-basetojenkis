require('dotenv').config();

exports.config = {
  urlFinerioConnect() {
    if (process.env.ENVIRONMENT === 'prod') {
      return 'https://api-v2.finerio.mx';
    }
    return `https://api-v2-${process.env.ENVIRONMENT}.finerio.mx`;
  },
};
