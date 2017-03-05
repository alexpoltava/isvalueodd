module.exports = (value) => {
    const num = parseInt(value, 10);
    if ((num || value === 0) && !Array.isArray(value)) {
        return Boolean(num % 2);
    }
    throw new Error('Value is not a number');
};
