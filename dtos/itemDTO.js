// dtos/itemDTO.js
class ItemDTO {
  constructor(item) {
    this.id = item._id;
    this.name = item.name;
    this.description = item.description;
    this.price = item.price;
  }
}

module.exports = ItemDTO;
