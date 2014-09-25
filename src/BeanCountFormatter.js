function BeanCountFormatter() {}

BeanCountFormatter.prototype.formatOutput = function(inventory, found) {
	return "Inventory: " + inventory + ", Found: " + found + ", Missing: " + (inventory - found);
}