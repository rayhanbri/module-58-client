export  const jobPromise = (email,accessToken) => {
    return fetch(`http://localhost:3000/jobs/applications?email=${email}`,{
        headers:{
            authorization : `Bearer ${accessToken}`
            // server e giye if statement boshai dhibho 
        }
    }).then(res => res.json())
}