exports.handler = function (event, context, callback) {
  callback(null, {
    statuscode: 200,
    body: "Хэрэглэгчдийн хуудсанд тавтай морилно уу",
  });
};
