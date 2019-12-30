/**
 * Этот лоадер позволяет трансформировать файлы в base64
 *
 * @example Запрашиваем картинку image.png
 * Если картинка меньше limit, то возвращаем base64 строку
 * Иначе он сложит файл в папку ${prefix}/ и вернет ссылку на папку
 *
 * @param {object} options - префикс
 * @param {string} options.prefix префикс
 * @param {number} options.limit лимит на размер файла в Байтах
 * @return {object} loader конфиг
 */
module.exports = function urlLoader({ limit, prefix }) {
  return {
    loader: "url-loader",
    options: {
      limit: limit,
      mimetype: "application/font-woff",
      name: `${prefix}/[name].[hash:4].[ext]`
    }
  };
};
