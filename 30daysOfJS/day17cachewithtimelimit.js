var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.cache.get(key);

  if (alreadyExists) {
    clearTimeout(alreadyExists.timeout);
  }

  const timeout = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  // we will set the key, value pair in our map
  this.cache.set(key, { value, timeout });

  return Boolean(alreadyExists);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // return value here
    return this.cache.get(key).value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */

/** NORMAL OBJECTS */

var TimeLimitedCache = function () {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existed = this.cache[key] !== undefined;

  this.cache[key] = value;

  setTimeout(() => {
    delete this.cache[key];
  }, duration);

  return existed;
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cache[key] ?? -1;
};

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

/**
 * 🧠 What is this code trying to do?

This code creates a cache (storage) where:

You can store a key-value pair

Each key expires after a certain time

After expiration, the key disappears

You can:

set a value

get a value

count how many valid keys exist

1️⃣ Creating the cache
var TimeLimitedCache = function () {
    this.cache = {};
};


This creates an empty object to store values

this.cache will hold key-value pairs

Each key lives only for a limited time

2️⃣ Setting a value with time limit
TimeLimitedCache.prototype.set = function (key, value, duration) {

Step-by-step:
const existed = this.cache[key] !== undefined;


First, check if the key already exists and hasn’t expired

This is important to return the correct boolean

this.cache[key] = value;


Store (or overwrite) the value

setTimeout(() => {
    delete this.cache[key];
}, duration);


Start a timer

After duration milliseconds, the key is removed automatically

return existed;


Return true if the key existed before

Return false if it’s a new key

3️⃣ Getting a value
TimeLimitedCache.prototype.get = function (key) {
    return this.cache[key] ?? -1;
};


If the key exists → return the value

If the key is missing or expired → return -1

4️⃣ Counting active keys
TimeLimitedCache.prototype.count = function () {
    return Object.keys(this.cache).length;
};


Count how many keys are currently in the cache

Expired keys are already removed, so counting is easy
 */
