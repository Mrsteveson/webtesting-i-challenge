module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// Successful enhancement
function succeed(item) {
  item = {...item, enhancement: item}
  
  if(item.enhancement !== 20) {
    return { ...item, enhancement: item.enhancement + 1 };
  } else {
    return {...item}
  }
};

// Failed enhancement
function fail(item) {
  if(item.enhancement < 15) {
    return {
      ...item,
      durability: item.durability - 5
    };
  } else {
    if(item.enhancement === 15) {
      return {
        ...item,
        durability: item.durability - 10
      }
    } else {
      return {
        ...item,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1
      };
    };
  };
};

// After a repair
function repair(item) {
  return { ...item, durability: 100 };
};

// Grab item
function get(item) {
  return { ...item };
};
