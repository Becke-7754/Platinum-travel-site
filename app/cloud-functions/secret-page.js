exports.handle = function (events, context, callback) {
  callback(null, {
    statuscode: 200,
    body: "Хэрэглэгчдийн хуудсанд тавтай морилно уу",
  });
};
