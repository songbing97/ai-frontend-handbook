class MyPromise {
  constructor(fn) {
    this.status = 'pending';
    this.value = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.value = value;
        this.onResolvedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    };

    const reject = (reason) => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.value = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason);
        });
      }
    };

    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
    onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason; };

    return new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.value);
            resolve(x);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === 'pending') {
        this.onResolvedCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const x = onFulfilled(value);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const x = onRejected(reason);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const fulfilledCount = 0;
      const values = new Array(promises.length);

      function handleResolve(index, value) {
        values[index] = value;
        fulfilledCount++;

        if (fulfilledCount === promises.length) {
          resolve(values);
        }
      }

      promises.forEach((promise, index) => {
        promise.then((value) => {
          handleResolve(index, value);
        }).catch((reason) => {
          reject(reason);
        });
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then((value) => {
          resolve(value);
        }).catch((reason) => {
          reject(reason);
        });
      });
    });
  }
}


// Test
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 1000);
});

promise.then((value) => {
  console.log(value); // 输出 'Success'
}).catch((reason) => {
  console.error(reason);
});
