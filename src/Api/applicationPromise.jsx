export const applicationPromise =( email,accessToken) => {
   return fetch(`http://localhost:3000/applications?email=${email}`,{
      headers:{
         authorization : `Bearer ${accessToken}`
      }
      // ekhon network tab er modde ei token ta pabo 
      // er por servr  e giye ei api er modde console.log korbo req.headers 
   }).then(res => res.json())
}