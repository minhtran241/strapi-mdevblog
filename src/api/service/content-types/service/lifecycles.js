const slugify = require("slugify");

module.exports = {
  async beforeCreate(event) {
    if (event.params.data.name) {
      event.params.data.slug = slugify(event.params.data.name, {
        lower: true,
      });
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.name) {
      event.params.data.slug = slugify(event.params.data.name, {
        lower: true,
      });
    }
  },
};
