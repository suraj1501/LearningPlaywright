let a=[50,66,4,3,45,53,23,12,34,56];

for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]>a[j])
        {
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
        console.log("After first execution: " + a);
    }
     console.log("After second execution: " + a);
}
console.log("Sorted array is: " + a);   