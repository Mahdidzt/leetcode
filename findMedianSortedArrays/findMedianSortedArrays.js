/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedList = [...nums1, ...nums2];
    const sortedList = mergedList.sort((a, b) => a - b);
    console.log('sortedList: ', sortedList);


    const startMedianPoint = Math.ceil(sortedList.length / 2);
    console.log('startMedianPoint: ', startMedianPoint);

    const endMedianPoint = sortedList.length - startMedianPoint + 1;
    console.log('endMedianPoint: ', endMedianPoint);

    const medianList = sortedList.slice(startMedianPoint - 1, endMedianPoint);
    console.log('medianList: ', medianList);

    const result = medianList.reduce((acc, item) => acc + item, 0) / medianList.length;

    return result;
};
const a1 = [1, 3, 10, 23, 45, 67, 89, 100, 111, 120];
const a2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(findMedianSortedArrays(a1, a2));
