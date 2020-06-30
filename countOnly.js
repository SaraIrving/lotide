
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const key in itemsToCount) {
    if (allItems.includes(key)) {
        results[key] = 0;
      } else {
        results[key] = undefined;
      }
  };

  for (const name of allItems) {
    if (results[name] >= 0) {
      results[name] += 1;
    }
  };
  
  return results;
};

module.exports = countOnly;
