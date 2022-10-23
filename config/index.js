const dev = process.env.NODE_ENV !== 'production'
export const server = dev ? 'http://localhost:3000' :'yourwebsite.com'



//test
//daventyagency
export const database = 'test'




export const formatHeadingLink =(val)=>{
    let array = val.split(' ')
    const regex = /[^A-Za-z0-9]/g;
   let newarray = array.map(val=>{return val.toLowerCase().replace('?','')
   .replace('!','')
})
   
return newarray.join('-').toString()
}