// saturdayFun function declaration as specified
// 1) function exists
// 2) uses the default activity 'roller-skate' when no arguments are passed
// 3) permits the default activity to be overriden
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// mondayWork function expression as specified
// 1) function exists
// 2) uses the default activity 'go to the office' when no arguments are passed
// 3) permits the default activity to be overriden
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// wrapAdjective function according to the specification
// 1) function exists
// 2) when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
// 3) when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
function wrapAdjective(wrapper) {
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
