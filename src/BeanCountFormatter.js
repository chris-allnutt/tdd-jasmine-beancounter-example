function BeanCountFormatter() {}

BeanCountFormatter.prototype.formatOutput = function(inventory, found) {
	if((inventory - found) < 0) {
		return "Inventory: " + inventory + ", Found: " + found + ", Surplus: " + Math.abs(inventory - found);
	}
	return "Inventory: " + inventory + ", Found: " + found + ", Missing: " + (inventory - found);
}