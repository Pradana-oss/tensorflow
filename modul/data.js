function gaussianRand(a,b) {
    var rand = 0
    for (var i = 0; i < 6; i++) {
    rand += Math.random()
    }
    return (rand / 6)+(Math.random()*a+b)
   }

// convert array of data point into 2d array
function toArray(arr){
    var out = [];
    for(var i = 0; i < arr.length; i++){
    out.push([arr[i].x,arr[i].y])
    }
    return out
}
   export function generateData(numPoints, class_frac){
    // class proportion
    let nx1 = Math.round(numPoints*class_frac)
    let nx2 = numPoints - nx1
   
    // create random 2 dimension data
    let data1 = Array(nx1).fill(0).map(() =>
    { return{'x':gaussianRand(10,7),'y':gaussianRand(10,7) }})
    let class1 = Array(nx1).fill(0)
   
    let data2 = Array(nx2).fill(0).map(() =>
    { return{'x':gaussianRand(9,0),'y':gaussianRand(9,0) }})
    let class2 = Array(nx2).fill(1)
   
    // split 30% for data validation
    let nv1 = Math.round(nx1*.7)
    let nv2 = Math.round(nx2*.7)
   
    // data point for visualization
    let trainPt = [data1.slice(0,nv1), data2.slice(0,nv2)]
    let valPt = [data1.slice(nv1), data2.slice(nv2)]
    // array data for TensorFlowJS
    let x_train = toArray(trainPt[0].concat(trainPt[1]))
    let y_train = class1.slice(0,nv1).concat(class2.slice(0,nv2))
    let x_val = toArray(valPt[0].concat(valPt[1]))
    let y_val = class1.slice(nv1).concat(class2.slice(nv2))
   
    return { x_train, y_train, x_val, y_val, trainPt, valPt }
   }