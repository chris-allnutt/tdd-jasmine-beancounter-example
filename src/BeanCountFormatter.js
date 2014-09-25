function BeanCountFormatter() {}

BeanCountFormatter.prototype.formatOutput = function(inventory, found) {
	var output = "Inventory: " + inventory + ", Found: " + found + ", ";

	if(this.isSurplus(inventory, found)) {
		output += "Surplus: " + Math.abs(inventory - found);
	} else {
		output += "Missing: " + (inventory - found);
	}
	
	return output;
}

BeanCountFormatter.prototype.isSurplus = function(inventory, found) {
	return found > inventory;
};