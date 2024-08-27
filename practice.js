// let freeshipping={
//     tv:7,table:12

// }
// let aligeble=Sum(freeshipping)
// function Sum(freeshipping){
//  let sum=0;
//     for(key in freeshipping){
//      sum+=freeshipping[key]
//     }
//     if(sum>=50){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(aligeble);
let a=[2,4,7,-1,-3]
let combare=Or(a)
function Or(a){
    let negative=[]
    let positive=[]
    for(let i=0;i<=a.length;i++){
        if(a[i]>=0){

            if(!positive.includes(i)){
                positive.push(a[i])
                
            }
        }
            else  if(!negative.includes(i)){
                
                if(!negative.includes(i)){
                    negative.push(a[i])
                    
                }
                
            }
        
        }
            
            if(negative.length>positive.length){
                return false
            }
            else{
                return true
            }

            

        

    }

console.log(combare);
