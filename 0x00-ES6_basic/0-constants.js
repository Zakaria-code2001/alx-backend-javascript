// 0-constants.js

/**
 * Returns a string indicating preference for const.
 * @returns {string} The task description.
 */
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  /**
   * Returns a string indicating that sometimes let is okay.
   * @returns {string} The last part of the combination.
   */
  export function getLast() {
    return ' is okay';
  }
  
  /**
   * Combines a base string with the result of getLast().
   * @returns {string} The combined string.
   */
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  