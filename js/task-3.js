function getElementWidth(content, padding, border) {
    const valueContent = parseFloat(content);
    const valuePadding = parseFloat(padding);
    const valueBorder = parseFloat(border);
    const totalWidth = valueContent + ((valuePadding + valueBorder) * 2);
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

