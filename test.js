let data = ["aadhaar", "no-aadhaar", "aadhaar", "aadhaar", "aadhaar", "aadhaar"]

// Filtering Valid Aadhaar persons

for (let i = 0; i < data.length; i++){
    if (data[i] == "no-aadhaar"){
        continue
    }

    console.log(data[i])
}


const users = [
    {

    name : 'John',
    aadhaar : 'No'

    },

    {

    name : 'David',
    aadhaar : 'No'
    
    },

    {

    name : 'Andrew',
    aadhaar : 'Yes'
        
    },

    {

    name : 'Selva',
    aadhaar : 'Yes'
    
    },

    {

    name : 'Nithish',
    aadhaar : 'Yes'
        
    },

]

// Filtering Aadhaar using switch 

for (let i = 0; i < users.length; i++){

    switch(users[i]["aadhaar"]){

        case "No":
            console.log('Sorry!, You are not eligible')
            break
        
        case "Yes":
            console.log(`${users[i]["name"]}, You're eligible!`)
    }
}

