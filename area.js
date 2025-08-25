function area(length, width) {
  if (length <= 0) {
    throw new RangeError("Length cannot be a Negative Number");
  }
  if (width <= 0) {
    throw new RangeError("Width cannot be a Negative Number");
  }
  let rectangle_area = length * width;
  console.log("The area of the Rectangle is ", rectangle_area);
}
area(-5, 3);
