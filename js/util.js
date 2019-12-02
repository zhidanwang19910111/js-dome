// 冒泡排序

function Buublesort() {
	for(var j=0;j<arr.length-1;j++){
    //两两比较，如果前一个比后一个大，则交换位置。
       for(var i=0;i<arr.length-1-j;i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        } 
    }
}

// 快速排序

function quickSort(arr){
//如果数组长度小于等于1，则返回数组本身
    if(arr.length<=1){
        return arr;
    }
    //定义中间值的索引
    var index = Math.floor(arr.length/2);
    //取到中间值
    var temp = arr.splice(index,1);
    //定义左右部分数组
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
    //如果元素比中间值小，那么放在左边，否则放右边
        if(arr[i]<temp){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(temp,quickSort(right));
}

// 插入排序

function insertSort(arr){
//假设第0元素是有序序列，第1元素之后是无序的序列。从第1元素开始依次将无序序列的元素插入到有序序列中
    for(var i=1; i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            //取出无序序列中需要插入的第i个元素
            var temp = arr[i];
            //定义有序中的最后一个位置
            var j = i-1;
            arr[i] = arr[j];
            //比较大小，找到插入的位置
            while(j>=0&&temp<arr[j]){
                arr[j+1] = arr[j];
                j--;
            };
            //插入
            arr[j+1] = temp;
        }
    }
  }

// 选择排序
function selectSort(arr){
    for(var i=0;i<arr.length;i++){
        //设置当前范围最小值和索引
        var min = arr[i];
        var minIndex = i;
        //在该范围选出最小值
        for(var j=i+1;j<arr.length;j++){
            if(min>arr[j]){
                min = arr[j];
                minIndex = j;
            }
        }
        //将最小值插入,并将原来位置的最小值删除
        arr.splice(i,0,min);
        arr.splice(minIndex+1,1);
    }
}

