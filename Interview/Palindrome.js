 let str = "madam"
 let rev="";
        for(let i=str.length-1;i>=0;i--)
        {
            rev += str[i];
        }
        console.log(str);
        console.log(rev);
       console.log(rev === str?"YES":"NO");
