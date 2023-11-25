export function getDate(n:any){
    n=new Date(n)
    return n.toLocaleDateString().replace(/\//g, "-") + "T" + n.toTimeString().substr(0, 8)+"Z"
  }