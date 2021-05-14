import { notification } from 'antd';

const moduleHelpers = {
  retryImport: (fn, retiresLeft = 5, interval = 1000) => new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retiresLeft === 1) {
            reject(error);
          }
          if (retiresLeft === 3) {
            notification.warn({
              message: 'Slow Network Detected',
              description: "We've detected that you're on a slow network, grab a cup of coffee this could some moments",
              duration: 30,
            });
          }
          moduleHelpers.retryImport(fn, retiresLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  }),
};

export default moduleHelpers;
