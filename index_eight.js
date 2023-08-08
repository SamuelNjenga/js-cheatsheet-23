// Promises with finally
promise
 .then((result) => { ...})
 .error((error) => { ...})
 .finally(() => {/** logic independent of success or error */})
 /** The handler is called when the promise is fulfilled or rejected */
