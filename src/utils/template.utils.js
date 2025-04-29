  export const renderTemplate = (res, view, data) => {
    return new Promise((resolve, reject) => {
      res.render(view, data, (err, html) => {
        if (err) reject(err);
        else resolve(html);
      });
    });
  };