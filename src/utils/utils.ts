export const getArray = (num: Number) => {
  const arr:Number[] = [];
  let i = 1;
  while (i <= num) {
    i++;
    arr.push(i);
  }
  return arr;
};


/**
 * 截取文件名
 * @param name 文件名
 * @param maxLength 最大长度
 * @returns 截取后的文件名
 */
export const truncateFileName = (name: string, maxLength: number) => {
  if (name.length <= maxLength) return name;
  
  // 检查是否包含扩展名
  const lastDotIndex = name.lastIndexOf('.');
  
  // 如果没有扩展名或者点号在开头
  if (lastDotIndex <= 0) {
    return `${name.slice(0, maxLength)}...`;
  }
  
  // 有扩展名的情况
  const filename = name.slice(0, lastDotIndex);
  const ext = name.slice(lastDotIndex);
  return `${filename.slice(0, maxLength)}...${ext}`;
}
